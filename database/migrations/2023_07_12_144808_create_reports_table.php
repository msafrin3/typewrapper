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
        Schema::create('reports', function (Blueprint $table) {
            $table->id();
            $table->timestamp('report_date');
            $table->text('json');
            $table->text('path')->nullable();
            $table->foreignId('created_by_id')->constrained('users');
            $table->timestamps();
            $table->timestamp('deleted_at')->nullable();
        });

        Schema::create('reports', function (Blueprint $table) {
            $table->id();
            $table->timestamp('report_date');
            $table->foreignId('disaster_id')->constrained('disasters');
            $table->foreignId('kategori_id')->constrained('meta_datas');
            $table->foreignId('state_id')->constrained('dd_states');
            $table->foreignId('district_id')->constrained('dd_districts');
            $table->foreignId('shelter_id')->constrained('shelters');
            $table->integer('total_keluarga')->default(0);
            $table->integer('total_mangsa')->default(0);
            $table->integer('total_kematian')->default(0);
            $table->foreignId('created_by_id')->constrained('users');
            $table->timestamps();
            $table->timestamp('deleted_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reports');
    }
};
