<?php

use App\Http\Controllers\Admin\MetaController;
use App\Http\Controllers\Admin\MetaDataController;
use App\Http\Controllers\Admin\PermissionController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Settings\StateController;
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
    });

    // DISASTER
    Route::prefix('disaster')->as('disaster.')->group(function() {
        Route::get('/', [App\Http\Controllers\DisasterController::class, 'index'])->name('index');
        Route::get('/create', [App\Http\Controllers\DisasterController::class, 'create'])->name('create');
        Route::post('/create', [App\Http\Controllers\DisasterController::class, 'store'])->name('store');
        Route::get('/{disaster}/show', [App\Http\Controllers\DisasterController::class, 'show'])->name('show');
        Route::get('/{disaster}/edit', [App\Http\Controllers\DisasterController::class, 'edit'])->name('edit');
        Route::post('/{disaster}/edit', [App\Http\Controllers\DisasterController::class, 'update'])->name('update');
        Route::delete('/{disaster}/delete', [App\Http\Controllers\DisasterController::class, 'destroy'])->name('destroy');
    });
});

require __DIR__.'/auth.php';
