@extends('layouts.main')
@section('content')
<section class="banner">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="Elephant-headings ml2">{{ $page->name }}</h1>
                <!-- <p class="para mt-3">Dr. Malini Krishnamurthi is the Artistic Director of the Natyanjali School of Dance in
                    <span class="d-block"> West Covina,  California.</span>
                </p> -->
            </div>
        </div>
    </div>
</section>

<!-- section-4 html end  -->
<section class="Video-Sec bg-gradient pt-0">
    <div class="container">
        <div class="row align-items-center">
            @foreach ($videos as $key => $item)
                <div class="col-lg-{{ $key % 4 == 0 ? '12' : '4' }} pb-4">
                    {!! $item->video !!}
                </div>
            @endforeach


        </div>
    </div>
</section>
<!-- section-4 html end  -->
@endsection
@section('css')
@endsection

@section('js')
    <script type="text/javascript"></script>
@endsection
