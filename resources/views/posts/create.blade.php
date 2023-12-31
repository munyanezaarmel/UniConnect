
<div class="container h-100 mt-5">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col-10 col-md-8 col-lg-6">
        <h3>Add a Post</h3>
        <form action="{{ route('posts.store') }}" method="post" enctype="multipart/form-data">
          @csrf
          <div class="form-group modal fade text-left" id="ModalCreate" tabindex="-1" role="dialog" aria-hidden="true">
            <label for="title">description</label>
            <input type="text" class="form-control" id="description" name="description" required>
          </div>
          <div class="form-group">
            <label for="body">tags</label>
            <textarea class="form-control" id="tags" name="tags" rows="3" required></textarea>
          </div>
       <div class="mb-3">
                            <label for="">Upload Image</label>
                            <input type="file" name="image"class="course form-control">
                            @error('image')
                            <p class="text-red-500 text-xs mt-1">{{$message}}</p>
                            @enderror
                        </div>
          <br>
          <button type="submit" class="btn btn-primary">Create Post</button>
        </form>
      </div>
    </div>
  </div>