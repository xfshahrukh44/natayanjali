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

    <!-- section-4 html end  -->
    <section class="location-Sec bg-gradient pt-0">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="WestCovina">
                        <div class="Location">
                            <span>
                                <figure>
                                    <img src="{{ asset('images/location.png') }}" class="img-fluid" alt="">
                                </figure>
                            </span>
                            <span>
                                <p class="para">City of West Covina</p>
                            </span>
                        </div>

                        {!! App\Http\Traits\HelperTrait::returnFlag(1974) !!}

                    </div>
                </div>
                <div class="col-lg-6">
                    <figure>
                        <img src="{{ asset($page->image) }}" class="img-fluid" alt="">
                    </figure>
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
