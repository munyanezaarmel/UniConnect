<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      $posts = Post::all();
      return view('home.index', compact('posts'));
    }
    public function create()
    {
      return view('posts.create');
    }

public function edit($id)
  {
    $post = Post::find($id);
    return view('posts.edit', compact('post'));
  }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       $formFields= $request->validate([
            'tags' => 'required',
            'description' => 'required',
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048'
          ]);
          if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public'); 
            $formFields['image'] = $imagePath; 
        }
    
        Post::create($formFields);
          return redirect()->route('home.index')
            ->with('success','Post created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
  {
    $post = Post::find($id);
    return view('posts.show', compact('post'));
  }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
  {
    $request->validate([
      'description' => 'required|max:255',
      'tags' => 'required',
    ]);
    $post = Post::find($id);
    $post->update($request->all());
    return redirect()->route('posts.index')
      ->with('success', 'Post updated successfully.');
  }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
  {
    $post = Post::find($id);
    $post->delete();
    return redirect()->route('posts.index')
      ->with('success', 'Post deleted successfully');
  }
}
