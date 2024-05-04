<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return response()->json($posts);
    }

    public function show(Request $request)
    {
        return $post = Post::with([
            'comments' => function ($query) {
                $query->orderBy('id', 'desc')->with('User')->get();
            }
        ])->find($request->id);
    }
}
