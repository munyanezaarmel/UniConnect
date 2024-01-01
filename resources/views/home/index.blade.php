@extends('layouts.app-master')

@section('content')
    {{-- <div class="bg-light p-5 rounded">
        @auth
        <h1>Posts</h1>
        <p class="lead">Only authenticated users can access this section.</p>
        <a href="{{ route('dashboard.index') }}" class="btn btn-lg btn-warning me-2">Goto Dashboard</a>
        @endauth

        @guest
        <h1 class="text-red">Homepage</h1>
        <p class="lead">please login to view posts like and comment.</p>
        @endguest
    </div> --}}
    <div class="flex">
        <aside class="mt-20  w-1/4 ">
            <ul class="m-5" >
                <li class="flex gap-2 mb-3">
                    <x-heroicon-s-home class="h-6 w-9"/> Home
                 </li>
                 <li class="flex gap-2 mb-3">
                    <x-zondicon-explore class="h-6 w-9"/> Explore
                  </li>
                  <li class="flex gap-2 mb-3">
                    <x-zondicon-bookmark class="h-6 w-9"/> Bookmarks
                </li>
                <li class="flex gap-2 mb-3"><x-css-profile class="h-6 w-9 "/>Profile</li>
              
       
          <li class="flex gap-2 mb-3">
            <x-feathericon-settings class="h-6 w-9"/> Settings
          </li>
          @auth
         <a class="no-underline text-[#191919]" href="{{ route('logout.perform') }}"><li class="no-underline flex gap-2 mb-3">
            <x-eos-logout  class="h-6 w-9"/> Logout
          </li></a>
          @endauth
          {{-- <a href="{{ route('posts.create') }}" class="text-center no-underline bg-slate-700 px-2 py-2 text-white  rounded-md w-55">Create Post</a>
          <li><button onclick="Livewire.dispatch('openModal', { component: 'create-posts' })"  class=" text-center bg-slate-700 px-2 py-2 text-white  rounded-md w-55">create posts</button></li> --}}
          <button type="button" class="text-center no-underline bg-slate-700 px-2 py-2 text-white  rounded-md w-55" data-bs-toggle="modal" data-bs-target="#createPostModal">
            Create Post
          </button>
          
          @include('posts.createPostModal')
        </ul>
   

   
        </aside>
        <div class="flex flex-col flex-wrap items-center justify-center mt-20">
            @foreach ($posts as $post)
            
                <div class="w-[800px] h-auto rounded overflow-hidden shadow-lg mb-4">
                    <div class="flex items-center  gap-2" >
                        @if (Session::has('profile_image'))
                        <img src="{{ Session::get('profile_image') }}" alt="Profile Image" class="rounded-full h-12 w-12">
                    @else
                        <img src="{{ asset('assets/images/image.png') }}" alt="Default Avatar" class="rounded-full h-12 w-12">
                    @endif

                        <div class="flex flex-col items-start">
                            <div class="font-bold text-xl m-1">
                                @auth {{auth()->user()->name}}
                               </div> 
                               @endauth
                            <div class="">  {{ $post->created_at->diffForHumans() }}</div>
                        </div>
                       
                    </div>
                    
               
                    {{-- {{$listing->logo ? asset('storage/' . $listing->logo) : asset('/images/no-image.png')}} --}}
                    <img src="{{$post->image ? asset('storage/' . $post->image) : asset('/images/image.png')}}" alt="Avatar" class="w-full h-auto object-cover">
                    <div class="px-6 py-4">
                      {{-- {{dd($post->image)}} --}}
                      
                        <p class="text-gray-700 text-base">
                            {{ $post->description }}
                        </p>
                        <button class="text-base p-2 bg-gray-700 rounded-full  text-white">
                            {{ $post->tags }}
                        </button>
                    </div>
                    <div class="flex justify-between mb-2">
                        <x-heroicon-o-heart class="h-6 w-9" />
                        <x-far-comment  class="h-6 w-9"/>
                        <x-heroicon-o-share  class="h-6 w-9"/>
                        <x-heroicon-o-bookmark class="h-6 w-9" />
                    </div>
                </div>
            @endforeach
            <livewire:comments :model="$post"/>
        </div>
@endsection