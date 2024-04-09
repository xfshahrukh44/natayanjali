@extends('layouts.app')

@push('before-css')
    <link rel="stylesheet" href="{{ asset('assets/css/datatables.min.css') }}">
@endpush

@section('content')
    <div class="content-header row">
        <div class="content-header-left col-md-8 col-12 mb-2 breadcrumb-new">
            <h3 class="content-header-title mb-0 d-inline-block">Ticket</h3>
            <div class="row breadcrumbs-top d-inline-block">
                <div class="breadcrumb-wrapper col-12">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active">Home</li>
                        <li class="breadcrumb-item active">Ticket</li>
                    </ol>
                </div>
            </div>
        </div>
        <div class="content-header-right col-md-4 col-12">
            <div class="btn-group float-md-right">
                <a class="btn btn-info mb-1" href="{{ url('/admin/ticket/create') }}">Add Ticket</a>
            </div>
        </div>
    </div>

    <section id="configuration">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Ticket Info</h4>
                        <a class="heading-elements-toggle"><i class="la la-ellipsis-v font-medium-3"></i></a>
                        <div class="heading-elements">
                            <ul class="list-inline mb-0">
                                <li><a data-action="collapse"><i class="ft-minus"></i></a></li>
                                <li><a data-action="reload"><i class="ft-rotate-cw"></i></a></li>
                                <li><a data-action="expand"><i class="ft-maximize"></i></a></li>
                                <li><a data-action="close"><i class="ft-x"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-content collapse show">
                        <div class="card-body card-dashboard">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered zero-configuration">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Time</th>
                                            <th>Dance Class</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($ticket as $item)
                                            <tr>
                                                <td>{{ $item->id }}</td>
                                                <td>{{ date("d, F Y h:i a", strtotime($item->time)) }}</td>
                                                <td>{{ $item->class->name }}</td>
                                                <td>


                                                    <a href="{{ url('/admin/ticket/' . $item->id . '/edit') }}"
                                                        title="Edit Ticket">
                                                        <button class="btn btn-primary btn-sm">
                                                            <i class="fa fa-pencil-square-o" aria-hidden="true"> </i> Edit
                                                        </button>
                                                    </a>



                                                    {!! Form::open([
                                                        'method' => 'DELETE',
                                                        'url' => ['/admin/ticket', $item->id],
                                                        'style' => 'display:inline',
                                                    ]) !!}
                                                    {!! Form::button('<i class="fa fa-trash-o" aria-hidden="true"></i> Delete', [
                                                        'type' => 'submit',
                                                        'class' => 'btn btn-danger btn-sm',
                                                        'title' => 'Delete Ticket',
                                                        'onclick' => 'return confirm("Confirm delete?")',
                                                    ]) !!}

                                                    {!! Form::close() !!}
                                                </td>
                                            </tr>
                                        @endforeach
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>#</th>
                                            <th>Time</th>
                                            <th>Dance Class</th>
                                            <th>Actions</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection



@push('js')
    <script src="{{ asset('assets/js/datatables.min.js') }}"></script>
    <script>
        $(document).ready(function() {
            $(".zero-configuration").DataTable({
                "order": [
                    [0, 'desc']
                ],
            });
        });
    </script>
    <script>
        $(document).ready(function() {
            @if (\Session::has('message'))
                $.toast({
                    heading: 'Success!',
                    position: 'top-center',
                    text: '{{ session()->get('message') }}',
                    loaderBg: '#ff6849',
                    icon: 'success',
                    hideAfter: 3000,
                    stack: 6
                });
            @endif
        })
    </script>
@endpush
