<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\Parish\StoreRequest;
use App\Http\Requests\Parish\UpdateRequest;
use App\Models\District;
use App\Models\Parish;
use App\Models\State;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ParishController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $parishes = Parish::query()
            ->when($request->input('search'), function($query, $search) {
                $query->whereHas('state', function($q) use ($search) {
                    $q->where('name', 'like', '%' . $search . '%');
                });
                $query->whereHas('district', function($q) use ($search) {
                    $q->orWhere('name', 'like', '%' . $search . '%');
                });
                $query->where('name', 'like', '%' . $search . '%');
            })
            ->orderBy('state_id')
            ->orderBy('district_id')
            ->orderBy('name')
            ->with(['state', 'district'])
            ->paginate(20)
            ->withQueryString();

        return Inertia::render('Settings/Parish/Index', ['parishes' => $parishes, 'filters' => $request->only('search')]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        //
        $data['states'] = State::orderBy('name')->get();
        if($request->has('state_id')) {
            $data['districts'] = District::where('state_id', $request->input('state_id'))->orderBy('name')->get();
        }
        return Inertia::render('Settings/Parish/Create', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        //
        Parish::create([
            'state_id' => $request->input('state_id'),
            'district_id' => $request->input('district_id'),
            'name' => $request->input('name')
        ]);
        return redirect()->route('setting.parish.index')->with('success', 'Maklumat mukim berjaya disimpan.');
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
    public function edit(Request $request, Parish $parish)
    {
        //
        $data['parish'] = $parish;
        $data['states'] = State::orderBy('name')->get();
        if($request->has('state_id')) {
            $data['districts'] = District::where('state_id', $request->input('state_id'))->orderBy('name')->get();
        }
        return Inertia::render('Settings/Parish/Edit', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, Parish $parish)
    {
        //
        $parish->update([
            'state_id' => $request->input('state_id'),
            'district_id' => $request->input('district_id'),
            'name' => $request->input('name')
        ]);
        return redirect()->route('setting.parish.index')->with('success', 'Maklumat mukim berjaya dikemaskini.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Parish $parish)
    {
        //
        $parish->delete();
        return back()->with('success', 'Maklumat mukim berjaya dipadam.');
    }
}
