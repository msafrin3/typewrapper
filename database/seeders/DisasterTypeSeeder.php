<?php

namespace Database\Seeders;

use App\Models\Meta;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class DisasterTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // create meta record
        $meta = Meta::create(['name' => 'disaster_type', 'display_name' => 'Jenis Bencana']);

        DB::table('meta_datas')->insert([
            ["meta_id" => $meta->id, "name" => "BANJIR", "group_helper" => "BANJIR", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "BANJIR KILAT", "group_helper" => "BANJIR KILAT", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "CBRN", "group_helper" => "CBRN", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "GEMPA BUMI", "group_helper" => "GEMPA BUMI", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "JEREBU", "group_helper" => "JEREBU", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "KEBAKARAN", "group_helper" => "KEBAKARAN", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "KEMARAU", "group_helper" => "KEMARAU", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "LAIN-LAIN", "group_helper" => "LAIN-LAIN", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "LETUSAN GUNUNG BERAPI", "group_helper" => "LETUSAN GUNUNG BERAPI", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "PEMBAKARAN TERBUKA / KEBAKARAN HUTAN", "group_helper" => "PEMBAKARAN TERBUKA / KEBAKARAN HUTAN", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "PENCEMARAN INDUSTRI", "group_helper" => "PENCEMARAN INDUSTRI", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "PENCEMARAN MINYAK / GAS /PETROKIMIA", "group_helper" => "PENCEMARAN MINYAK / GAS /PETROKIMIA", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "PENCEMARAN RADIOAKTIF", "group_helper" => "PENCEMARAN RADIOAKTIF", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "PENCEMARAN UDARA", "group_helper" => "PENCEMARAN UDARA", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "RIBUT", "group_helper" => "RIBUT", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "RUNTUHAN BANGUNAN", "group_helper" => "RUNTUHAN BANGUNAN", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "TANAH RUNTUH", "group_helper" => "TANAH RUNTUH", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "TSUNAMI", "group_helper" => "TSUNAMI", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "WABAK", "group_helper" => "WABAK", "created_at" => new Carbon(), "updated_at" => new Carbon()]
        ]);
    }
}
