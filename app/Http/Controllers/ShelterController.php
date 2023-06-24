<?php

namespace App\Http\Controllers;

use App\Models\MetaData;
use App\Models\Shelter;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShelterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $shelters = Shelter::query()
            ->when($request->input('search'), function($query, $search) {
                //
            })
            ->with(['shelterType', 'state', 'district', 'parish'])
            ->paginate(20)
            ->withQueryString();

        return Inertia::render('Shelter/Index', ['shelters' => $shelters, 'filters' => $request->only('search')]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $types = MetaData::whereHas('meta', function($query) {
            $query->where('name', 'jenis_pps')->orderBy('name');
        })->get();
        
        return Inertia::render('Shelter/Create', ['types' => $types]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
