<?php

namespace App\Http\Controllers;

use App\Models\Disaster;
use App\Models\DisasterShelter;
use App\Models\Report;
use App\Models\ReportDetail;
use App\Services\ReportService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use PDF;

class ReportController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $data['reports'] = Report::query()
            ->orderBy('report_date', 'desc')
            ->with(['createdBy'])
            ->paginate(20)
            ->withQueryString();
        
        $data['filters'] = $request->only('search');

        return Inertia::render('Report/Index', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'report_date' => 'required'
        ]);

        $report = Report::create([
            'report_date' => $request->input('report_date'),
            'created_by_id' => auth()->user()->id
        ]);

        // get active disasters
        $disasters = Disaster::where('status', 'Aktif')->get();

        foreach($disasters as $disaster) {
            foreach($disaster->shelters as $shelter) {
                ReportDetail::create([
                    'report_id' => $report->id,
                    'disaster_id' => $disaster->id,
                    'kategori_id' => $disaster->kategori_id,
                    'state_id' => $shelter->shelter->state_id,
                    'district_id' => $shelter->shelter->district_id,
                    'shelter_id' => $shelter->shelter_id,
                    'total_keluarga' => $shelter->total_keluarga,
                    'total_mangsa' => $shelter->total_mangsa,
                    'total_kematian' => $shelter->total_kematian,
                    'shelter_is_active' => ($shelter->ditutup_pada == null ? 1 : 0)
                ]);
            }
        }

        return back()->with('success', 'Laporan Berjaya Dijana');
    }

    /**
     * Display the specified resource.
     */
    public function show(Report $report)
    {
        //
        $data = [
            'report' => $report,
            'data' => (new ReportService())->reportDetails($report)
        ];

        $shelter_detail_row = '';

        foreach($data['data']['disaster_by_type'] as $type_index => $type) {
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
                            $shelter_detail_row .= '<td rowspan="'. $count_shelter_by_type + count($type->states) .'">'. $type->kategori .'</td>';
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
        $shelter_detail_row .= '<td align="center">'. $data['data']['summary']['total_keluarga'] .'</td>';
        $shelter_detail_row .= '<td align="center">'. $data['data']['summary']['total_mangsa'] .'</td>';
        $shelter_detail_row .= '<td align="center"><b>'. $data['data']['summary']['trend'] .'</b></td>';
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

        $data['data']['table_shelter_detail'] = $table_shelter_detail;

        $pdf = PDF::loadView('pdf.report', $data);
        return $pdf->inline();

        return view('pdf.report', ['report' => $report]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
