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

Route::get('/register', function() {
    return redirect()->route('dashboard');
});

Route::get('/', function () {
    // return Inertia::render('Welcome', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);
    return redirect()->route('dashboard');
});



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    // ADMINISTRATOR
    Route::prefix('admin')->as('admin.')->group(function() {
        Route::resource('user', UserController::class);
        Route::post('/user/restore/{id}', [UserController::class, 'restore'])->name('user.restore');
        Route::resource('role', RoleController::class);
        Route::resource('permission', PermissionController::class);
        Route::resource('meta', MetaController::class);
        Route::resource('meta-data', MetaDataController::class);
    });

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // SETTINGS
    // REGIONS
    Route::prefix('setting')->as('setting.')->group(function() {
        Route::resource('state', StateController::class);
        Route::resource('district', DistrictController::class);
        Route::resource('parish', ParishController::class);
    });

    // SHELTERS
    Route::prefix('shelter')->as('shelter.')->group(function() {
        Route::get('/', [App\Http\Controllers\ShelterController::class, 'index'])->name('index')->middleware('can:view-pps');
        Route::get('/create', [App\Http\Controllers\ShelterController::class, 'create'])->name('create')->middleware('can:create-pps');
        Route::post('/create', [App\Http\Controllers\ShelterController::class, 'store'])->name('store')->middleware('can:create-pps');
        Route::get('/{shelter}/show', [App\Http\Controllers\ShelterController::class, 'show'])->name('show')->middleware('can:view-pps');
        Route::get('/{shelter}/edit', [App\Http\Controllers\ShelterController::class, 'edit'])->name('edit')->middleware('can:edit-pps');
        Route::post('/{shelter}/edit', [App\Http\Controllers\ShelterController::class, 'update'])->name('update')->middleware('can:edit-pps');
        Route::delete('/{shelter}/delete', [App\Http\Controllers\ShelterController::class, 'destroy'])->name('destroy')->middleware('can:delete-pps');
    });

    // DISASTER
    Route::prefix('disaster')->as('disaster.')->group(function() {
        Route::get('/', [App\Http\Controllers\DisasterController::class, 'index'])->name('index')->middleware('can:view-bencana');
        Route::get('/create', [App\Http\Controllers\DisasterController::class, 'create'])->name('create')->middleware('can:create-bencana');
        Route::post('/create', [App\Http\Controllers\DisasterController::class, 'store'])->name('store')->middleware('can:create-bencana');
        Route::get('/{disaster}/show', [App\Http\Controllers\DisasterController::class, 'show'])->name('show')->middleware('can:view-bencana');
        Route::get('/{disaster}/edit', [App\Http\Controllers\DisasterController::class, 'edit'])->name('edit')->middleware('can:edit-bencana');
        Route::post('/{disaster}/edit', [App\Http\Controllers\DisasterController::class, 'update'])->name('update')->middleware('can:edit-bencana');
        Route::delete('/{disaster}/delete', [App\Http\Controllers\DisasterController::class, 'destroy'])->name('destroy')->middleware('can:delete-bencana');

        Route::prefix('{disaster}/shelter')->as('shelter.')->group(function() {
            Route::post('/create', [App\Http\Controllers\DisasterShelterController::class, 'store'])->name('store');
            Route::put('/{shelter}/edit', [App\Http\Controllers\DisasterShelterController::class, 'update'])->name('update');
        });
    });

    // REPORT
    Route::prefix('report')->as('report.')->group(function() {
        Route::get('/', [App\Http\Controllers\ReportController::class, 'index'])->name('index');
        Route::post('create', [App\Http\Controllers\ReportController::class, 'store'])->name('store');
        Route::get('/{report}', [App\Http\Controllers\ReportController::class, 'show'])->name('show');
    });
});

require __DIR__.'/auth.php';
