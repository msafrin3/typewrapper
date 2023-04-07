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
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->string('code');
            $table->string('name');
            $table->text('description');
            $table->enum('ticket_type', ['Incident', 'Service Request']);
            $table->foreignId('project_id')->constrained('projects');
            $table->foreignId('severity_id')->constrained('project_severities');
            $table->foreignId('organization_id')->constrained('setting_organizations');
            $table->timestamp('received_at');
            $table->timestamp('responded_at');
            $table->foreignId('organization_category_id')->constrained('setting_organization_categories');
            $table->foreignId('organization_subcategory_id')->constrained('setting_organization_subcategories');
            $table->foreignId('created_by_id')->constrained('users');
            $table->foreignId('assigned_to_id')->nullable()->constrained('users');
            $table->foreignId('customer_id')->constrained('users');
            $table->enum('status', ['New', 'Assigned', 'In Progress', 'On Hold', 'Resolved']);
            $table->timestamps();
            $table->timestamp('deleted_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
