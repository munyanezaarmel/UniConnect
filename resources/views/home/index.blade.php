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
          <li><button onclick="Livewire.dispatch('openModal', { component: 'create-posts' })"  class=" text-center bg-slate-700 px-2 py-2 text-white  rounded-md w-55">create posts</button></li>
        </ul>
   
        </aside>
        <div class="mt-20">
            <div class="flex gap-2">
              
                    <img src="{{ asset('assets/images/image.png') }}" alt="avatar" class="rounded-full h-12 w-12">
             
            <div class="flex flex-col">
                <h3>Team Uniconnect</h3>
                <p class=""> 2 weeks ago</p>
            </div>
          
            </div>
           
            <p>Hello all this is the beginning of app comment a feature or improvement you would like to see</p>
            <img src="{{ asset('assets/images/image.png') }}" alt="" class="w-1/2 min-w-1/2 min-h-full max-h-full object-cover rounded">
            <div class="flex gap-40 items-center mt-2">
                <x-heroicon-o-heart class="h-6 w-9" />
                <x-far-comment  class="h-6 w-9"/>
                <x-heroicon-o-share  class="h-6 w-9"/>
                <x-heroicon-o-bookmark class="h-6 w-9" />
            </div>
        </div>

    </div>

  
  

@endsection