<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::post('/Createcomment', [CommentController::class, "store"]);
Route::get('/posts', [PostController::class, "index"]);
Route::get('/posts/{id}', [PostController::class, "show"]);
Route::get('/comments', [CommentController::class, "index"]);
Route::get('/comments/{id}', [CommentController::class, "show"]);
