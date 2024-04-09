<div class="form-body">
    <div class="row">
        <div class="col-md-12">
            <div class="form-group">
                <label for="">Image</label>
                <input class="form-control dropify" name="image" type="file" id="image" {{ ($gallery->image != '') ? "data-default-file = /$gallery->image" : ''}} {{ ($gallery->image == '') ? "required" : ''}} value="{{$gallery->image}}">
            </div>
        </div>
    </div>
</div>
<div class="form-actions text-right pb-0">
    {!! Form::submit(isset($submitButtonText) ? $submitButtonText : 'Create', ['class' => 'btn btn-primary']) !!}
</div>
