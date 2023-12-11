<header class="p-3 bg-[#15202B] shadow-md text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center gap-[20px] justify-between">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-[16px] font-bold text-white text-decoration-none">
          UniConnect
        </a>
        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search">
        </form>
  
        @auth
          {{auth()->user()->name}}
          <div class="text-end">
            {{-- <a href="{{ route('logout.perform') }}" class="btn btn-outline-light me-2 ml-3">Logout</a> --}}
          </div>
        @endauth
  
        {{-- @guest
          <div class="text-end">
            <a href="{{ route('login.perform') }}" class="btn btn-outline-light me-2">Login</a>
            <a href="{{ route('register.perform') }}" class="btn btn-warning">Sign-up</a>
          </div>
        @endguest --}}
        
      </div>
    </div>
  </header>