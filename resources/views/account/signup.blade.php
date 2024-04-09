@extends('layouts.main')
@section('content')
    <section class="banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                   <h1 class="Elephant-headings ml2">Checkout Our Youtube Channel</h1>
                   <a href="{{ App\Http\Traits\HelperTrait::returnFlag(1964) }}" class="btn custom-btn mt-4" target="_blank">Subscribe</a>
                    
                </div>
            </div>
        </div>
    </section>

    <!-- section-4 html end  -->
    <section class="classesSec bg-gradient pt-0">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-8 col-md-9 col-12">
                    <div class="rigistration CardPrograms" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <h6 class="Elephant-headings">Free Consultation </h6>
                        <p class="para pt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <div class="FoamDiv">
                            <form class="contactform" >
                                @csrf
                                <input type="hidden" name="form_name" value="Registration Form">
                                <div class="form-row">
                                    <div class="col">
                                        <input type="text" name="fname" class="form-control" required
                                            placeholder="First Name">
                                    </div>
                                    <div class="col">
                                        <input type="text" id="lname" name="lname" class="form-control" required
                                            placeholder="Last Name">
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col">
                                        <input type="date" name="frm_date" class="form-control"
                                            placeholder="Date Of Birth">
                                    </div>
                                    <div class="col">
                                        <input type="text" name="parents" class="form-control"
                                            placeholder="Name of the Parents">
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col">
                                        <input type="text" name="address" class="form-control" placeholder="Address">
                                    </div>
                                     <div class="col">
                                        <select class="form-control" name="classes" id="classes">
                                            @php
                                            $class = App\Models\DanceClass::all();
                                            @endphp
                                            @foreach($class as $classes)
                                            <option value="{{ $classes->name }}">{{ $classes->name }}</option>
                                            @endforeach
                                        </select>    
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col">
                                        <input type="text" name="phone" class="form-control"
                                            placeholder="Phone Number">
                                    </div>
                                    <div class="col">
                                        <input type="text" name="email" class="form-control" placeholder="Your email">
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col">
                                        <button href="#" class="btn custom-btn">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-3 col-12">
                    <div class="LeftAboutUs" data-aos="flip-left" data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <figure>
                            <img src="{{ asset('uploads/pages/classes_168313261146_1683658320.png') }}" class="img-fluid" alt="">
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@section('css')
    <style type="text/css">
        .bg-gradient {
            /* padding: 0!important; */
        }
        
        .FoamDiv select {
            padding: 18px 1rem;
            border-radius: 10px;
            margin-bottom: 1rem;
            border-color: #828282;
                height: 60px !important;
        }
    </style>
@endsection
@section('js')
    <script type="text/javascript">
        $(document).on('click', ".btn1", function(e) {
            $('.loginForm').submit();
        });
    </script>
@endsection
