<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\ProfileController as AdminProfileController;
use App\Http\Controllers\FrontController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SitemapController;
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

Route::get('/',[FrontController::class,'index'])->name('home');
Route::get('/tentang-kami',[FrontController::class,'aboutUs'])->name('aboutUs');
Route::get('/produk',[FrontController::class,'product'])->name('product');
Route::get('/produk/{slug}',[FrontController::class,'productDetail'])->name('productDetail');
Route::get('/kontak',[FrontController::class,'contact'])->name('contact');
Route::post('/kontak',[FrontController::class,'contactStore'])->name('contactStore');
Route::get('/sitemap.xml',[SitemapController::class,'index'])->name('sitemap');

Route::middleware(['auth', 'verified'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard',[DashboardController::class,'index'])->name('dashboard');
    Route::resource('/category',CategoryController::class);
    Route::resource('/product',ProductController::class);
    Route::get('/profile',[AdminProfileController::class,'index'])->name('profile');
    Route::patch('/profile',[AdminProfileController::class,'update'])->name('profile.update');
});

require __DIR__.'/auth.php';
