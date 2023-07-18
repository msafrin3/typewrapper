<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Models\State;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $states = State::query()
            ->when($request->has('search'), function($query, $search) {
                $query->where('name', 'like', '%' . $search . '%');
            })
            ->paginate(20)
            ->withQueryString();

        return Inertia::render('Settings/State/Index', ['states' => $states, 'filters' => $request->only('search')]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Settings/State/Create');
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
    public function edit(State $state)
    {
        return Inertia::render('Settings/State/Edit', ['state' => $state]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, State $state)
    {
        $request->validate([
            'name' => 'required|unique:dd_states,name,' . $state->id
        ]);

        $state->update(['name' => $request->input('name')]);

        return redirect()->route('setting.state.index')->with('success', 'Maklumat Negeri berjaya dikemaskini.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(State $state)
    {
        $state->delete();

        return back()->with('success', 'Maklumat negeri berjaya dipadam.');
    }
}
