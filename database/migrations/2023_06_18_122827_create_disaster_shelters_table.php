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
        Schema::create('disaster_shelters', function (Blueprint $table) {
            $table->id();
            $table->foreignId('disaster_id')->constrained('disasters');
            $table->foreignId('shelter_id')->constrained('shelters');
            $table->integer('total_keluarga')->nullable()->default(0);
            $table->integer('total_mangsa')->nullable()->default(0);
            $table->integer('total_kematian')->nullable()->default(0);
            $table->timestamp('dibuka_pada');
            $table->timestamp('ditutup_pada')->nullable();
            $table->string('pic_name')->nullable();
            $table->string('pic_notel')->nullable();
            $table->string('pic_jawatan')->nullable();
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
        Schema::dropIfExists('disaster_shelters');
    }
};
