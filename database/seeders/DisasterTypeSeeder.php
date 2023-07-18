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
            ["meta_id" => $meta->id, "name" => "BANJIR", "group_helper" => "/images/report_ico/bencana/22.png", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "BANJIR KILAT", "group_helper" => "/images/report_ico/bencana/163.png", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "CBRN", "group_helper" => "/images/report_ico/bencana/29.png", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "GEMPA BUMI", "group_helper" => "/images/report_ico/bencana/23.png", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "JEREBU", "group_helper" => "/images/report_ico/bencana/201.png", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "KEBAKARAN", "group_helper" => "/images/report_ico/bencana/14.png", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "KEMARAU", "group_helper" => "/images/report_ico/bencana/21.png", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "LAIN-LAIN", "group_helper" => "/images/report_ico/bencana/241.png", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "LETUSAN GUNUNG BERAPI", "group_helper" => "/images/report_ico/bencana/24.png", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "PEMBAKARAN TERBUKA / KEBAKARAN HUTAN", "group_helper" => "/images/report_ico/bencana/31.png", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "PENCEMARAN INDUSTRI", "group_helper" => "/images/report_ico/bencana/27.png", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "PENCEMARAN MINYAK / GAS /PETROKIMIA", "group_helper" => "/images/report_ico/bencana/28.png", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "PENCEMARAN RADIOAKTIF", "group_helper" => "/images/report_ico/bencana/166.png", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "PENCEMARAN UDARA", "group_helper" => "/images/report_ico/bencana/181.png", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "RIBUT", "group_helper" => "/images/report_ico/bencana/20.png", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "RUNTUHAN BANGUNAN", "group_helper" => "/images/report_ico/bencana/26.png", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "TANAH RUNTUH", "group_helper" => "/images/report_ico/bencana/19.png", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "TSUNAMI", "group_helper" => "/images/report_ico/bencana/18.png", "created_at" => new Carbon(), "updated_at" => new Carbon()],
            ["meta_id" => $meta->id, "name" => "WABAK", "group_helper" => "/images/report_ico/bencana/30.png", "created_at" => new Carbon(), "updated_at" => new Carbon()],
        ]);
    }
}
