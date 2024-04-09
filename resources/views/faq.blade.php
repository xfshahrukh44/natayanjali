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

<!-- section-6 html start  -->
<section class="FaqSec bg-gradient">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-12 col-md-12 col-12">
                <div class="faqSec ">
                    <div class="sectionheading aos-init aos-animate" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                        <h1 class="Elephant-headings">{{ $section[0]->value }}</h1>
                    </div>
                    <div class="faq aos-init aos-animate" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">

                        <div id="accordion" class="accordionStyle aos-init aos-animate" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                            @foreach ($faqs as $key => $item)
                            <div class="card">
                                <div class="card-header" id="heading{{ $key }}">
                                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse{{ $key }}" aria-expanded="false" aria-controls="collapse{{ $key }}">
                                        <p> {{ $item->question }}</p><i class="fas fa-plus" aria-hidden="true"></i>
                                    </button>
                                </div>
                                <div id="collapse{{ $key }} " class="collapse" aria-labelledby="heading{{ $key }}" data-parent="#accordion">
                                    <div class="card-body">
                                        {!! $item->answer !!}
                                    </div>
                                </div>
                            </div>
                            @endforeach

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
@endsection
@section('css')
@endsection

@section('js')
    <script type="text/javascript"></script>
@endsection
