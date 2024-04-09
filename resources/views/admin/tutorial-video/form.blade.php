<div class="form-body">
    <div class="row">
        <div class="col-md-12">
            <div class="form-group">
                <label for="">Select PlayList</label>
                <select name="play_list_id" id="play_list_id" class="form-control">
                    @foreach ($playlist as $item)
                        <option {{ $item->id == $tutorialvideo->id ? 'selected' : ''}} value="{{ $item->id }}">{{ $item->name }}</option>

                    @endforeach
                </select>
            </div>
        </div>
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
                {!! Form::label('description', 'Description') !!}
                {!! Form::textarea(
                    'description',
                    null,
                    'required' == 'required' ? ['class' => 'form-control', 'required' => 'required', 'id' => 'summary-ckeditor'] : ['class' => 'form-control'],
                ) !!}
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
                {!! Form::label('video', 'Video') !!}
            <input class="form-control dropify" name="video" type="file" id="video"
                    {{ $tutorialvideo->video != '' ? "data-default-file = /$tutorialvideo->video" : '' }}
                    {{ $tutorialvideo->video == '' ? 'required' : '' }} value="{{ $tutorialvideo->video }}">
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
                {!! Form::label('image', 'Image') !!}
                <input class="form-control dropify" name="image" type="file" id="image"
                    {{ $tutorialvideo->image != '' ? "data-default-file = /$tutorialvideo->image" : '' }}
                    {{ $tutorialvideo->image == '' ? 'required' : '' }} value="{{ $tutorialvideo->image }}">
            </div>
        </div>
    </div>
</div>
<div class="form-actions text-right pb-0">
    {!! Form::submit(isset($submitButtonText) ? $submitButtonText : 'Create', ['class' => 'btn btn-primary']) !!}
</div>
