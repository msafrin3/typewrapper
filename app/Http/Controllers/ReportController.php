<?php

namespace App\Http\Controllers;

use App\Models\Disaster;
use App\Models\DisasterShelter;
use App\Models\Report;
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

        $data = $request->all();
        $data['created_by_id'] = auth()->user()->id;

        $summary = DB::select("SELECT
            count(a.state_id) AS total_state,
            count(a.district_id) AS total_district,
            sum(a.total_keluarga) AS total_keluarga,
            sum(a.total_mangsa) AS total_mangsa,
            sum(a.total_kematian) AS total_kematian,
            sum(IF(a.is_active = 1, 1, 0)) AS total_pps_buka,
            sum(IF(a.is_active = 0, 1, 0)) AS total_pps_tutup
            FROM
            (SELECT
            a.*,
            b.name AS shelter_name,
            c.kategori_id,
            e.name AS kategori,
            c.state_id,
            d.name AS state,
            c.district_id,
            f.name AS district,
            IF(a.ditutup_pada IS NULL, 1, 0) AS is_active
            FROM disaster_shelters a
            LEFT JOIN shelters b ON a.shelter_id = b.id
            LEFT JOIN disasters c ON a.disaster_id = c.id
            LEFT JOIN dd_states d ON c.state_id = d.id
            LEFT JOIN meta_datas e ON c.kategori_id = e.id
            LEFT JOIN dd_districts f ON c.district_id = f.id
            WHERE c.status = 'Aktif') a;");

        $disasters = Disaster::where('status', 'Aktif')->with([
            'kategori', 'level', 'state', 'district', 'parish', 'createdBy', 'shelters.shelter.state', 'shelters.shelter.district', 'shelters.shelter.parish'
        ])->orderBy('created_at', 'desc')->get();

        $disaster_by_type = DB::select("SELECT 
            a.kategori_id,
            a.kategori, 
            sum(a.total_keluarga) AS total_keluarga, 
            sum(a.total_mangsa) AS total_mangsa, 
            sum(a.total_kematian) AS total_kematian 
            FROM
            (SELECT
            a.*,
            c.kategori_id,
            e.name AS kategori,
            c.state_id,
            d.name AS state
            FROM disaster_shelters a
            LEFT JOIN shelters b ON a.shelter_id = b.id
            LEFT JOIN disasters c ON a.disaster_id = c.id
            LEFT JOIN dd_states d ON c.state_id = d.id
            LEFT JOIN meta_datas e ON c.kategori_id = e.id
            WHERE c.status = 'Aktif') a
            GROUP BY a.kategori_id;");

        foreach($disaster_by_type as $type) {
            $disaster_by_type_state = DB::select("SELECT 
                a.state_id,
                a.state, 
                sum(a.total_keluarga) AS total_keluarga, 
                sum(a.total_mangsa) AS total_mangsa, 
                sum(a.total_kematian) AS total_kematian 
                FROM
                (SELECT
                a.*,
                c.kategori_id,
                e.name AS kategori,
                c.state_id,
                d.name AS state
                FROM disaster_shelters a
                LEFT JOIN shelters b ON a.shelter_id = b.id
                LEFT JOIN disasters c ON a.disaster_id = c.id
                LEFT JOIN dd_states d ON c.state_id = d.id
                LEFT JOIN meta_datas e ON c.kategori_id = e.id
                WHERE c.status = 'Aktif') a
                WHERE a.kategori_id = ".$type->kategori_id."
                GROUP BY a.state_id;");

            foreach($disaster_by_type_state as $state) {
                $shelters = DB::select("SELECT
                    a.*,
                    b.name AS shelter_name,
                    c.kategori_id,
                    e.name AS kategori,
                    c.state_id,
                    d.name AS state
                    FROM disaster_shelters a
                    LEFT JOIN shelters b ON a.shelter_id = b.id
                    LEFT JOIN disasters c ON a.disaster_id = c.id
                    LEFT JOIN dd_states d ON c.state_id = d.id
                    LEFT JOIN meta_datas e ON c.kategori_id = e.id
                    WHERE c.status = 'Aktif'
                    HAVING kategori_id = ".$type->kategori_id."
                    AND state_id = ".$state->state_id);
                $state->shelters = $shelters;
            }

            $type->states = $disaster_by_type_state;
        }

        $disaster_by_state = DB::select("SELECT 
            a.state_id,
            a.state, 
            sum(a.total_keluarga) AS total_keluarga, 
            sum(a.total_mangsa) AS total_mangsa, 
            sum(a.total_kematian) AS total_kematian 
            FROM
            (SELECT
            a.*,
            c.state_id,
            d.name AS state
            FROM disaster_shelters a
            LEFT JOIN shelters b ON a.shelter_id = b.id
            LEFT JOIN disasters c ON a.disaster_id = c.id
            LEFT JOIN dd_states d ON c.state_id = d.id) a
            GROUP BY a.state_id;");

        $json = [
            'summary' => $summary,
            'disasters' => $disasters,
            'disasters_by_state' => $disaster_by_state,
            'disasters_by_type' => $disaster_by_type
        ];

        $data['json'] = json_encode($json);

        Report::create($data);

        return back()->with('success', 'Laporan Berjaya Dijana');
    }

    /**
     * Display the specified resource.
     */
    public function show(Report $report)
    {
        //
        // $pdf = PDF::loadView('pdf.test')
        //     ->setOption('margin-top', '20mm')
        //     ->setOption('margin-bottom', '20mm')
        //     ->setOption('margin-right', '20mm')
        //     ->setOption('margin-left', '20mm');
        // return $pdf->inline();
        $data = json_decode($report->json);

        return view('pdf.report', ['report' => $report, 'data' => $data]);
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
