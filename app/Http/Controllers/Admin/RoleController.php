<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $roles = Role::query()
            ->when($request->input('search'), function ($query, $search) {
                $query->where('name', 'like', '%' . $search . '%');
            })
            ->with('permissions')
            ->paginate(20)
            ->withQueryString();

        return Inertia::render('Admin/Role/Index', ['roles' => $roles, 'filters' => $request->only('search')]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $permissions = Permission::all();
        return Inertia::render('Admin/Role/Create', ['permissions' => $permissions]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:roles'
        ]);

        $role = Role::create(['name' => $request->input('name')]);

        if (count($request->input('permissions')) > 0) {
            foreach ($request->input('permissions') as $perm) {
                $permission = Permission::find($perm);
                $role->givePermissionTo($permission);
            }
        }

        return redirect()->route('admin.role.index')->with('success', 'Role Successfull Created.');
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
    public function edit(Role $role)
    {
        $permissions = Permission::all();
        return Inertia::render('Admin/Role/Edit', ['_permissions' => $permissions, 'role' => $role->load('permissions')]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Role $role)
    {
        $request->validate([
            'name' => 'required|unique:roles,name,' . $role->id
        ]);

        $role->update(['name' => $request->input('name')]);
        $role->syncPermissions($request->input('permissions'));

        return redirect()->route('admin.role.index')->with('success', 'Role Successfull Updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Role $role)
    {
        $users = User::role([$role->name])->get();
        foreach($users as $user) {
            $user->removeRole($role->name);
        }
        $role->delete();
        return back()->with('success', 'Role Successfull Deleted.');
    }
}
