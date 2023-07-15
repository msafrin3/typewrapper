<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('report_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('report_id')->constrained('reports');
            $table->foreignId('disaster_id')->constrained('disasters');
            $table->foreignId('kategori_id')->constrained('meta_datas');
            $table->foreignId('state_id')->constrained('dd_states');
            $table->foreignId('district_id')->constrained('dd_districts');
            $table->foreignId('shelter_id')->constrained('shelters');
            $table->integer('total_keluarga')->default(0);
            $table->integer('total_mangsa')->default(0);
            $table->integer('total_kematian')->default(0);
            $table->tinyIncrements('shelter_is_active')->default(0);
            $table->timestamps();
            $table->timestamp('deleted_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('report_details');
    }
};
