<x-modal form-action="store">
  <form action="{{ route('posts.store') }}" method="post" enctype="multipart/form-data">
    @csrf
    <x-slot name="title">
     Create posts
    </x-slot>

    <x-slot name="content">
     
        <div class="form-group">
          <label for="title">description</label>
          <input type="text" class="form-control" id="description" name="description" required>
        </div>
      <div class="form-group">
        <label for="body">tags</label>
        <textarea class="form-control" id="tags" name="tags" rows="3" required></textarea>
      </div>
    </x-slot>

    <x-slot name="buttons">
     <div class="flex justify-around items-center">
      <div class="mb-3">
        <label for="">Upload Image</label>
        <input type="file" name="image"class="course form-control">
        @error('image')
        <p class="text-red-500 text-xs mt-1">{{$message}}</p>
        @enderror
    </div>
        <button type="submit" class="btn btn-primary">Create Post</button>
     </div>
    </x-slot>
  </form>
</x-modal>