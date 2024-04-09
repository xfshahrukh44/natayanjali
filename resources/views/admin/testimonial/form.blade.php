<div class="form-body">
    <div class="row">
        <div class="col-md-12">
            <div class="form-group">
                {!! Form::label('type', 'Testimonial Type') !!}
                <select class="form-control" name="type">
                    <option value="1" <?php if($testimonial->type == 1){echo 'selected';}?>>People Talk</option>
                    <option value="2" <?php if($testimonial->type == 2){echo 'selected';}?>>Testimonial</option>
                    <option value="3" <?php if($testimonial->type == 3){echo 'selected';}?>>Press Review</option>
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
                {!! Form::label('designation', 'Designation') !!}
                {!! Form::text('designation', null, ('required' == 'required') ? ['class' => 'form-control', 'required' => 'required'] : ['class' => 'form-control']) !!}
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
                {!! Form::label('comments', 'Comments') !!}
                {!! Form::textarea('comments', null, ('required' == 'required') ? ['class' => 'form-control', 'id' => 'summary-ckeditor', 'required' => 'required'] : ['class' => 'form-control']) !!}
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
                {!! Form::label('image', 'Image') !!}
                <input class="form-control dropify" name="image" type="file" id="image" data-default-file="{{asset($testimonial->image)}}" {{ ($testimonial->image != '') ? "data-default-file = /$testimonial->image" : ''}} {{ ($testimonial->image == '') ? "required" : ''}} value="{{$testimonial->image}}">
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
                {!! Form::label('stars', 'Stars') !!}
                {!! Form::number('stars', null, ('' == 'required') ? ['class' => 'form-control', 'required' => 'required'] : ['class' => 'form-control']) !!}
            </div>
        </div>
    </div>
</div>

<div class="form-actions text-right pb-0">
    {!! Form::submit(isset($submitButtonText) ? $submitButtonText : 'Create', ['class' => 'btn btn-primary']) !!}
</div>
