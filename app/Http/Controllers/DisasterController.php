<?php

namespace App\Http\Controllers;

use App\Models\Disaster;
use App\Models\DisasterShelter;
use App\Models\Meta;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\State;
use App\Models\District;
use App\Models\Parish;
use App\Models\Shelter;

class DisasterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $disasters = Disaster::query()
            ->with(['kategori', 'state', 'district', 'parish', 'createdBy', 'level'])
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Disaster/Index', ['disasters' => $disasters, 'filters' => $request->only('search')]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $types = Meta::where('name', 'disaster_type')->first();
        $data['types'] = $types->metaDatas;

        $levels = Meta::where('name', 'disaster_level')->first();
        $data['levels'] = $levels->metaDatas;

        $data['states'] = State::orderBy('name')->get();

        if($request->has('state_id')) {
            $data['districts'] = District::where('state_id', $request->input('state_id'))->orderBy('name')->get();
        }

        if($request->has('district_id')) {
            $data['parishes'] = Parish::where('state_id', $request->input('state_id'))->where('district_id', $request->input('district_id'))->orderBy('name')->get();
        }
        return Inertia::render('Disaster/Create', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'kategori_id' => 'required',
            'name' => 'required',
            'level_id' => 'required',
            'datetime_start' => 'required',
            'state_id' => 'required',
            'district_id' => 'required',
            'status' => 'required'
        ]);

        $data = $request->all();
        $data['created_by_id'] = auth()->user()->id;

        Disaster::create($data);

        return redirect()->route('disaster.index')->with('success', 'Maklumat Bencana Berjaya Disimpan');
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, Disaster $disaster)
    {
        $data['disaster'] = $disaster->load(['kategori', 'state', 'district', 'parish', 'createdBy', 'level']);

        $data['states'] = State::all();

        if($request->has('state_id')) {
            $data['districts'] = District::where('state_id', $request->input('state_id'))->orderBy('name')->get();
        }

        if($request->has('district_id')) {
            $data['parishes'] = Parish::where('state_id', $request->input('state_id'))->where('district_id', $request->input('district_id'))->orderBy('name')->get();
            $data['shelters'] = Shelter::where('state_id', $request->input('state_id'))->where('district_id', $request->input('district_id'))->orderBy('name')->get();
        }

        if($request->has('parish_id')) {
            $data['shelters'] = Shelter::where('state_id', $request->input('state_id'))->where('district_id', $request->input('district_id'))->where('parish_id', $request->input('parish_id'))->orderBy('name')->get();
        }

        // list shelters
        $data['disaster_shelters'] = $disaster->shelters()->with(['shelter.district'])->get();

        return Inertia::render('Disaster/Show', $data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, Disaster $disaster)
    {
        $data['disaster'] = $disaster;
        $types = Meta::where('name', 'disaster_type')->first();
        $data['types'] = $types->metaDatas;

        $levels = Meta::where('name', 'disaster_level')->first();
        $data['levels'] = $levels->metaDatas;

        $data['states'] = State::orderBy('name')->get();

        if($request->has('state_id')) {
            $data['districts'] = District::where('state_id', $request->input('state_id'))->orderBy('name')->get();
        } else {
            $data['districts'] = District::where('state_id', $disaster->state_id)->orderBy('name')->get();
        }

        if($request->has('district_id')) {
            $data['parishes'] = Parish::where('state_id', $request->input('state_id'))->where('district_id', $request->input('district_id'))->orderBy('name')->get();
        } else {
            $data['parishes'] = Parish::where('state_id', $disaster->state_id)->where('district_id', $disaster->district_id)->orderBy('name')->get();
        }
        return Inertia::render('Disaster/Edit', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Disaster $disaster)
    {
        $request->validate([
            'kategori_id' => 'required',
            'name' => 'required',
            'level_id' => 'required',
            'datetime_start' => 'required',
            'state_id' => 'required',
            'district_id' => 'required',
            'status' => 'required'
        ]);

        $data = $request->all();
        $data['created_by_id'] = auth()->user()->id;

        $disaster->update($data);

        return redirect()->route('disaster.index')->with('success', 'Maklumat Bencana Berjaya Dikemaskini');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
