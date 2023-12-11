<x-modal>
    <x-slot name="title">
     Create posts
    </x-slot>

    <x-slot name="content">
      <textarea name="post" placeholder="what's on your mind?" id="" cols="30" rows="10"></textarea>
      <p>Pick tag for your posts(0/3)</p>
      <div class="grid grid-cols-4">
        <button>conservation</button>
        <button>entrepreneurship</button>
        <button>writing</button>
        <button>tech</button>
        <button>careers</button>
        <button>social</button>
        <button>music</button>
        <button>travel</button>
        <button>art</button>
        <button>food</button>
      </div>
    </x-slot>

    <x-slot name="buttons">
     <div class="flex justify-around items-center">
        <button>upload image</button>
        <button>create post</button>
     </div>
    </x-slot>
</x-modal>