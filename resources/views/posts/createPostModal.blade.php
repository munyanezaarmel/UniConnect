<div class="modal fade" id="createPostModal" tabindex="-1" aria-labelledby="createPostModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="createPostModalLabel">Create Post</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form action="{{ route('posts.store') }}" method="post" enctype="multipart/form-data">
            @csrf
            
              <label for="title">description</label>
              <input type="text" class="form-control" id="description" name="description" required>
           
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
  </div>
  