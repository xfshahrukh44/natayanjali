@extends('layouts.main')
@section('content')
    {!! $page->content !!}
    <section class="Video-Sec bg-gradient pt-0">
        <div class="container">
            <div class="row align-items-center">
                @foreach ($videos as $item)
                    <div class="col-lg-6 pb-4">
                        {!! $item->video !!}
                    </div>
                @endforeach

            </div>
        </div>
    </section>
@endsection
@section('css')
@endsection

@section('js')
    <script type="text/javascript"></script>
@endsection
