@extends('layouts.main')
@section('content')

<section class="banner">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
               {!! $page->content !!}
                </p>
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
                        <img src="{{ asset($page->image) }}" class="img-fluid" alt="">
                    </figure>
                </div>
            </div>
            <div class="col-lg-7 col-md-12 col-12">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-12">
                        <div class="rightimgDancing">
                            <figure>
                                <img src="{{ asset($section[0]->value) }}" class="img-fluid" alt="">
                            </figure>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12">
                        <div class="rightimgDancing">
                            <figure>
                                <img src="{{ asset($section[1]->value) }}" class="img-fluid" alt="">
                            </figure>
                        </div>
                    </div>
                    <div class="col-lg-12">
                       {!! $section[2]->value !!}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="TestimonialSec py">
    <div class="wrapper">
        <div class="row">
            @foreach ($testnomials as $key => $item)
                <div class="col-md-3" data-aos="fade-{{ $key % 2 == 0 ? 'down':'up' }}">
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
        
        .faqSec h1, .faqSec p {
            color: #fff !important;
        }
    </style>
@endsection

@section('js')
    <script type="text/javascript"></script>
@endsection
