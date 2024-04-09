@extends('layouts.main')
@section('content')
<section class="banner">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                 <h1 class="ml2">Bharata Natyam</h1> 
            </div>
        </div>
    </div>
    
</section>
  <section class="GallerySec bg-gradient pt-0">
        <div class="container">
            <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-4 col-4 pl-2 pr-2">
                        <a data-fancybox="gallery" href="{{ asset($page->image) }}">
                            <div class=" img-parent">
                                <img src="{{ asset($page->image) }}" alt="" class="img-fluid">
                            </div>
                        </a>
                        <div class="box-text">
                            {!! $page->content !!}
                            <a href="{{ route('origin-of-Bharata-natyam') }}" class="btn custom-btn">Read More</a>
                        </div>    
                    </div>
                    <div class="col-lg-4 col-md-4 col-4 pl-2 pr-2">
                        <a data-fancybox="gallery" href="{{ asset($section[0]->value) }}">
                            <div class=" img-parent">
                                <img src="{{ asset($section[0]->value) }}" alt="" class="img-fluid">
                            </div>
                        </a>
                        <div class="box-text">
                            {!! $section[2]->value !!}
                            <a href="{{ route('dance-came-to-be-practiced') }}" class="btn custom-btn">Read More</a>
                        </div> 
                    </div>
                    <div class="col-lg-4 col-md-4 col-4 pl-2 pr-2">
                        <a data-fancybox="gallery" href="{{ asset($section[1]->value) }}">
                            <div class=" img-parent">
                                <img src="{{ asset($section[1]->value) }}" alt="" class="img-fluid">
                            </div>
                        </a>
                        <div class="box-text">
                           {!! $section[3]->value !!}
                           <a href="{{ route('revival-of-bharata-natyam') }}" class="btn custom-btn">Read More</a>
                        </div> 
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 my-5">
                         
                    </div>

            </div>
        </div>
    </section>
@endsection
@section('css')
<style>
    h1 + p {
    margin-top: 1rem !important;
}

.img-parent {
    width: 100%;
    height: 300px;
}

.img-parent img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.para {
    color: #0d0d0d !important;
    
}
</style>
@endsection

@section('js')
    <script type="text/javascript"></script>
@endsection