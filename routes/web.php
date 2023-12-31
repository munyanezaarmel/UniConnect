<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\PostController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::group(['namespace' => 'App\Http\Controllers'], function()
{   
    /**
     * Home Routes
     */
    Route::get('/', 'HomeController@index')->name('home.index');

    Route::group(['middleware' => ['guest']], function() {
        /**
         * Register Routes
         */
        Route::get('/register', 'RegisterController@show')->name('register.show');
        Route::post('/register', 'RegisterController@register')->name('register.perform');
        Route::get('/welcome', [WelcomeController::class, 'index']);


        /**
         * Login Routes
         */
        Route::get('/login', 'LoginController@show')->name('login.show');
        Route::post('/login', 'LoginController@login')->name('login.perform');
             /* Google Social Login */

        Route::get('/login/google', 'GoogleLoginController@redirect')->name('login.google-redirect');
        Route::get('/login/google/callback', 'GoogleLoginController@callback')->name('login.google-callback');

    });
    Route::group(['middleware' => ['auth']], function() {
// Route::get('/posts', PostController::class .'@index')->name('posts.index');

Route::get('/posts/create', PostController::class . '@create')->name('posts.create');

Route::post('/posts', PostController::class .'@store')->name('posts.store');

Route::get('/posts/{post}', PostController::class .'@show')->name('posts.show');

Route::get('/posts/{post}/edit', PostController::class .'@edit')->name('posts.edit');

Route::put('/posts/{post}', PostController::class .'@update')->name('posts.update');

Route::delete('/posts/{post}', PostController::class .'@destroy')->name('posts.destroy');
      
        Route::get('/logout', 'LogoutController@perform')->name('logout.perform');
    });
    
 
    Route::group(['middleware' => ['auth']], function() {
           //only verified account can access with this group
    Route::group(['middleware' => ['verified']], function() {
     
        Route::get('/dashboard', 'DashboardController@index')->name('dashboard.index');
});
        Route::get('/email/verify', 'VerificationController@show')->name('verification.notice');
        Route::get('/email/verify/{id}/{hash}', 'VerificationController@verify')->name('verification.verify')->middleware(['signed']);
        Route::post('/email/resend', 'VerificationController@resend')->name('verification.resend');
    });
    

});
