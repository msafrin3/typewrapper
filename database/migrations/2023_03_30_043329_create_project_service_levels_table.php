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
        Schema::create('project_service_levels', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');

            $table->integer('irt_hour')->default(0);
            $table->integer('irt_minute')->default(0);
            $table->double('irt_penalty', 8, 2)->default(0.00);

            $table->integer('ort_hour')->default(0);
            $table->integer('ort_minute')->default(0);
            $table->double('ort_penalty', 8, 2)->default(0.00);

            $table->integer('prt_hour')->default(0);
            $table->integer('prt_minute')->default(0);
            $table->double('prt_penalty', 8, 2)->default(0.00);
            $table->timestamps();
            $table->timestamp('deleted_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('project_service_levels');
    }
};
