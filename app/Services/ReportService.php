<?php

namespace App\Services;
use App\Models\Report;
use App\Models\ReportDetail;
use Illuminate\Support\Facades\DB;

class ReportService {

    public function reportDetails($report)
    {
        //
        // get previous report
        $previous_report = $this->findPreviousReport($report);

        $previous_mangsa = 0;
        if($previous_report) {
            $previous_mangsa = $previous_report->details()->sum('total_mangsa');
        }

        // get summary from the report
        $summary_trend = 'Tidak Berubah';
        if($report->details()->sum('total_mangsa') > $previous_mangsa) {
            $summary_trend = 'Meningkat';
        } elseif($report->details()->sum('total_mangsa') < $previous_mangsa) {
            $summary_trend = 'Menurun';
        }

        $summary = [
            'total_negeri' => $report->details()->groupBy('state_id')->get()->count(),
            'total_daerah' => $report->details()->groupBy('district_id')->get()->count(),
            'total_keluarga' => $report->details()->sum('total_keluarga'),
            'total_mangsa' => $report->details()->sum('total_mangsa'),
            'total_kematian' => $report->details()->sum('total_kematian'),
            'total_pps_buka' => $report->details()->where('shelter_is_active', 1)->count(),
            'total_pps_tutup' => $report->details()->where('shelter_is_active', 0)->count(),
            'trend' => $summary_trend
        ];

        $disaster_by_state = DB::select("SELECT
            a.state_id,
            b.name AS state,
            count(a.district_id) AS total_district,
            sum(a.total_keluarga) AS total_keluarga,
            sum(a.total_mangsa) AS total_mangsa,
            sum(a.total_kematian) AS total_kematian,
            sum(IF(a.shelter_is_active = 1, 1, 0)) AS total_pps_buka,
            sum(IF(a.shelter_is_active = 0, 1, 0)) AS total_pps_tutup
            FROM report_details AS a
            LEFT JOIN dd_states AS b ON a.state_id = b.id
            WHERE a.report_id = ". $report->id ."
            GROUP BY a.state_id;");

        $disaster_by_type = DB::select("SELECT
            a.kategori_id,
            b.name AS kategori,
            sum(a.total_keluarga) AS total_keluarga,
            sum(a.total_mangsa) AS total_mangsa,
            sum(a.total_kematian) AS total_kematian,
            sum(IF(a.shelter_is_active = 1, 1, 0)) AS total_pps_buka,
            sum(IF(a.shelter_is_active = 0, 1, 0)) AS total_pps_tutup
            FROM report_details AS a
            LEFT JOIN meta_datas AS b ON a.kategori_id = b.id
            WHERE a.report_id = ". $report->id ."
            GROUP BY a.kategori_id;");
        
        foreach($disaster_by_type as $type) {
            $states = DB::select("SELECT
                a.state_id,
                b.name AS state,
                sum(a.total_keluarga) AS total_keluarga,
                sum(a.total_mangsa) AS total_mangsa,
                sum(a.total_kematian) AS total_kematian,
                sum(IF(a.shelter_is_active = 1, 1, 0)) AS total_pps_buka,
                sum(IF(a.shelter_is_active = 0, 1, 0)) AS total_pps_tutup
                FROM report_details AS a
                LEFT JOIN dd_states AS b ON a.state_id = b.id
                WHERE a.report_id = ". $report->id ."
                AND a.kategori_id = ". $type->kategori_id ."
                GROUP BY a.state_id;");

            foreach($states as $state) {
                // compare with the previous report
                $prev_mangsa_state = ($previous_report ? $previous_report->details()->where('state_id', $state->state_id)->sum('total_mangsa') : 0);

                $state_trend = 'Tidak Berubah';
                if($state->total_mangsa > $prev_mangsa_state) {
                    $state_trend = 'Meningkat';
                } elseif($state->total_mangsa < $prev_mangsa_state) {
                    $state_trend = 'Menurun';
                } else {
                    $state_trend = 'Tidak Berubah';
                }
                $state->trend = $state_trend;

                $districts = DB::select("SELECT
                    a.state_id,
                    a.district_id,
                    b.name AS district,
                    sum(a.total_keluarga) AS total_keluarga,
                    sum(a.total_mangsa) AS total_mangsa,
                    sum(a.total_kematian) AS total_kematian,
                    sum(IF(a.shelter_is_active = 1, 1, 0)) AS total_pps_buka,
                    sum(IF(a.shelter_is_active = 0, 1, 0)) AS total_pps_tutup
                    FROM report_details AS a
                    LEFT JOIN dd_districts AS b ON a.district_id = b.id
                    WHERE a.kategori_id = ". $type->kategori_id ."
                    AND a.state_id = ". $state->state_id ."
                    GROUP BY a.state_id, a.district_id;");

                foreach($districts as $district) {
                    $shelters = DB::select("SELECT
                        a.disaster_id,
                        a.state_id,
                        a.shelter_id,
                        b.name AS shelter_name,
                        a.total_keluarga,
                        a.total_mangsa,
                        a.total_kematian
                        FROM report_details AS a
                        LEFT JOIN shelters AS b ON a.shelter_id = b.id
                        WHERE a.report_id = ". $report->id ."
                        AND a.kategori_id = ". $type->kategori_id ."
                        AND a.state_id = ". $state->state_id ."
                        AND a.district_id = ". $district->district_id);

                    // compare with previous report
                    foreach($shelters as $shelter) {
                        if($previous_report != null) {
                            $prev_shelter = $previous_report->details()
                                ->where('disaster_id', $shelter->disaster_id)
                                ->where('state_id', $shelter->state_id)
                                ->where('shelter_id', $shelter->shelter_id)
                                ->first();

                            $trend = 'Tidak Berubah';
                            if($prev_shelter) {
                                if($shelter->total_mangsa > $prev_shelter->total_mangsa) {
                                    $trend = 'Meningkat';
                                } elseif($shelter->total_mangsa < $prev_shelter->total_mangsa) {
                                    $trend = 'Menurun';
                                } else {
                                    $trend = 'Tidak Berubah';
                                }
                            }
                            $shelter->trend = $trend;
                        }
                    }

                    $district->shelters = $shelters;
                }

                $state->districts = $districts;
            }

            $type->states = $states;
        }

        return ['summary' => $summary, 'disaster_by_state' => $disaster_by_state, 'disaster_by_type' => $disaster_by_type];
    }

    public function getPreviousShelterDetail($report, $kategori_id, $shelter_id)
    {
        // find shelter details from previous report\
        $prev_report = $this->findPreviousReport($report);

        if($prev_report) {
            $shelter_detail = $prev_report->details()->where('kategori_id', $kategori_id)->where('shelter_id', $shelter_id)->first();
            if($shelter_detail) {
                return $shelter_detail;
            }
        }
    }

    public function findPreviousReport($report)
    {
        $found = false;
        $report_id = $report->id;
        $prev_report = null;
        do {
            $report_id--;
            $prev_report = Report::find($report_id);
            if($prev_report) {
                $found = true;
            }
        } while (!$found && $report_id < 0);
        
        return $prev_report;
    }

}