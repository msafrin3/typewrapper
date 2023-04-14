<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $permissions = Permission::query()
            ->when($request->input('search'), function($query, $search) {
                $query->where('name', 'like', '%' . $search . '%');
            })
            ->paginate(20)
            ->withQueryString();

        return Inertia::render('Admin/Permission/Index', ['permissions' => $permissions, 'filters' => $request->only('search')]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Permission/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:permissions'
        ]);

        Permission::create(['name' => $request->input('name')]);

        return redirect()->route('admin.permission.index')->with('success', 'Permission created.');
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
    public function edit(Permission $permission)
    {
        return Inertia::render('Admin/Permission/Edit', ['permission' => $permission]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Permission $permission)
    {
        $request->validate([
            'name' => 'required|unique:permissions,name,' . $permission->id
        ]);

        $permission->update(['name' => $request->input('name')]);

        return redirect()->route('admin.permission.index')->with('success', 'Permission successfully updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Permission $permission)
    {
        $permission->delete();

        return back()->with('success', 'Permission Successfull Deleted.');
    }
}
