<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function show(Request $request)
    {
        return $comment = Comment::find($request->id)->with("User");
    }
    public function index(Request $request)
    {
        return $comment = Comment::with('User')->get();
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $comment = new Comment();
        $comment->message = $data['message'];
        $comment->parent_id = $data["parent_id"];
        $comment->post_id = $data["post_id"];
        $comment->user_id = $data["post_id"];
        $comment->save();
        return response()->json($data);
    }
}
