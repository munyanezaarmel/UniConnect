<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite('resources/css/app.css')
    <title>Welcome | UniConnect</title>
    <style>
        /* Apply styles to the image */
        img {
            max-width: 100%;
            height: auto;
            display: block; /* Ensures image doesn't have extra space underneath */
            margin: 0 auto; /* Centers the image horizontally */
        }
        body{
              background-image: url("{{ asset('assets/images/image.png') }}");
background-repeat: no-repeat;
background-position: center center;
background-attachment: fixed;
background-size: cover;

        }
    </style>
</head>
<body >
   <div class="flex flex-col justify-center items-start">
    <h1 class="text-[#fff] mt-40 ml-20 text-[68px] w-[50%] ">UniConnect. Transforming Community Connections</h1>
    <p class="w-[30%] text-white ml-20 pt-5 text-[18px]">UniConnect is a social platform for communities. Join to interact with other members and share your knowledge, experience and ideas.</p>
   <a href="{{ route('register.perform') }}">
    <button class="px-4 ml-20 py-2 mt-5 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
        <span class="text-white ">Create a Free Account</span>
    </button>
    </a> 
    <p class="text-center text-white ml-40 pt-5 "> OR</p>
    <a href="{{ url('login/google') }} " class="pt-10 ml-20">
            <button class="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo">
                <span class="text-white">Continue with Google</span>
            </button>
    </a>
   </div>

</body>
</html>