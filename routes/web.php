<?php

use App\Http\Controllers\Admin\MetaController;
use App\Http\Controllers\Admin\MetaDataController;
use App\Http\Controllers\Admin\PermissionController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Settings\DistrictController;
use App\Http\Controllers\Settings\ParishController;
use App\Http\Controllers\Settings\StateController;
use App\Http\Controllers\ShelterController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/testimage', [App\Http\Controllers\DummyController::class, 'testimage']);
Route::get('/testcommand', [App\Http\Controllers\DummyController::class, 'runCommand']);

Route::get('/register', function() {
    return redirect()->route('type.index');
});
Route::get('/', [App\Http\Controllers\TypeController::class, 'index'])->name('type.index');

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function() {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    
    // ADMINISTRATOR
    Route::prefix('admin')->as('admin.')->group(function() {
        // USER MANAGEMENT
        Route::prefix('user')->as('user.')->group(function() {
            Route::get('/', [App\Http\Controllers\Admin\UserController::class, 'index'])->name('index')->middleware('can:view-user');
            Route::get('/create', [App\Http\Controllers\Admin\UserController::class, 'create'])->name('create')->middleware('can:create-user');
            Route::post('/create', [App\Http\Controllers\Admin\UserController::class, 'store'])->name('store')->middleware('can:create-user');
            Route::get('/{user}/show', [App\Http\Controllers\Admin\UserController::class, 'show'])->name('show')->middleware('can:view-user');
            Route::get('/{user}/edit', [App\Http\Controllers\Admin\UserController::class, 'edit'])->name('edit')->middleware('can:edit-user');
            Route::put('/{user}/edit', [App\Http\Controllers\Admin\UserController::class, 'update'])->name('update')->middleware('can:edit-user');
            Route::delete('/{user}', [App\Http\Controllers\Admin\UserController::class, 'destroy'])->name('destroy')->middleware('can:delete-user');
            Route::post('/{user}/restore', [App\Http\Controllers\Admin\UserController::class, 'restore'])->name('restore');
        });

        // ROLE MANAGEMENT
        Route::prefix('role')->as('role.')->group(function() {
            Route::get('/', [App\Http\Controllers\Admin\RoleController::class, 'index'])->name('index')->middleware('can:view-role');
            Route::get('/create', [App\Http\Controllers\Admin\RoleController::class, 'create'])->name('create')->middleware('can:create-role');
            Route::post('/create', [App\Http\Controllers\Admin\RoleController::class, 'store'])->name('store')->middleware('can:create-role');
            Route::get('/{role}/show', [App\Http\Controllers\Admin\RoleController::class, 'show'])->name('show')->middleware('can:view-role');
            Route::get('/{role}/edit', [App\Http\Controllers\Admin\RoleController::class, 'edit'])->name('edit')->middleware('can:edit-role');
            Route::put('/{role}/edit', [App\Http\Controllers\Admin\RoleController::class, 'update'])->name('update')->middleware('can:edit-role');
            Route::delete('/{role}', [App\Http\Controllers\Admin\RoleController::class, 'destroy'])->name('destroy')->middleware('can:delete-role');
        });

        // PERMISSION MAANGEMENT
        Route::prefix('permission')->as('permission.')->group(function() {
            Route::get('/', [App\Http\Controllers\Admin\PermissionController::class, 'index'])->name('index')->middleware('can:view-permission');
            Route::get('/create', [App\Http\Controllers\Admin\PermissionController::class, 'create'])->name('create')->middleware('can:create-permission');
            Route::post('/create', [App\Http\Controllers\Admin\PermissionController::class, 'store'])->name('store')->middleware('can:create-permission');
            Route::get('/{permission}/show', [App\Http\Controllers\Admin\PermissionController::class, 'show'])->name('show')->middleware('can:view-permission');
            Route::get('/{permission}/edit', [App\Http\Controllers\Admin\PermissionController::class, 'edit'])->name('edit')->middleware('can:edit-permission');
            Route::put('/{permission}/edit', [App\Http\Controllers\Admin\PermissionController::class, 'update'])->name('update')->middleware('can:edit-permission');
            Route::delete('/{permission}', [App\Http\Controllers\Admin\PermissionController::class, 'destroy'])->name('destroy')->middleware('can:delete-permission');
        });

        // META MAANGEMENT
        Route::prefix('meta')->as('meta.')->group(function() {
            Route::get('/', [App\Http\Controllers\Admin\MetaController::class, 'index'])->name('index')->middleware('can:view-meta');
            Route::get('/create', [App\Http\Controllers\Admin\MetaController::class, 'create'])->name('create')->middleware('can:create-meta');
            Route::post('/create', [App\Http\Controllers\Admin\MetaController::class, 'store'])->name('store')->middleware('can:create-meta');
            Route::get('/{meta}/show', [App\Http\Controllers\Admin\MetaController::class, 'show'])->name('show')->middleware('can:view-meta');
            Route::get('/{meta}/edit', [App\Http\Controllers\Admin\MetaController::class, 'edit'])->name('edit')->middleware('can:edit-meta');
            Route::put('/{meta}/edit', [App\Http\Controllers\Admin\MetaController::class, 'update'])->name('update')->middleware('can:edit-meta');
            Route::delete('/{meta}', [App\Http\Controllers\Admin\MetaController::class, 'destroy'])->name('destroy')->middleware('can:delete-meta');
        });

        // META DATA MAANGEMENT
        Route::prefix('meta-data')->as('meta-data.')->group(function() {
            Route::get('/', [App\Http\Controllers\Admin\MetaDataController::class, 'index'])->name('index')->middleware('can:view-meta-data');
            Route::get('/create', [App\Http\Controllers\Admin\MetaDataController::class, 'create'])->name('create')->middleware('can:create-meta-data');
            Route::post('/create', [App\Http\Controllers\Admin\MetaDataController::class, 'store'])->name('store')->middleware('can:create-meta-data');
            Route::get('/{metaData}/show', [App\Http\Controllers\Admin\MetaDataController::class, 'show'])->name('show')->middleware('can:view-meta-data');
            Route::get('/{metaData}/edit', [App\Http\Controllers\Admin\MetaDataController::class, 'edit'])->name('edit')->middleware('can:edit-meta-data');
            Route::put('/{metaData}/edit', [App\Http\Controllers\Admin\MetaDataController::class, 'update'])->name('update')->middleware('can:edit-meta-data');
            Route::delete('/{metaData}', [App\Http\Controllers\Admin\MetaDataController::class, 'destroy'])->name('destroy')->middleware('can:delete-meta-data');
        });
    });

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
