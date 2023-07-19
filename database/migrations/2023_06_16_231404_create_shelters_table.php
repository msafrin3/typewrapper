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
        Schema::create('shelters', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('shelter_type_id')->constrained('meta_datas');
            $table->foreignId('state_id')->constrained('dd_states');
            $table->foreignId('district_id')->constrained('dd_districts');
            $table->foreignId('parish_id')->nullable()->constrained('dd_parishes');
            $table->decimal('latitude', 11, 8)->nullable();
            $table->decimal('longitude', 11, 8)->nullable();
            $table->string('pic_name')->nullable();
            $table->string('pic_notel1')->nullable();
            $table->string('pic_notel2')->nullable();
            $table->foreignId('created_by_id')->constrained('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shelters');
    }
};
