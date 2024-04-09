@extends('layouts.main')
@section('content')
    <!-- section-4 html end  -->
    {!! $page->content !!}
    <section class="Director-Sec pt-0 bg-gradient" id="director">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5">
                    <div class="SchoolOfDanceImg" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500"
                        data-aos-duration="1000">
                        <figure>
                            <img src="{{ $page->image }}" class="img-fluid" alt="">
                        </figure>
                    </div>
                </div>
                {!! $section[0]->value !!}
            </div>
        </div>
    </section>
    <section class="banner" id="press_reviews">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    {!! $section[1]->value !!}
                </div>
            </div>
        </div>
    </section>

    <!--TestimonialSec Start -->
    <section class="TestimonialSec py">
        <div class="wrapper">
            <div class="row">
                @foreach ($testnomials as $key => $item)
                    <div class="col-md-6" data-aos="fade-{{ $key % 2 == 0 ? 'down' : 'up' }}">
                        <div class="MainTestibox Blue">
                            <div class="start">
                                @for ($i = 0; $i < $item->stars; $i++)
                                    <a href="#"><i class="fas fa-star"></i></a>
                                @endfor

                            </div>
                            {!! $item->comments !!}
                            <div class="TestiInfo">
                                <figure>
                                    <img src="{{ asset($item->image) }}" alt="">
                                </figure>
                                <div class="testicontent">
                                    <h6>-{{ $item->name }}</h6>

                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach


            </div>
        </div>
    </section>
    <section class="banner" id="performance_history">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="Elephant-headings ml2">{{ $section[2]->value }}</h1>
                </div>
            </div>
        </div>
    </section>
    <!--TestimonialSec End -->
    <!-- section-4 html end  -->

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
    <!--<section class="banner">-->
    <!--    <div class="container">-->
    <!--        <div class="row">-->
    <!--            <div class="col-lg-12">-->
    <!--                <h1 class="Elephant-headings ml2">{{ $section[3]->value }}</h1>-->

    <!--            </div>-->
    <!--        </div>-->
    <!--    </div>-->
    <!--</section>-->
    <!--<section class="GallerySec bg-gradient pt-0" id="pictures">-->
    <!--    <div class="container">-->
    <!--    <div class="row justify-content-center">-->
    <!--            @foreach ($gallery as $item)-->
    <!--            <div class="col-lg-12 col-md-12 col-6 p-0">-->
    <!--                <a data-fancybox="gallery" href="{{ asset($item->image) }}">-->
    <!--                    <div class="Frame text-center">-->
    <!--                        <figure style="height: 1000px;width: 1100px;border: 2px solid #000;border-radius: 25px;box-shadow: #b7b4b4 12px 14px 3px -4px;">-->
    <!--                            <img style="height:100%; width:100%;" src="{{ asset($item->image) }}" class="img-fluid" alt="">-->
    <!--                        </figure>-->
    <!--                    </div>-->
    <!--                </a>-->
    <!--            </div>-->
    <!--            @endforeach-->

    <!--        </div>-->
    <!--    </div>-->
    <!--</section>-->
@endsection
@section('css')
    <style>
        section.TestimonialSec.py .wrapper {
            width: 50%;
            margin: 0 auto;
        }
    </style>
@endsection

@section('js')
    <script type="text/javascript"></script>
@endsection
