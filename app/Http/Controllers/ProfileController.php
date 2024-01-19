<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function show()
    {
        $posts = Post::all();
        return view('home.profile',compact('posts'));
    }
}
