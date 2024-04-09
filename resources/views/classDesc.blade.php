@extends('layouts.main')
@section('content')
    <section class="banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="Elephant-headings ml2">{{ $class->name }}</h1>
                    {!! $class->description !!}
                     <a href="{{ route('home').'#subscribe-newsletter' }}" class="btn custom-btn">Enroll Now</a>
                </div>
            </div>
        </div>
    </section>


    <section class="content component usn_cmp_splitcomponent c6-bg c6-bg-solid  ">
        <div class="container">
            <div class="component-main row justify-content-between align-items-center">
                {!! $class->experience !!}
            </div>
        </div>
    </section>

    <!--TestimonialSec Start -->
    <section class="TestimonialSec py discription">
        <div class="container">
            <div class="row">
                @foreach ($testnomials as $item)
                <div class="col-md-4" data-aos="fade-down">
                    <div class="MainTestibox Blue">
                        <h1>{{ $item->name }}</h1>
                        <p>
                            {!! $item->comments !!}
                        </p>
                        <div class="TestiInfo">

                            <div class="testicontent">


                            </div>
                        </div>
                    </div>
                </div>
                @endforeach


            </div>
        </div>
    </section>
    <!--TestimonialSec End -->
@endsection
@section('css')
<style>
    section.content.component.usn_cmp_splitcomponent.c6-bg.c6-bg-solid a {
    color: white;
}
</style>
@endsection

@section('js')
    <script type="text/javascript"></script>
@endsection
