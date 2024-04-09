@extends('layouts.app')

@section('content')
    <div class="container-fluid bg-white mt-5">
        <!-- .row -->
        <div class="row">
            <div class="col-sm-12">
                <div class="white-box card">
                <div class="card-body">
                    <h3 class="box-title pull-left">DanceClass {{ $danceclass->id }}</h3>
                    
                        <a class="btn btn-success pull-right" href="{{ url('/dance-class/dance-class') }}">
                            <i class="icon-arrow-left-circle" aria-hidden="true"></i> Back</a>
                    
                    <div class="clearfix"></div>
                    <hr>
                    <div class="table-responsive">
                        <table class="table table">
                            <tbody>
                            <tr>
                                <th>ID</th>
                                <td>{{ $danceclass->id }}</td>
                            </tr>
                            <tr><th> Name </th><td> {{ $danceclass->name }} </td></tr><tr><th> Description </th><td> {{ $danceclass->description }} </td></tr><tr><th> Experience </th><td> {{ $danceclass->experience }} </td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @include('layouts.admin.footer')
</div>
@endsection

