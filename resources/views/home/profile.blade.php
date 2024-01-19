@extends('layouts.app-master')

@section('content')
        </aside>
        <div class="flex flex-col flex-wrap items-center justify-center mt-20 ">
            @foreach ($posts as $post)
            
                <div class="w-[900px]  h-[500px] rounded overflow-hidden shadow-lg mb-4">
                    <div class="flex items-center justify-center gap-2" >
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
                
                        <p class="text-gray-700 text-base">
                            {{ $post->description }}
                        </p>

                    </div>
                   
                </div>
            @endforeach
        
        </div>
@endsection