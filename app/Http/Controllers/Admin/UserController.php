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
        $users = User::query()
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

        // assign role
        if(count($request->input('roles')) > 0) {
            foreach($request->input('roles') as $r) {
                $role = Role::find($r);
                $user->assignRole($role->name);
            }
        }

        // assign permission
        if(count($request->input('permissions')) > 0) {
            foreach($request->input('permissions') as $perm) {
                $permission = Permission::find($perm);
                $user->givePermissionTo($permission->name);
            }
        }

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
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
