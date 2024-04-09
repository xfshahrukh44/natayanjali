<div class="form-body">
    <div class="row">
        <div class="col-md-12">
            <div class="form-group">
                {!! Form::label('name', 'Name') !!}
                {!! Form::text(
                    'name',
                    null,
                    '' == 'required' ? ['class' => 'form-control', 'required' => 'required'] : ['class' => 'form-control'],
                ) !!}
            </div>
            <div class="form-group">
                <label for="section-link">Section Link</label>
                <input type="text" class="form-control" name="section_link" value="{{ $whatwedo->section_link }}">
            </div>
            <div class="col-md-12">
            <div class="form-group">
                {!! Form::label('image', 'Image') !!}
                <input class="form-control dropify" name="image" type="file" id="image"
                    {{ $whatwedo->image != '' ? "data-default-file = /$whatwedo->image" : '' }}
                    {{ $whatwedo->image == '' ? 'required' : '' }} value="{{ $whatwedo->image }}">
            </div>
        </div>
        </div>
    </div>
</div>
<div class="form-actions text-right pb-0">
    {!! Form::submit(isset($submitButtonText) ? $submitButtonText : 'Create', ['class' => 'btn btn-primary']) !!}
</div>
