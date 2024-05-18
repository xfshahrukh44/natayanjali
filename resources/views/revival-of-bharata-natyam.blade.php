@extends('layouts.main')
@section('content')
<section class="banner">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                 <h1 class="ml2">{{ $page->name }}</h1> 
            </div>
        </div>
    </div>
    
</section>
  <section class="GallerySec bg-gradient pt-0">
        <div class="container">
            <div class="row justify-content-center">
                    
                    <div class="col-lg-12 col-md-12 col-sm-12 my-2">
                         <div class=" img-parent">
                            <img src="{{ asset($page->image) }}" alt="" class="img-fluid">
                        </div>
                        <div class="box-text">
                            {!! $page->content !!}
                            
                            <p><a class="btn custom-btn" href="{{ route('about') }}">Read More</a> <quillbot-extension-portal></quillbot-extension-portal><quillbot-extension-portal></quillbot-extension-portal><quillbot-extension-portal></quillbot-extension-portal></p>
                            
                        </div>
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
</style>
@endsection

@section('js')
    <script type="text/javascript"></script>
@endsection