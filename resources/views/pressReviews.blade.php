@extends('layouts.main')
@section('content')
<section class="banner">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                {!! $page->content !!}
            </div>
        </div>
    </div>
</section>

<!--TestimonialSec Start -->
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
<!--TestimonialSec End -->
@endsection
@section('css')
@endsection

@section('js')
    <script type="text/javascript"></script>
@endsection
