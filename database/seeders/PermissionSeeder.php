<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $arr_permissions = [
            'view-administrator', 'view-user', 'create-user', 'edit-user', 'delete-user', 'restore-user',
            'view-role', 'create-role', 'edit-role', 'delete-role',
            'view-permission', 'create-permission', 'edit-permission', 'delete-permission'
        ];

        foreach($arr_permissions as $arr_permission) {
            Permission::create(['name' => $arr_permission]);
        }
        $role = Role::where('name', 'superadmin')->first();
        $permissions = Permission::whereIn('name', $arr_permissions)->get();
        
        $role->syncPermissions($permissions);
    }
}
