<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
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

Route::get('/',[PostController::class,"index"] );
Route::get('/aboutus',[PostController::class,"Aboutus"] );
Route::get('/contactus',[PostController::class,"contactus"] );
Route::get('/blogPage',[PostController::class,"blogPage"] );
Route::get('/postpage',[PostController::class,"postpage"] );
Route::get('/get',[PostController::class,"get"] );
Route::get('/getbanar',[PostController::class,"getbanar"] );
Route::get('/singlepost/{id}',[PostController::class,"viwepost"] );
Route::get('/getpost/{id}',[PostController::class,"getpost"] );
Route::get('/add',[PostController::class,"getpost"] );
Route::get('/update',[PostController::class,"getpost"] );
Route::get('/delete',[PostController::class,"getpost"] );
Route::get('/login',[UserController::class,"login"] );
Route::get('/signup',[UserController::class,"signup"] );
Route::get('/loginsubmit',[UserController::class,"loginsubmit"] )->name("log");
Route::get('/signupsubmit',[UserController::class,"signupsubmit"] )->name("sub");


