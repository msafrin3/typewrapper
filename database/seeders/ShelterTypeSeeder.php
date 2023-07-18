<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Meta;
use App\Models\MetaData;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class ShelterTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $meta = Meta::create(['name' => 'jenis_pps', 'display_name' => 'Jenis PPS']);

        DB::table('meta_datas')->insert([
            ['meta_id' => $meta->id, 'name' => 'BALAI RAYA', 'group_helper' => 'BALAI RAYA', 'created_at' => new Carbon(), 'updated_at' => new Carbon()],
            ['meta_id' => $meta->id, 'name' => 'DEWAN SERBAGUNA', 'group_helper' => 'DEWAN SERBAGUNA', 'created_at' => new Carbon(), 'updated_at' => new Carbon()],
            ['meta_id' => $meta->id, 'name' => 'MASJID', 'group_helper' => 'MASJID', 'created_at' => new Carbon(), 'updated_at' => new Carbon()],
            ['meta_id' => $meta->id, 'name' => 'SEKOLAH', 'group_helper' => 'SEKOLAH', 'created_at' => new Carbon(), 'updated_at' => new Carbon()],
            ['meta_id' => $meta->id, 'name' => 'SURAU', 'group_helper' => 'SURAU', 'created_at' => new Carbon(), 'updated_at' => new Carbon()],
            ['meta_id' => $meta->id, 'name' => 'LAIN-LAIN', 'group_helper' => 'LAIN-LAIN', 'created_at' => new Carbon(), 'updated_at' => new Carbon()],
        ]);
    }
}
