<div class="form-body">
    <div class="row">
        <div class="col-md-12">
            <div class="form-group">
                {!! Form::label('name', 'Name') !!}
                {!! Form::text(
                    'name',
                    null,
                    'required' == 'required' ? ['class' => 'form-control', 'required' => 'required'] : ['class' => 'form-control'],
                ) !!}
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
                {!! Form::label('post', 'Post') !!}
                {!! Form::text(
                    'post',
                    null,
                    'required' == 'required' ? ['class' => 'form-control', 'required' => 'required'] : ['class' => 'form-control'],
                ) !!}
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
                {!! Form::label('description', 'Description') !!}
                {!! Form::textarea(
                    'description',
                    null,['class' => 'form-control', 'id' => 'summary-ckeditor1', 'required' => 'required']
                ) !!}
            </div>
        </div>

        <div class="col-md-12">
            <div class="form-group">
                <label for="">Image</label>
                <input class="form-control dropify" name="image" type="file" id="image" {{ ($instructor->image != '') ? "data-default-file = /$instructor->image" : ''}} {{ ($instructor->image == '') ? "required" : ''}} value="{{$instructor->image}}">
            </div>
        </div>
    </div>
</div>
<div class="form-actions text-right pb-0">
    {!! Form::submit(isset($submitButtonText) ? $submitButtonText : 'Create', ['class' => 'btn btn-primary']) !!}
</div>
