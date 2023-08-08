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
            'create-meta','create-meta-data','create-permission','create-role',
            'create-user','delete-meta','delete-meta-data','delete-permission',
            'delete-role','delete-user','edit-meta','edit-meta-data','edit-permission','edit-role','edit-user',
            'view-administrator','view-meta','view-meta-data','view-permission',
            'view-role','view-user'
        ];

        foreach($arr_permissions as $arr_permission) {
            Permission::create(['name' => $arr_permission]);
        }
        $role = Role::where('name', 'superadmin')->first();
        $permissions = Permission::whereIn('name', $arr_permissions)->get();
        
        $role->syncPermissions($permissions);
    }
}
