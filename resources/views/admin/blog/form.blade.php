<div class="form-body">
    <div class="row">
        <div class="col-md-12">
            <div class="form-group">
                <label>Category</label>
                <select name="blog_id" class="form-control">
                    @foreach($category as $cat)
                    <option {{$cat->id == $blog->blog_id}} value="{{$cat->id}}">{{$cat->name}}</option>
                    @endforeach
                </select>
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
                {!! Form::label('name', 'Name') !!}
                {!! Form::text('name', null, ('required' == 'required') ? ['class' => 'form-control', 'required' => 'required'] : ['class' => 'form-control']) !!}
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
                {!! Form::label('short_detail', 'Short Detail') !!}
                {!! Form::textarea('short_detail', null, ('required' == 'required') ? ['class' => 'form-control', 'id' => 'summary-ckeditor', 'required' => 'required'] : ['class' => 'form-control']) !!}
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
                {!! Form::label('detail', 'Detail') !!}
                {!! Form::textarea('detail', null, ('required' == 'required') ? ['class' => 'form-control', 'id' => 'summary-ckeditor1', 'required' => 'required'] : ['class' => 'form-control']) !!}
            </div>
        </div>
         <div class="col-md-12">
            <div class="form-group">
                {!! Form::label('blog_link', 'Blog Link') !!}
                {!! Form::text('blog_link', null, ('required' == 'required') ? ['class' => 'form-control', 'required' => 'required'] : ['class' => 'form-control']) !!}
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
                {!! Form::label('right_image', 'Right Image') !!}
                <input class="form-control dropify" name="right_image" type="file" id="right_image" {{($blog->right_image) ?  "data-default-file=".asset($blog->right_image) : ''}}>
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
                {!! Form::label('image', 'Image') !!}
               <input class="form-control dropify" name="image" type="file" id="image" {{($blog->image) ?  "data-default-file=".asset($blog->image) : 'required'}}>
            </div>
        </div>
    </div>
</div>

<div class="form-actions text-right pb-0">
    {!! Form::submit(isset($submitButtonText) ? $submitButtonText : 'Create', ['class' => 'btn btn-primary']) !!}
</div>
