<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Meta;
use Illuminate\Http\Request;
use Illuminate\Support\Pluralizer;
use Inertia\Inertia;

class MetaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $metas = Meta::query()
            ->when($request->input('search'), function($query, $search) {
                $query->where('name', 'like', '%' . $search . '%');
                $query->orWhere('display_name', 'like', '%' . $search . '%');
            })
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/Meta/Index', ['metas' => $metas, 'filters' => $request->only('search')]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Meta/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:metas',
            'display_name' => 'required'
        ]);

        Meta::create([
            'name' => $request->input('name'),
            'display_name' => $request->input('display_name')
        ]);

        return redirect()->route('admin.meta.index')->with('success', 'Meta Successful Created.');
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
    public function edit(Meta $metum)
    {
        return Inertia::render('Admin/Meta/Edit', ['meta' => $metum]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Meta $metum)
    {
        $request->validate([
            'name' => 'required|unique:metas,name,' . $metum->id,
            'display_name' => 'required'
        ]);

        $metum->update([
            'name' => $request->input('name'),
            'display_name' => $request->input('display_name')
        ]);

        return redirect()->route('admin.meta.index')->with('success', 'Meta Successful Updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Meta $metum)
    {
        $metum->metaDatas()->delete();
        $metum->delete();

        return back()->with('success', 'Meta Successful Deleted.');
    }
}
