<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Mail\CreateUser;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Str;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //
        $users = User::withTrashed()
            ->when($request->input('search'), function($query, $search) {
                $query->orWhere('name', 'like', '%' . $search . '%');
                $query->orWhere('email', 'like', '%' . $search . '%');
            })
            ->with(['roles', 'permissions'])
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/User/Index', ['users' => $users, 'filters' => $request->only('filters')]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $roles = Role::all();
        $permissions = Permission::all();
        
        return Inertia::render('Admin/User/Create', ['roles' => $roles, 'permissions' => $permissions]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // request validation
        $request->validate([
            'name' => 'required',
            'email' => 'required|unique:users',
            'roles' => 'required'
        ]);

        // generate temporary password for user
        $password = Str::random(6);

        // create user object
        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($password)
        ]);

        // sync role
        $user->syncRoles($request->input('roles'));

        // sync permission
        $user->syncPermissions($request->input('permissions'));

        // send the user information via email
        Mail::to($user->email)->queue(new CreateUser($user, $password));

        return redirect()->route('admin.user.index')->with('success', 'User Successfully Created');
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
    public function edit(User $user)
    {
        $roles = Role::all();
        $permissions = Permission::all();

        return Inertia::render('Admin/User/Edit', ['roles' => $roles, 'permissions' => $permissions, 'user' => $user->load(['roles', 'permissions'])]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        // request validation
        $request->validate([
            'name' => 'required',
            'email' => 'required|unique:users,email,' . $user->id,
            'roles' => 'required'
        ]);

        // create user object
        $user->update([
            'name' => $request->input('name'),
            'email' => $request->input('email')
        ]);

        // sync role
        $user->syncRoles($request->input('roles'));

        // sync permission
        $user->syncPermissions($request->input('permissions'));

        return redirect()->route('admin.user.index')->with('success', 'User Successfully Update');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();

        return back()->with('success', 'User Successfull Deleted.');
    }

    public function restore($id)
    {
        User::withTrashed()->find($id)->restore();

        return back()->with('success', 'User Successfully Restored.');
    }
}
