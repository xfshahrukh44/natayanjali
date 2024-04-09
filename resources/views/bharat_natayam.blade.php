@extends('layouts.main')
@section('content')
<section class="banner">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <!-- <h1 class="ml2">Sunny mornings</h1> -->
               {!! $page->content !!}
            </div>
        </div>
    </div>
</section>

<!-- section-4 html end  -->
<section class="section-4">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="LeftAboutUs" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <figure>
                        <img src="{{asset($page->image)}}" class="img-fluid" alt="">
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

<!-- section-4 html end  -->
<section class="testimonials">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="TopTextMain">
                    <h1 class="Elephant-headings">People Talk...</h1>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="SliderOne owl-theme owl-carousel">
                    @foreach ($testnomials as $key => $item)
                        @if ($key % 2 == 0)
                            <div class="item">
                                <div class="FirstSlideMain">
                                    <div class="SecondSliderContent"> <img src="{{ asset('images/commas.png') }}" class="img-fluid"
                                            alt="">
                                        <p class="para"> {!! $item->comments !!} </p>
                                    </div>
                                    <div class="secondSliderImages">
                                        <figure> <img src="{{ asset($item->image) }}" class="img-fluid" alt="">
                                        </figure>
                                        <div class="sliderLastUser">
                                            <h6>
                                                {{ $item->name }}
                                            </h6>
                                            <p class="para"> {{ $item->verified }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @else
                            <div class="item">
                                <div class="FirstSlideMain SecondSlider2Nd">
                                    <div class="SecondSliderContent SilderSecondPAra"> <img src="{{ asset('images/commas.png') }}"
                                            class="img-fluid" alt="">
                                        <p class="para">{!! $item->comments !!} </p>
                                    </div>
                                    <div class="secondSliderImages">
                                        <figure> <img src="{{ asset($item->image) }}" class="img-fluid" alt="">
                                        </figure>
                                        <div class="sliderLastUser">
                                            <h6>
                                                {{ $item->name }}
                                            </h6>
                                            <p class="para"> {{ $item->verified }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endif
                    @endforeach



                </div>
            </div>
        </div>
</section>
@endsection
@section('css')
<style>
    .img-parent {
        padding: 1rem;
    }
  
</style>
@endsection

@section('js')
    <script type="text/javascript"></script>
@endsection
