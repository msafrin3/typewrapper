<?php

namespace App\Http\Controllers;

use App\Models\Disaster;
use App\Models\DisasterShelter;
use Illuminate\Http\Request;

class DisasterShelterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(Request $request, Disaster $disaster)
    {
        $request->validate([
            'shelter_id' => 'required',
            'dibuka_pada' => 'required'
        ]);

        $data = $request->all();
        $data['disaster_id'] = $disaster->id;
        $data['created_by_id'] = auth()->user()->id;

        // update shelter info if existed
        $shelter = $disaster->shelters()->where('shelter_id', $request->input('shelter_id'))->first();
        if($shelter) {
            $shelter->update($data);
        } else {
            DisasterShelter::create($data);
        }

        return back()->with('success', 'Maklumat Pusat Pemindahan berjaya disimpan');
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
    public function update(Request $request, Disaster $disaster, DisasterShelter $shelter)
    {
        $request->validate([
            'shelter_id' => 'required',
            'dibuka_pada' => 'required'
        ]);

        $data = $request->all();
        $data['disaster_id'] = $disaster->id;
        $data['created_by_id'] = auth()->user()->id;

        $shelter->update($data);

        return back()->with('success', 'Maklumat Pusat Pemindahan berjaya dikemaskini');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
