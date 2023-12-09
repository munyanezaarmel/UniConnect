@extends('layouts.app-master')

@section('content')
    <div class="bg-light p-5 rounded">
        @auth
        <h1>Posts</h1>
        <p class="lead">Only authenticated users can access this section.</p>
        <a href="{{ route('dashboard.index') }}" class="btn btn-lg btn-warning me-2">Goto Dashboard</a>
        @endauth

        @guest
        <h1 class="text-red">Homepage</h1>
        <p class="lead">please login to view posts like and comment.</p>
        @endguest
    </div>
@endsection