<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Models\District;
use App\Models\State;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class DistrictController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $districts = District::query()
            ->when($request->input('search'), function($query, $search) {
                $query->whereHas('state', function($q) use ($search) {
                    $q->where('name', 'like', '%' . $search . '%');
                });
                $query->orWhere('name', 'like', '%' . $search . '%');
            })
            ->orderBy('state_id')
            ->orderBy('name')
            ->with('state')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Settings/District/Index', ['districts' => $districts, 'filters' => $request->only('search')]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $states = State::orderBy('name')->get();
        return Inertia::render('Settings/District/Create', ['states' => $states]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'state_id' => 'required',
            'name' => [
                'required',
                Rule::unique('dd_districts')->where('state_id', $request->input('state_id'))
            ]
        ], [
            'state_id.required' => 'Ruangan negeri perlu diisi',
            'name.required' => 'Ruangan daerah perlu diisi',
            'name.unique' => 'Nama Daerah telah wujud'
        ]);

        District::create([
            'state_id' => $request->input('state_id'),
            'name' => $request->input('name')
        ]);

        return redirect()->route('setting.district.index')->with('success', 'Maklumat Daerah berjaya disimpan.');
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
    public function edit(District $district)
    {
        $states = State::orderBy('name')->get();
        return Inertia::render('Settings/District/Edit', ['district' => $district, 'states' => $states]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, District $district)
    {
        $request->validate([
            'state_id' => 'required',
            'name' => [
                'required',
                Rule::unique('dd_districts')->where('state_id', $request->input('state_id'))->ignore($district->id)
            ]
        ], [
            'state_id.required' => 'Ruangan negeri perlu diisi',
            'name.required' => 'Ruangan daerah perlu diisi',
            'name.unique' => 'Nama Daerah telah wujud'
        ]);

        $district->update([
            'state_id' => $request->input('state_id'),
            'name' => $request->input('name')
        ]);

        return redirect()->route('setting.district.index')->with('success', 'Maklumat Daerah berjaya dikemaskini.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(District $district)
    {
        $district->delete();
        return back()->with('success', 'Maklumat Daerah berjaya dipadam.');
    }
}
