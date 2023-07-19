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
        Schema::create('disasters', function (Blueprint $table) {
            $table->id();
            $table->foreignId('kategori_id')->constrained('meta_datas');
            $table->string('name');
            $table->text('description')->nullable();
            $table->foreignId('level_id')->constrained('meta_datas');
            $table->timestamp('datetime_start');
            $table->timestamp('datetime_end')->nullable();
            $table->foreignId('state_id')->constrained('dd_states');
            $table->foreignId('district_id')->nullable()->constrained('dd_districts');
            $table->foreignId('parish_id')->nullable()->constrained('dd_parishes');
            $table->decimal('latitude', 11, 8)->nullable();
            $table->decimal('longitude', 11, 8)->nullable();
            $table->enum('status', ['Aktif', 'Tidak Aktif'])->default('Tidak Aktif');
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
        Schema::dropIfExists('disasters');
    }
};
