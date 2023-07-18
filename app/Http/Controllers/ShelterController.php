<?php

namespace App\Http\Controllers;

use App\Models\District;
use App\Models\MetaData;
use App\Models\Parish;
use App\Models\Shelter;
use App\Models\State;
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
                $query->whereHas('state', function($q) use ($search) {
                    $q->where('name', 'like', '%' . $search . '%');
                });
                $query->whereHas('district', function($q) use ($search) {
                    $q->orWhere('name', 'like', '%' . $search . '%');
                });
                $query->orWhereHas('parish', function($q) use ($search) {
                    $q->where('name', 'like', '%' . $search . '%');
                });
                $query->orWhere('name', 'like', '%' . $search . '%');
            })
            ->orderBy('name')
            ->with(['shelterType', 'state', 'district', 'parish'])
            ->paginate(20)
            ->withQueryString();

        return Inertia::render('Shelter/Index', ['shelters' => $shelters, 'filters' => $request->only('search')]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $data['types'] = MetaData::whereHas('meta', function($query) {
            $query->where('name', 'jenis_pps')->orderBy('name');
        })->get();

        $data['states'] = State::orderBy('name')->get();

        if($request->has('state_id')) {
            $data['districts'] = District::where('state_id', $request->input('state_id'))->orderBy('name')->get();
        }

        if($request->has('district_id')) {
            $data['parishes'] = Parish::where('state_id', $request->input('state_id'))->where('district_id', $request->input('district_id'))->orderBy('name')->get();
        }
        
        return Inertia::render('Shelter/Create', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'shelter_type_id' => 'required',
            'state_id' => 'required',
            'district_id' => 'required'
        ]);

        Shelter::create([
            'name' => $request->input('name'),
            'shelter_type_id' => $request->input('shelter_type_id'),
            'state_id' => $request->input('state_id'),
            'district_id' => $request->input('district_id'),
            'parish_id' => $request->input('parish_id'),
            'latitude' => $request->input('latitude'),
            'longitude' => $request->input('longitude'),
            'pic_name' => $request->input('pic_name'),
            'pic_notel1' => $request->input('pic_notel1'),
            'created_by_id' => auth()->user()->id
        ]);

        return redirect()->route('shelter.index')->with('success', 'Maklumat Pusat Pemindahan Berjaya Disimpan');
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
    public function edit(Request $request, Shelter $shelter)
    {
        $data['types'] = MetaData::whereHas('meta', function($query) {
            $query->where('name', 'jenis_pps')->orderBy('name');
        })->get();

        $data['states'] = State::orderBy('name')->get();

        if($request->has('state_id')) {
            $data['districts'] = District::where('state_id', $request->input('state_id'))->orderBy('name')->get();
        } else {
            $data['districts'] = District::where('state_id', $shelter->state_id)->orderBy('name')->get();
        }

        if($request->has('district_id')) {
            $data['parishes'] = Parish::where('state_id', $request->input('state_id'))->where('district_id', $request->input('district_id'))->orderBy('name')->get();
        } else {
            $data['parishes'] = Parish::where('state_id', $shelter->state_id)->where('district_id', $shelter->district_id)->orderBy('name')->get();
        }

        $data['shelter'] = $shelter;

        return Inertia::render('Shelter/Edit', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Shelter $shelter)
    {
        $request->validate([
            'name' => 'required',
            'shelter_type_id' => 'required',
            'state_id' => 'required',
            'district_id' => 'required'
        ]);

        $shelter->update([
            'name' => $request->input('name'),
            'shelter_type_id' => $request->input('shelter_type_id'),
            'state_id' => $request->input('state_id'),
            'district_id' => $request->input('district_id'),
            'parish_id' => $request->input('parish_id'),
            'latitude' => $request->input('latitude'),
            'longitude' => $request->input('longitude'),
            'pic_name' => $request->input('pic_name'),
            'pic_notel1' => $request->input('pic_notel1'),
            'created_by_id' => auth()->user()->id
        ]);

        return redirect()->route('shelter.index')->with('success', 'Maklumat Pusat Pemindahan Berjaya Dikemaskini');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Shelter $shelter)
    {
        $shelter->delete();

        return back()->with('success', 'Maklumat Pusat Pemindahan Berjaya Dipadam');
    }
}
