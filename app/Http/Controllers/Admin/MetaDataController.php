<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Meta;
use App\Models\MetaData;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MetaDataController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $metaDatas = MetaData::query()
            ->when($request->input('search'), function($query, $search) {
                $query->whereHas('meta', function($q) use ($search) {
                    $q->where('name', 'like', '%' . $search . '%');
                    $q->orWhere('display_name', 'like', '%' . $search . '%');
                });
                $query->orWhere('name', 'like', '%' . $search . '%');
                $query->orWhere('group_helper', 'like', '%' . $search . '%');
            })
            ->with('meta')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/MetaData/Index', ['metaDatas' => $metaDatas, 'filters' => $request->only('search')]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $metas = Meta::orderBy('name')->get();
        return Inertia::render('Admin/MetaData/Create', ['metas' => $metas]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'meta_id' => 'required',
            'name' => 'required'
        ]);

        MetaData::create([
            'meta_id' => $request->input('meta_id'),
            'name' => $request->input('name'),
            'group_helper' => $request->input('group_helper')
        ]);

        return redirect()->route('admin.meta-data.index')->with('success', 'Meta Data Successful Created.');
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
    public function edit(MetaData $metaData)
    {
        $metas = Meta::orderBy('name')->get();
        return Inertia::render('Admin/MetaData/Edit', ['metas' => $metas, 'metaData' => $metaData]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, MetaData $metaData)
    {
        $request->validate([
            'meta_id' => 'required',
            'name' => 'required'
        ]);

        $metaData->update([
            'meta_id' => $request->input('meta_id'),
            'name' => $request->input('name'),
            'group_helper' => $request->input('group_helper')
        ]);

        return redirect()->route('admin.meta-data.index')->with('success', 'Meta Data Successful Updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MetaData $metaData)
    {
        $metaData->delete();
        return back()->with('success', 'Meta Data Successful Deleted.');
    }
}
