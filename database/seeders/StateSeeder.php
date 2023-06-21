<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class StateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('dd_states')->insert([
            ['name' => 'Johor', 'created_at' => new Carbon(), 'updated_at' => new Carbon()],
            ['name' => 'Kedah', 'created_at' => new Carbon(), 'updated_at' => new Carbon()],
            ['name' => 'Kelantan', 'created_at' => new Carbon(), 'updated_at' => new Carbon()],
            ['name' => 'Kuala Lumpur', 'created_at' => new Carbon(), 'updated_at' => new Carbon()],
            ['name' => 'Labuan', 'created_at' => new Carbon(), 'updated_at' => new Carbon()],
            ['name' => 'Melaka', 'created_at' => new Carbon(), 'updated_at' => new Carbon()],
            ['name' => 'Negeri Sembilan', 'created_at' => new Carbon(), 'updated_at' => new Carbon()],
            ['name' => 'Pahang', 'created_at' => new Carbon(), 'updated_at' => new Carbon()],
            ['name' => 'Perak', 'created_at' => new Carbon(), 'updated_at' => new Carbon()],
            ['name' => 'Perlis', 'created_at' => new Carbon(), 'updated_at' => new Carbon()],
            ['name' => 'Pulau Pinang', 'created_at' => new Carbon(), 'updated_at' => new Carbon()],
            ['name' => 'Putrajaya', 'created_at' => new Carbon(), 'updated_at' => new Carbon()],
            ['name' => 'Sabah', 'created_at' => new Carbon(), 'updated_at' => new Carbon()],
            ['name' => 'Sarawak', 'created_at' => new Carbon(), 'updated_at' => new Carbon()],
            ['name' => 'Selangor', 'created_at' => new Carbon(), 'updated_at' => new Carbon()],
            ['name' => 'Terengganu', 'created_at' => new Carbon(), 'updated_at' => new Carbon()]
        ]);
    }
}
