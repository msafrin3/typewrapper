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
            count(DISTINCT a.district_id) AS total_district,
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
            b.group_helper AS kategori_icon,
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
                        $trend = 'Tidak Berubah';
                        if($previous_report != null) {
                            $prev_shelter = $previous_report->details()
                                ->where('disaster_id', $shelter->disaster_id)
                                ->where('state_id', $shelter->state_id)
                                ->where('shelter_id', $shelter->shelter_id)
                                ->first();

                            if($prev_shelter) {
                                if($shelter->total_mangsa > $prev_shelter->total_mangsa) {
                                    $trend = 'Meningkat';
                                } elseif($shelter->total_mangsa < $prev_shelter->total_mangsa) {
                                    $trend = 'Menurun';
                                } else {
                                    $trend = 'Tidak Berubah';
                                }
                            }
                        }
                        $shelter->trend = $trend;
                    }

                    $district->shelters = $shelters;
                }

                $state->districts = $districts;
            }

            $type->states = $states;
        }

        return [
            'summary' => $summary, 
            'disaster_by_state' => $disaster_by_state, 
            'disaster_by_type' => $disaster_by_type, 
            'table_shelter_detail' => $this->renderTableShelterDetail($disaster_by_type, $summary)
        ];
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

    public function renderTableShelterDetail($disaster_by_type, $summary)
    {
        $shelter_detail_row = '';

        foreach($disaster_by_type as $type_index => $type) {
            $count_shelter_by_type = 0;
            foreach($type->states as $state) {
                foreach($state->districts as $district) {
                    $count_shelter_by_type = $count_shelter_by_type + count($district->shelters);
                }
            }
            $type_ismerge = true;

            foreach($type->states as $state_index => $state) {
                $count_shelter_by_state = 1;
                foreach($state->districts as $district) {
                    $count_shelter_by_state = $count_shelter_by_state + count($district->shelters);
                }
                $state_ismerge = true;

                foreach($state->districts as $district_index => $district) {
                    $count_shelter_by_district = count($district->shelters);
                    $district_ismerge = true;

                    foreach($district->shelters as $shelter_index => $shelter) {
                        $shelter_detail_row .= '<tr>';
                        if($shelter_index == 0 && $type_ismerge == true) {
                            $shelter_detail_row .= '<td rowspan="'. $count_shelter_by_type + count($type->states) .'" align="center"><img src="'. url('') . $type->kategori_icon .'" style="width:45px"><br/><br/><span class="bencana-title">'. $type->kategori .'</span></td>';
                            $type_ismerge = false;
                        }
                        if($shelter_index == 0 && $state_ismerge == true) {
                            $shelter_detail_row .= '<td rowspan="'. $count_shelter_by_state .'">'. $state->state .'</td>';
                            $state_ismerge = false;
                        }
                        if($shelter_index == 0 && $district_ismerge == true) {
                            $shelter_detail_row .= '<td rowspan="'. $count_shelter_by_district .'">'. $district->district .'</td>';
                        }
                        $shelter_detail_row .= '<td>'. $shelter->shelter_name .'</td>';
                        $shelter_detail_row .= '<td align="center">'. $shelter->total_keluarga .'</td>';
                        $shelter_detail_row .= '<td align="center">'. $shelter->total_mangsa .'</td>';
                        $shelter_detail_row .= '<td align="center"><b>'. $shelter->trend .'</b></td>';
                        $shelter_detail_row .= '</tr>';
                    }
                }
                $shelter_detail_row .= '<tr style="background:#5aacff;color:white">';
                $shelter_detail_row .= '<td colspan="2" align="right">JUMLAH</td>';
                $shelter_detail_row .= '<td align="center">'. $state->total_keluarga .'</td>';
                $shelter_detail_row .= '<td align="center">'. $state->total_mangsa .'</td>';
                $shelter_detail_row .= '<td align="center"><b>'. $state->trend .'</b></td>';
                $shelter_detail_row .= '</tr>';
            }
        }

        $shelter_detail_row .= '<tr style="background:yellow">';
        $shelter_detail_row .= '<td colspan="4" align="right">JUMLAH KESELURUHAN</td>';
        $shelter_detail_row .= '<td align="center">'. $summary['total_keluarga'] .'</td>';
        $shelter_detail_row .= '<td align="center">'. $summary['total_mangsa'] .'</td>';
        $shelter_detail_row .= '<td align="center"><b>'. $summary['trend'] .'</b></td>';
        $shelter_detail_row .= '</tr>';

        $table_shelter_detail = '<table class="table-detail" border="1" width="100%">'.
            '<thead>'.
                '<tr>'.
                    '<th>BENCANA</th>'.
                    '<th>NEGERI</th>'.
                    '<th>DAERAH</th>'.
                    '<th>PUSAT PEMINDAHAN SEMENTARA (PPS)</th>'.
                    '<th>KELUARGA</th>'.
                    '<th>MANGSA</th>'.
                    '<th>TREND</th>'.
                '</tr>'.
            '</thead>'.
            '<tbody>'.
            $shelter_detail_row .
            '</tbody>'.
        '</table>';

        return $table_shelter_detail;
    }

}