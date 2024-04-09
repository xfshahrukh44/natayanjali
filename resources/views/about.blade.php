@extends('layouts.main')
@section('content')
    <section class="section-4 py" style="background-image: url({{ asset('images/section-9.png') }})" id="bharata_natyam">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="LeftAboutUs" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <figure>
                            <img src="{{ asset($section[11]->value) }}" class="img-fluid" alt="">
                        </figure>
                    </div>
                </div>
                <div class="col-lg-6">
                    {!! $page->content !!}
                </div>
            </div>
        </div>
    </section>
    <!-- section-4 html end  -->
{{--<section class="section-5 py" style="background-image: url({{ asset('images/section-5-Bg.jpg') }})">

    <div class="container">
        <div class="row">
            <div class="col-lg-7">
                {!!$page->content!!}
            </div>
        </div>
    </div>
</section>--}}
{{-- <section class="banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <!-- <h1 class="ml2">Sunny mornings</h1> -->
                    <div class="MainSec-5-content aos-init aos-animate" data-aos="flip-left" data-aos-duration="2000" data-aos-easing="ease-out-cubic">
                        {!! $page->content !!}
                    </div>

                </div>
                <div class="col-lg-6">
                    <div class="LeftAboutUs" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <figure>
                            <img src="{{ asset($section[7]->value) }}" class="img-fluid" alt="">
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section> --}}

    <!-- section-4 html end  -->
    <section class="section-4" id="natyanjali_shcool_of_dance">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="LeftAboutUs" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <figure>
                            <img src="{{ asset($page->image) }}" class="img-fluid" alt="">
                        </figure>
                    </div>
                </div>
                <div class="col-lg-6">
                    {!! $section[0]->value !!}
                </div>
            </div>
        </div>
    </section>
    <!-- section-4 html end  -->
    <section class="banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">

                    {!! $section[1]->value !!}
                </div>
                <div class="col-lg-4">
                    <img src="{{ asset($section[8]->value) }}" class="img-fluid" alt="">
                </div>
                <div class="col-lg-4">
                    <img src="{{ asset($section[9]->value) }}" class="img-fluid" alt="">
                </div>
                <div class="col-lg-4">
                    <img src="{{ asset($section[10]->value) }}" class="img-fluid" alt="">
                </div>
            </div>
        </div>
    </section>
    <!-- section-4 html end  -->
    <section class="SchoolOfDance-Sec bg-gradient">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5 col-md-12 col-12">
                    <div class="SchoolOfDanceImg">
                        <figure>
                            <img src="{{ asset($section[2]->value) }}" class="img-fluid" alt="">
                        </figure>
                    </div>
                </div>
                <div class="col-lg-7 col-md-12 col-12">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="rightimgDancing">
                                <figure>
                                    <img src="{{ asset($section[4]->value) }}" class="img-fluid" alt="">
                                </figure>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="rightimgDancing">
                                <figure>
                                    <img src="{{ asset($section[5]->value) }}" class="img-fluid" alt="">
                                </figure>
                            </div>
                        </div>
                        {{--<div class="col-lg-12">
                            {!! $section[3]->value !!}
                        </div>--}}
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="banner" id="testimonial">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    {!! $section[6]->value !!}
                </div>
            </div>
        </div>
    </section>



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
@endsection
@section('css')
    <style>
        form#newForm {
            width: 100%;
        }
        .LeftAboutUs figure img {width: 100%;object-fit: cover;height: 600px;}

        form#newForm button {
            position: absolute;
            top: 1.5rem;
            right: 1rem;
            cursor: pointer;
            background: transparent;
            /* border: none; */
            height: 22px;
            border: none;
            width: 32px;
            text-align: center;
        }
        section.TestimonialSec.py .wrapper {
    width: 50%;
    margin: 0 auto;
}
    </style>
@endsection

@section('js')
    <script type="text/javascript"></script>
@endsection
