<div class="form-body">
    <div class="row">
        <div class="col-md-12">
            <div class="form-group">
                <label for="">Dance Class</label>
                <select class="form-control" name="ticket_id">
                    @foreach ($classes as $item)
                        <option value="{{ $item->id }}" {{ $ticket->ticket_id == $item->id ? 'selected' : '' }}>
                            {{ $item->name }}</option>
                    @endforeach
                </select>
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
                {!! Form::label('time', 'Time') !!}
                {!! Form::input(
                    'datetime-local',
                    'time',
                    null,
                    'required' == 'required' ? ['class' => 'form-control', 'required' => 'required'] : ['class' => 'form-control'],
                ) !!}
            </div>
        </div>

    </div>
</div>
<div class="form-actions text-right pb-0">
    {!! Form::submit(isset($submitButtonText) ? $submitButtonText : 'Create', ['class' => 'btn btn-primary']) !!}
</div>
