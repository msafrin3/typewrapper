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
        $previous_report = (new ReportService())->findPreviousReport($report);
        $previous_report_detail = null;
        if($previous_report) {
            $previous_report_detail = (new ReportService())->reportDetails($previous_report);
        }
        $data = [
            'report' => $report,
            'data' => (new ReportService())->reportDetails($report),
            'previous_report' => $previous_report_detail
        ];

        $pdf = PDF::loadView('pdf.report', ['report' => $report]);
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
