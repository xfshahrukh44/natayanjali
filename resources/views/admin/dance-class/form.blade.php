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
                {!! Form::label('description', 'Description') !!}
                {!! Form::textarea(
                    'description',
                    null,
                    'required' == 'required'
                        ? ['class' => 'form-control', 'id' => 'summary-ckeditor', 'required' => 'required']
                        : ['class' => 'form-control'],
                ) !!}
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
                <label for="start">Starting Date</label>
                <input type="datetime-local" id="start" class="form-control" placeholder="March 7-5, 2023" name="start" value="{{ $danceclass->start }}" required>
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
                <label for="start">Ending Date</label>
                <input type="datetime-local" id="end" class="form-control" placeholder="March 7-5, 2023" name="end" value="{{ $danceclass->end }}" required>
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
                <label for="start">Duration Month</label>
                <input type="text" id="duration" class="form-control" placeholder="Duration Month" name="duration" value="{{ $danceclass->duration }}" required>
            </div>
        </div>
        
        <div class="col-md-12">
           <div class="row">
            
            <div class="form-group">
            <label class="col-md-2 checkbox-inline" for="checkboxes-0">
              <input type="checkbox" name="day[]" id="checkboxes-0" value="sun" {{ (in_array('sun', json_decode($danceclass->day)) ? 'checked' : '') }}>
              Sunday
            </label>
            <label class="col-md-2 checkbox-inline" for="checkboxes-1">
              <input type="checkbox" name="day[]" id="checkboxes-1" value="mon" {{ (in_array('mon', json_decode($danceclass->day)) ? 'checked' : '') }}>
              Monday
            </label>
            <label class="col-md-2 checkbox-inline" for="checkboxes-2">
              <input type="checkbox" name="day[]" id="checkboxes-2" value="tue" {{ (in_array('tue', json_decode($danceclass->day)) ? 'checked' : '') }}>
              Tuesday
            </label>
            <label class="col-md-2 checkbox-inline" for="checkboxes-3">
              <input type="checkbox" name="day[]" id="checkboxes-3" value="wed" {{ (in_array('wed', json_decode($danceclass->day)) ? 'checked' : '') }}>
              Wednesday
            </label>
            <label class="col-md-2 checkbox-inline" for="checkboxes-4">
              <input type="checkbox" name="day[]" id="checkboxes-4" value="thu" {{ (in_array('thu', json_decode($danceclass->day)) ? 'checked' : '') }}>
              Thusrday
            </label>
            <label class="col-md-2 checkbox-inline" for="checkboxes-5">
              <input type="checkbox" name="day[]" id="checkboxes-5" value="fri" {{ (in_array('fri', json_decode($danceclass->day)) ? 'checked' : '') }}>
              Friday
            </label>
            <label class="col-md-2 checkbox-inline" for="checkboxes-6">
              <input type="checkbox" name="day[]" id="checkboxes-6" value="sat" {{ (in_array('sat', json_decode($danceclass->day)) ? 'checked' : '') }}>
              Saturday
            </label>
            </div>
            </div>
        </div>
        
        
        
        <div class="col-md-12">
            <div class="form-group">
                <label for="number">Ticket Price</label>
                <input type="number" class="form-control" id="price" name="ticket" value="{{ $danceclass->ticket }}" step="0.01" required>
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
                {!! Form::label('experience', 'Experience') !!}
                {!! Form::textarea(
                    'experience',
                    null,
                    'required' == 'required'
                        ? ['class' => 'form-control', 'id' => 'summary-ckeditor1', 'required' => 'required']
                        : ['class' => 'form-control'],
                ) !!}
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
               <label for="image">Image</label>
               <input type="file" name="image" class="dropify" data-default-file="{{ asset($danceclass->image) }}">
            </div>
        </div>
    </div>
</div>
<div class="form-actions text-right pb-0">
    {!! Form::submit(isset($submitButtonText) ? $submitButtonText : 'Create', ['class' => 'btn btn-primary']) !!}
</div>
