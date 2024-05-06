@extends('layouts.main')
@section('content')
    <!-- section-1 html end  -->
    <section class="section-1"  style="background-image: url({{ asset('images/banner-back.png') }})">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-12">
                    <div class="filtering">
                        @foreach ($banners as $banner)
                            <div class="MainInnerDiv">
                                <div class="row align-items-center justify-content-center">
                                    <div class="col-lg-7 col-md-7 col-8">
                                        {!! $banner->description !!}
                                    </div>
                                    <div class="col-lg-5 col-md-5 col-4">
                                        <div class="rightDanner-side">
                                            <figure>
                                                <img src="{{ asset($banner->image) }}" class="img-fluid" alt="">
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endforeach


                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- section-1 html end  -->

    <!-- section-3 html start  -->
    <section class="section-3" style="background-image: url({{ asset('images/section-8.png') }})">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2 class="Elephant-headings text-center pb-5">CLASSES OFFERED</h2>
                </div>
                @foreach ($danceclass as $key => $item)
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="MainClasses class-{{ $key++ }}" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <figure class="">
                                <img src="{{ asset($item->image) }}" class="img-fluid" alt="">
                            </figure>
                            <h5 class="Elephant-headings pt-4 pb-3">{{$item->name}}</h5>
                           <!--{!! \Illuminate\Support\Str::limit($item->description, 150, $end='...') !!}-->
                            <!--<a href="{{ route('schoolOfDance').'#'.preg_replace('/-+/', '-', preg_replace('/[^A-Za-z0-9\-]/', '', str_replace(' ', '-', $item->name))) }}" class="btn custom-btn">READ MORE</a>-->
                            <a href="{{ route('schoolOfDance') }}" class="btn custom-btn">READ MORE</a>
                        </div>
                    </div>
                @endforeach

            </div>
        </div>
    </section>
    <!-- section-3 html end  -->

    <!-- section-4 html end  -->
    <section class="section-4 py" style="background-image: url({{ asset('images/section-9.png') }})">
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
                    {!! $page->content !!}
                </div>
            </div>
        </div>
    </section>
    <!-- section-4 html end  -->

    <!-- section-5 html start  -->
    <section class="section-5 py" style="background-image: url({{ asset($section[8]->value) }})">

        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    {!! $section[0]->value !!}
                </div>
                <div class="col-lg-5">
                    <img class="text-right" src="{{ asset($section[9]->value) }}" class="img-fluid" alt="">
                </div>

            </div>
        </div>
    </section>
    <!-- section-5 html end  -->
       <!-- section-6 html start  -->
    <section class="FaqSec" style="background:url({{ asset('images/bg-3.png') }})">
        <div class="rightDanner">
            <figure>
                <!--<img src="{{ asset('images/bg-3.png') }}" class="img-fluid" alt="">-->
            </figure>
        </div>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12 col-12">
                    <div class="faqSec ">
                        <div class="sectionheading aos-init aos-animate" data-aos="fade-down" data-aos-easing="linear"
                            data-aos-duration="1500">
                            <h1>{{ $section[3]->value }}</h1>
                            <p class="para mt-3">The most popular questions to discuss in Bharata Natyam</p>
                        </div>
                        <div class="faq aos-init aos-animate" data-aos="fade-left" data-aos-anchor="#example-anchor"
                            data-aos-offset="500" data-aos-duration="500">

                            <div id="accordion" class="accordionStyle aos-init aos-animate" data-aos="fade-down"
                                data-aos-easing="linear" data-aos-duration="1500">
                                @foreach ($faqs as $key => $item)
                                    <div class="card">
                                        <div class="card-header" id="heading{{ $key }}">
                                            <button class="btn btn-link collapsed" data-toggle="collapse"
                                                data-target="#collapse{{ $key }}" aria-expanded="false"
                                                aria-controls="collapse{{ $key }}">
                                                <p>{{ $item->question }}</p><i class="fas fa-plus"
                                                    aria-hidden="true"></i>
                                            </button>
                                        </div>
                                        <div id="collapse{{ $key }}" class="collapse"
                                            aria-labelledby="heading{{ $key }}" data-parent="#accordion">
                                            <div class="card-body">
                                                <p>
                                                </p>
                                                {!! $item->answer !!}
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                @endforeach



                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-12">
                    <div class="faqimageMainImg aos-init aos-animate" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <figure>
                            <img src="{{ asset($section[4]->value) }}" class="img-fluid" alt="">
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- section-6 html end  -->


    <!-- section-4 html end  -->
    <section class="location-Sec bg-gradient py section-3 " style="background-image: url({{ asset('images/section-10.png') }})"> 
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <div class="WestCovina">
                        <div class="Location">
                            
                            <h2 class="Elephant-headings text-center pb-5" style="margin: 0 auto !important;">WHAT WE DO</h2>

                        </div>
                        <div class="row">
                                
                                {{--@foreach ($danceclass as $key => $item)
                                    <div class="col-lg-4 col-md-6 col-12">
                                        <div class="MainClasses class-{{ $key++ }}" data-aos="flip-left"
                                            data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                            <figure class="">
                                                <img src="{{ asset($item->image) }}" class="img-fluid" alt="">
                                            </figure>
                                            <h5 class="Elephant-headings pt-4">{{$item->name}}</h5>
                                           {!! \Illuminate\Support\Str::limit($item->description, 150, $end='...') !!}
                                            <!--<a href="{{ route('classDesc', $item->slug) }}" class="btn custom-btn">READ MORE</a>-->
                                            <a href="" class="btn custom-btn">READ MORE</a>
                                        </div>
                                    </div>
                                @endforeach--}}
                                
                                @foreach ($whatwedo as $key => $item)
                                
                                    <div class="col-lg-3 col-md-3 col-12 mb-5">
                                        <div class="MainClasses class-{{ $key++ }}" data-aos="flip-left"
                                            data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                            <figure class="cls-img-1">
                                                <img src="{{asset($item->image)}}" class="img-fluid" alt="">
                                            </figure>
                                            <h5 class="Elephant-headings pt-4">{{$item->name}}</h5>
                                            <!--<a href="{{ route('schoolOfDance').'#'.$item->section_link }}" class="btn custom-btn">READ MORE</a>-->
                                            
                                            @if($key == '1')
                                                
                                                <a href="{{ URL('school-of-dance#location') }}" class="btn custom-btn">READ MORE</a>
                                            
                                            @elseif($key == '2')
                                            
                                                <a href="https://leapingfeet.com/lander" class="btn custom-btn">READ MORE</a>
                                                                                            
                                            @elseif($key == '3')
                                            
                                                <a href="{{ URL('school-of-dance#school_policy') }}" class="btn custom-btn">READ MORE</a>
                                            
                                            @elseif($key == '4')
                                            
                                                <a href="{{ URL('school-of-dance#teaching_philosophy') }}" class="btn custom-btn">READ MORE</a>
                                                                                            
                                            @endif
                                            
                                        </div>
                                    </div>

                                @endforeach
                                    <!--<div class="col-lg-3 col-md-3 col-12 mb-5">-->
                                    <!--    <div class="MainClasses class-{{ $key++ }}" data-aos="flip-left"-->
                                    <!--        data-aos-easing="ease-out-cubic" data-aos-duration="2000">-->
                                    <!--        <figure>-->
                                    <!--            <img src="https://demowebsitess.com/custom-backend/natayanjali/public/uploads/danceclasss/class-3_1682976740.png" class="img-fluid" alt="">-->
                                    <!--        </figure>-->
                                    <!--        <h5 class="Elephant-headings pt-4">School Portal</h5>-->
                                    <!--        <a href="http://leapingfeet.com/" target="_blank" class="btn custom-btn">READ MORE</a>-->
                                    <!--    </div>-->
                                    <!--</div>-->


                        </div>
                    </div>
                </div>
                
                {{--<div class="col-lg-6">
                    <figure>
                        <img src="{{ asset($section[1]->value) }}" class="img-fluid" alt="">
                    </figure>
                </div>--}}
                
            </div>
        </div>
    </section>
    <!-- section-4 html end  -->




    <!-- section-3 html start  -->
    <section class="section-3" style="background:url({{ asset('images/bg-7.png') }})">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2 class="Elephant-headings text-center pb-5">{{ $section[5]->value }}</h2>
                </div>
                @foreach ($videos as $item)
                    <div class="col-lg-4">
                        {!! $item->video !!}
                    </div>
                @endforeach
                <div class="col-lg-12 VIDEOSDiv mt-5 text-center">
                    <a href="{{ route('biographyVideo') }}" class="btn custom-btn">VIEW ALL VIDEOS</a>
                </div>
            </div>

        </div>
    </section>
    <!-- section-3 html end  -->

    <!-- section-4 html end  -->
    <section class="testimonials" style="background-image:url({{ asset('images/bg-4.png') }})">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="TopTextMain">
                        <h1 class="Elephant-headings text-light">{{ $section[6]->value }}</h1>
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
                                        <div class="SecondSliderContent"> <img src="{{ asset('images/commas.png') }}"
                                                class="img-fluid" alt="">
                                            <p class="para"> {!! $item->comments !!} </p>
                                        </div>
                                        <div class="secondSliderImages">
                                            <figure> <img src="{{ asset($item->image) }}" class="img-fluid"
                                                    alt="">
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
                                        <div class="SecondSliderContent SilderSecondPAra"> <img
                                                src="{{ asset('images/commas.png') }}" class="img-fluid" alt="">
                                            <p class="para">{!! $item->comments !!} </p>
                                        </div>
                                        <div class="secondSliderImages">
                                            <figure> <img src="{{ asset($item->image) }}" class="img-fluid"
                                                    alt="">
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
    <!-- section-4 html end  -->

    <!-- NewslatterSec start -->
    <section id="subscribe-newsletter" class="NewslatterSec" style="background-image:url({{ asset('images/bg-5.png') }})">
        <div class="container">
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <div class="newslatterinner" data-aos="fade-up">
                        {!! $section[7]->value !!}
                        <div class="input-group">
                            <form id="newForm" class="row">
                                @csrf
                                <div class="col-md-6">
                                     <input type="text" id="newname" class="form-control"
                                    placeholder="Name" required>
                                </div>
                                <div class="col-md-6">
                                     <input type="email" id="newemail" class="form-control"
                                    placeholder="Enter your email" required>
                                </div>
                               <div class="col-md-12" style="margin: 0 auto;">

                                   <button type="submit" class="btn custom-btn">Subscribe</button>
                               </div>

                            </form>

                        </div>
                    </div>
                </div>
                <div class="col-md-1"></div>
            </div>
        </div>
    </section>
    <!-- NewslatterSec end -->



    <section id="youth_center" class="sing-in-sec"  style="background-image:url({{ asset('images/bg-4.png') }})">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="newslatterinner" data-aos="fade-up">
                        <h1>Join Our Youth Corner </h1>
                    </div>
                    <div class="form-singin">
                        <form class="contactform">
                            @csrf
                            <input type="hidden" name="form_name" value="Join Youth Center">
                            <div class="form-group">
                                    <input type="text" class="form-control" id="fname" name="fname"  placeholder="First Name"
                                        required>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="lname" name="lname" placeholder="Last Name"
                                    required>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" id="email" name="email" placeholder="Email"
                                    required>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="levelofdance" name="levelofdance" placeholder="Level Of Dance"
                                    required>
                            </div>
                            <div class="input-sing">
                                <button class="HeaderButton btn btn-primary" type="submit">Join Our Youth Corner
                                </button>
                            </div>

                            <!--</div>-->
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </section>


    <section id="online_consultation" class="classesSec concultationSec py" style="background-image: url({{ asset('images/get-free.png') }})">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-10 col-md-9 col-12">
                    <div class="rigistration CardPrograms aos-init aos-animate" data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <h6 class="Elephant-headings text-center">To enroll Get Your First Free Online Consultation</h6>
                        <!-- <p class="para pt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p> -->
                        <div class="FoamDiv">
                            <form class="contactform">
                                @csrf
                                <input type="hidden" name="form_name" value="Free Online Consultation">

                                <div class="form-row">
                                    <div class="col">
                                        <label for="">Name</label>
                                        <input type="text" class="form-control" name="fname"
                                            placeholder="Your name" required>
                                    </div>
                                    <div class="col">
                                        <label for="">Phone</label>
                                        <input type="text" class="form-control" name="phone"
                                            placeholder="Mobile Phone number" required>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col">
                                        <label for="">Class No.</label>
                                        <input type="text" class="form-control" name="section"
                                            placeholder="Class No" required>
                                    </div>
                                    <div class="col">
                                        <label for="">Date</label>
                                        <input type="date" name="frm_date" class="form-control"
                                            placeholder="Calender shedule" required>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="col text-center">
                                        <button href="#" class="btn custom-btn">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@section('css')
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" integrity="sha512-17EgCFERpgZKcm0j0fEq1YCJuyAWdz9KUtv1EjVuaOz8pDnh/0nZxmU6BBXwaaxqoi9PQXnRWqlcDB027hgv9A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" integrity="sha512-yHknP1/AwR+yx26cB1y0cjvQUMvEa2PFzt1c9LlS4pRQ5NOTZFWbhBig+X9G9eYW/8m0/4OXNx8pxJ6z57x0dw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style>

.LocationPara .MainClasses {
    padding: 40px;
}

.LocationPara .MainClasses a {
    width: 75%;
    text-align: center;
    padding: 9px 13px;
}
form#newForm button {
    margin-top: 1.5rem;
    width: 25%;
}

.MainClasses a {
    margin-top: 10px;
}
.LocationPara a:hover {
    color: red !important;
}
    section{
            background-repeat: no-repeat !important;
            background-size:100% 100% !important;
    }
        form#newForm {
            width: 100%;
        }

        section.location-Sec {
        background: linear-gradient(0.25turn, #3254f9, #3ba4fb);
        }
        .LocationPara a{
            color: white !important;
        }
        .Location h3{
            font-size: 35px;
            color: #cdc0c0 !important;
        }
        .LocationPara {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
}
.MainClasses p {
    color: white;
}
.MainClasses img {
    border-radius: 5px;
}
    </style>
@endsection

@section('js')
<script>


</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js" integrity="sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script type="text/javascript"></script>
@endsection
