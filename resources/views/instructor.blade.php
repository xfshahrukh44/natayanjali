@extends('layouts.main')
@section('content')

<section class="banner">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                    <h1 class="Elephant-headings ml2">Instructors</h1>
            </div>
        </div>
    </div>
</section>

<!-- section-4 html end  -->
<section class="AssistanceDirector bg-gradient pt-0">
    <div class="container">
        <div class="row align-items-center">
            @foreach ($instructor as $item)
            <div class="col-lg-3 col-md-4 col-6 pb-4">
                <div class="AssInstructor" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <a href="#">
                        <figure class="instructor-figure">
                            <img src="{{ asset($item->image) }}" class="img-fluid" alt="">
                        </figure>
                        <h6 class="ml-2">{{ $item->name }}</h6>
                        <span class="ml-2">{{ $item->post }}</span>
                    </a>
                </div>
            </div>
            @endforeach


        </div>
    </div>
</section>
<!-- section-4 html end  -->
@endsection
@section('css')
<style>

    figure.instructor-figure {
   height: 230px;
}

figure.instructor-figure img {
    width: 100%;
    object-fit: cover;
    height: 230px;
}
</style>
@endsection

@section('js')
    <script type="text/javascript"></script>
@endsection
