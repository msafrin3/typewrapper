<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    
    public function index() {
        $query = DB::select("SELECT
            count(DISTINCT disaster_id) AS total_disaster,
            count(DISTINCT state_id) AS total_state,
            count(DISTINCT district_id) AS total_district,
            sum(total_keluarga) AS total_keluarga,
            sum(total_mangsa) AS total_mangsa,
            sum(total_kematian) AS total_kematian,
            sum(is_active) AS total_pps_aktif
            FROM v_shelter_summary;");

        if(count($query) > 0) {
            $summary = [
                'total_disaster' => intval($query[0]->total_disaster),
                'total_state' => intval($query[0]->total_state),
                'total_district' => intval($query[0]->total_district),
                'total_keluarga' => intval($query[0]->total_keluarga),
                'total_mangsa' => intval($query[0]->total_mangsa),
                'total_kematian' => intval($query[0]->total_kematian),
                'total_pps_aktif' => intval($query[0]->total_pps_aktif)
            ];
        } else {
            $summary = [
                'total_disaster' => 0,
                'total_state' => 0,
                'total_district' => 0,
                'total_keluarga' => 0,
                'total_mangsa' => 0,
                'total_kematian' => 0,
                'total_pps_aktif' => 0
            ];
        }

        return Inertia::render('Dashboard', ['summary' => $summary]);
    }

}
