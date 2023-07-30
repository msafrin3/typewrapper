<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::statement("CREATE VIEW v_shelter_summary AS
            SELECT
            a.disaster_id,
            a.shelter_id,
            c.state_id,
            d.name AS state,
            c.district_id,
            e.name AS district,
            c.name AS shelter,
            a.total_keluarga,
            a.total_mangsa,
            a.total_kematian,
            IF(a.ditutup_pada IS NULL, 1, 0) is_active
            FROM disaster_shelters a
            LEFT JOIN disasters b ON a.disaster_id = b.id
            LEFT JOIN shelters c ON a.shelter_id = c.id
            LEFT JOIN dd_states d ON c.state_id = d.id
            LEFT JOIN dd_districts e ON c.district_id = e.id
            WHERE b.status = 'Aktif';");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement("DROP VIEW v_shelter_summary");
    }
};
