<?php

namespace Database\Seeders;

use App\Models\Meta;
use App\Models\MetaData;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DisasterLevel extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $meta = Meta::create(['name' => 'disaster_level', 'display_name' => 'Level Bencana']);

        DB::table('meta_datas')->insert([
            ['meta_id' => $meta->id, 'name' => 'Level 0 (Village)', 'group_helper' => 'Level 0 (Village)', 'created_at' => new Carbon(), 'updated_at' => new Carbon()],
            ['meta_id' => $meta->id, 'name' => 'Level 1 (District)', 'group_helper' => 'Level 1 (District)', 'created_at' => new Carbon(), 'updated_at' => new Carbon()],
            ['meta_id' => $meta->id, 'name' => 'Level 2 (State)', 'group_helper' => 'Level 2 (State)', 'created_at' => new Carbon(), 'updated_at' => new Carbon()],
            ['meta_id' => $meta->id, 'name' => 'Level 3 (Nation)', 'group_helper' => 'Level 3 (Nation)', 'created_at' => new Carbon(), 'updated_at' => new Carbon()]
        ]);
    }
}
