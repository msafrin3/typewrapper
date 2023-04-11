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
        Schema::create('setting_organization_subcategories', function (Blueprint $table) {
            $table->id();
            $table->foreignId('organization_id')->constrained('setting_organizations');
            $table->foreignId('category_id')->constrained('setting_organization_categories');
            $table->string('name');
            $table->timestamps();
            $table->timestamp('deleted_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('setting_organization_subcategories');
    }
};
