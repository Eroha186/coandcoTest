<?php

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

Route::get('/', 'ContactsController@show');

Route::post('/search', 'ContactsController@search');

Route::resource('contacts', 'ContactsController')->except(['index', 'create', 'show', 'edit']);
