<div class="container h-100 mt-5">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col-10 col-md-8 col-lg-6">
        <h3>Update Post</h3>
        <form action="{{ route('posts.update', $post->id) }}" method="post">
          @csrf
          @method('PUT')
          <div class="form-group">
            <label for="description">description</label>
            <input type="text" class="form-control" id="description" name="description"
              value="{{ $post->description }}" required>
          </div>
          <div class="form-group">
            <label for="tags">tags</label>
            <textarea class="form-control" id="tags" name="tags" rows="3" required>{{ $post->tags }}</textarea>
          </div>
          <button type="submit" class="btn mt-3 btn-primary">Update Post</button>
        </form>
      </div>
    </div>
  </div>