@extends('layouts.main')
@section('content')
    <section class="banner" id="offered">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    {!! $page->content !!}
                    <div class="d-flex justify-content-center mt-5">
                        <!--<a href="https://demowebsitess.com/custom-html/malini-portal/" target="_blank" class="btn custom-btn">Book your classes</a>-->
                    </div>
                </div>
            </div>
        </div>
    </section>
    @foreach ($danceclass as $key => $item)

    <section class="content component usn_cmp_splitcomponent c6-bg c6-bg-solid  " id="{{ preg_replace('/-+/', '-', preg_replace('/[^A-Za-z0-9\-]/', '', str_replace(' ', '-', $item->name))) }}">
    <div class="container">
        <div class="component-main row justify-content-between align-items-center">
            <div class="item item_block usn_cmp_pods align-self-start col-xl-4 col-md-6 order-md-1 order-1 col-12   " data-os-animation="fadeIn" data-os-animation-delay="0s" data-os-animation-duration="1.2s">
                <div class="component-main row listing  listing_basic-grid listing-pods ">
                    <div class="item   items-1 col-12 item_text-below usn_pod_textimage text-left  " data-os-animation="fadeIn" data-os-animation-delay="0s" data-os-animation-duration="1.2s">
                        <div class="inner   ">
                                <div class="text c6-text d-flex flex-column justify-content-center">
                                    <figure class="text-center">
                                    <img src="{{ asset($item->image) }}" class="img-fluid" alt="">
                                    </figure>
                                    <h1 class="text-center">{{ $item->name }}</h1>
                                   
                                        <a href="{{ route('home').'#online_consultation' }}" class="btn custom-btn w-50 p-2 text-center mt-2"  style="margin:0 auto">Enroll Now</a>
                                  
                                   
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="item item_block usn_cmp_pods align-self-center col-xl-8 col-md-6 order-md-2 order-2 col-12   " data-os-animation="fadeIn" data-os-animation-delay="0s" data-os-animation-duration="1.2s">
                <div class="component-main row listing  listing_basic-grid listing-pods ">
                    <div class="item   items-1 col-12 item_text-below usn_pod_textimage text-left  " data-os-animation="fadeIn" data-os-animation-delay="0s" data-os-animation-duration="1.2s">
                        <div class="inner   ">
                            <a href="#">
                                <div class="info ">
                                    <div class="text c6-text">
                                        {!! $item->description !!}

                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endforeach
     <!--<section class="section-3 bg-custom" style="background-image: url({{ asset('images/section-8.png') }})">-->
     <!--       <div class="container">-->
     <!--           <div class="row">-->
     <!--               <div class="col-lg-12">-->
     <!--                   <h2 class="Elephant-headings text-center pb-5">DANCE CLASSES</h2>-->
     <!--               </div>-->
     <!--               @foreach ($danceclass as $key => $item)-->
     <!--                   <div class="col-lg-4 col-md-6 col-12 mb-3">-->
     <!--                       <div class="MainClasses class-{{ $key++ }}" data-aos="flip-left"-->
     <!--                           data-aos-easing="ease-out-cubic" data-aos-duration="2000">-->
     <!--                           <figure>-->
     <!--                               <img src="{{ asset($item->image) }}" class="img-fluid" alt="">-->
     <!--                           </figure>-->
     <!--                           <h5 class="Elephant-headings pt-4">{{$item->name}}</h5>-->
     <!--                            <div class="text c6-text">-->
     <!--                                       <p><em>{{ $item->name }}</em></p>-->
     <!--                                       <p>{{ $item->start }}</p>-->
     <!--                                       <p>Tickets start at ${{ $item->ticket }}</p>-->
     <!--                                   </div>-->
     <!--                           <a href="{{route('home').'#youth_center'}}" class="btn custom-btn">Learning Guide</a>-->
     <!--                       </div>-->
     <!--                   </div>-->
     <!--               @endforeach-->

     <!--           </div>-->
     <!--       </div>-->
     <!--   </section>-->
    {{--@foreach ($danceclass as $item)
        <section id="{{preg_replace('/-+/', '-', preg_replace('/[^A-Za-z0-9\-]/', '', str_replace(' ', '-', $item->name)))}}" class="content component usn_cmp_splitcomponent c6-bg c6-bg-solid  ">
            <div class="container">
                <div class="component-main row justify-content-between align-items-center">
                    <div class="item item_block usn_cmp_pods align-self-start col-xl-4 col-md-6 order-md-1 order-1 col-12   "
                        data-os-animation="fadeIn" data-os-animation-delay="0s" data-os-animation-duration="1.2s">
                        <div class="component-main row listing  listing_basic-grid listing-pods ">
                            <div class="item   items-1 col-12 item_text-below usn_pod_textimage text-left  "
                                data-os-animation="fadeIn" data-os-animation-delay="0s" data-os-animation-duration="1.2s">
                                <div class="inner   ">
                                    <div class="info ">
                                        <div class="text c6-text">
                                            <p><em>{{ $item->name }}</em></p>
                                            <p>{{ $item->start }}</p>
                                            <p>Tickets start at ${{ $item->ticket }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item   items-1 col-12 item_text-below usn_pod_textimage text-left  "
                                data-os-animation="fadeIn" data-os-animation-delay="0s" data-os-animation-duration="1.2s">
                                <div class="inner   ">
                                    <div class="info ">
                                        <!--<div class="text c6-text">-->
                                        <!--    <ul style="margin: 10px 0 0; list-style: none; display: flex;">-->
                                        <!--        <li><a style="padding: 16px 20px; margin-right: 8px;" href="#"-->
                                        <!--                class="btn custom-btn"> Buy Tickets </a></li>-->
                                        <!--        <li><a style="padding: 16px 20px;margin-left: 8px;" href="#"-->
                                        <!--                class="btn custom-btn"> Buy Package </a></li>-->
                                        <!--    </ul>-->
                                        <!--</div>-->

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item item_block usn_cmp_pods align-self-center col-xl-8 col-md-6 order-md-2 order-2 col-12   "
                        data-os-animation="fadeIn" data-os-animation-delay="0s" data-os-animation-duration="1.2s">
                        <div class="component-main row listing  listing_basic-grid listing-pods ">
                            <div class="item   items-1 col-12 item_text-below usn_pod_textimage text-left  "
                                data-os-animation="fadeIn" data-os-animation-delay="0s" data-os-animation-duration="1.2s">
                                <div class="inner   ">
                                    <p>
                                        <div class="info ">
                                            <div class="text c6-text">
                                                {!! $item->description !!}
                                            </div>
                                            <a class="link" href="{{route('home').'#youth_center'}}">
                                                <span class="btn custom-btn" style="padding: 16px 20px; margin-right: 8px;">
                                                    <span></span>
                                                    Learning Guide
                                                </span>
                                            </a>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    @endforeach--}}





    {{--<div id="danceclass">
        @foreach ($danceclass as $item)
    <section class="banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="Elephant-headings ml2">{{$item->name}}</h1>

<p class="para mt-3">{!! $item->description !!}</p>
                </div>
            </div>
        </div>
    </section>
    @endforeach
    </div>--}}





    <!-- section-4 html end  -->

    <!-- section-4 html end  -->
    {{-- <section class="classesSec bg-gradient pt-0" id="free_consultation">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-8 col-md-9 col-12">
                    <div class="rigistration CardPrograms" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        {!! $section[1]->value !!}
                        <div class="FoamDiv">
                            <form class="contactform">
                                @csrf
                                <input type="hidden" name="form_name" value="Free Consultation">
                                <div class="form-row">
                                    <div class="col">
                                        <input type="text" name="fname" class="form-control" required
                                            placeholder="First Name">
                                    </div>
                                    <div class="col">
                                        <input type="text" id="lname" name="lname" class="form-control"
                                            required placeholder="Last Name">
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
                                        <input type="text" name="email" class="form-control"
                                            placeholder="Your email">
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
                            <img src="{{ asset($section[2]->value) }}" class="img-fluid" alt="">
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section> --}}
    <section class="banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    {!! $section[3]->value !!}
                </div>
            </div>
        </div>
    </section>
    <section class="location-Sec bg-gradient pt-0" id="location">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12">
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
                        <p class="para mb-3"><ul class="locationul">
                            <li>In-person classes in West Covina</li>
                            <li>Online classes on Zoom</li>
                            <li>Hybrid classes are also offered</li>
                        </ul></p>

                        {!! App\Http\Traits\HelperTrait::returnFlag(1974) !!}

                    </div>
                </div>
                <!--<div class="col-lg-6">-->
                <!--    <figure>-->
                <!--        <img src="{{ asset($section[4]->value) }}" class="img-fluid" alt="">-->
                <!--    </figure>-->
                <!--</div>-->
            </div>
        </div>
    </section>
    {!! $section[5]->value !!}
    <!--<section class="banner" id="concluded">-->
    <!--    <div class="container">-->
    <!--        <div class="row">-->
    <!--            <div class="col-lg-12">-->
    <!--                <h2 class="Elephant-headings ml2">All Classes</h2>-->
    <!--                </p>-->
    <!--            </div>-->
    <!--            <div class="col-lg-12">-->
    <!--                <div id='calendar'></div>-->
    <!--            </div>-->
    <!--        </div>-->
    <!--    </div>-->
    <!--</section>-->
<!-- section-6 html start  -->
<section class="FaqSec bg-gradient" id="faq">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-12 col-md-12 col-12">
                <div class="faqSec ">
                    {!! $section[6]->value !!}
                    <div class="sectionheading aos-init aos-animate" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                        <p class="para mt-3">The most popular questions to discuss in Bharata Natyam</p>
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
                                <div id="collapse{{ $key }}" class="collapse" aria-labelledby="heading{{ $key }}" data-parent="#accordion">
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
<section class="banner" id="assistant_instructors">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
             <h1 class="Elephant-headings ml2">Assistant Instructors</h1>
            </div>
        </div>
    </div>
</section>

<!-- section-4 html end  -->
<section class="AssistanceDirector bg-gradient pt-0">
    <div class="container">
        <div class="row align-items-center">
            @foreach ($instructor as $item)
            <div class="col-lg-3 col-md-4 col-6 pb-4">
                <div class="AssInstructor" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <a href="#">
                       <figure class="instructor-figure">
                            <img src="{{ asset($item->image) }}" class="img-fluid" alt="">
                        </figure>
                        <h6 class="ml-2">{{ $item->name }}</h6>
                        <span class="ml-2">{{ $item->post }}</span>
                    </a>
                </div>
            </div>
            @endforeach


        </div>
    </div>
</section>

    <section class="Video-Sec bg-gradient pt-0 cl-offer">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    {!! $video->video !!}
                </div>
            </div>
        </div>
    </section>

@endsection
@section('css')

    <style>
       figure.instructor-figure {
    height: 220px;
}

figure.instructor-figure img {
    width: 100%;
    object-fit: cover;
    height: 220px;
}
    ul.locationul{
        margin-bottom:1rem;
    }
    ul.locationul li {
    font-size: 18px !important;
    line-height: 28px;
}
    section#school_policy p,section#school_policy li {
        color: black;
    }
    .banner p,li {
    font-size: 21px !important;
}
.bg-custom {
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
 li {
    line-height: 2.5rem;
}
    .FoamDiv select {
        padding: 18px 1rem;
        border-radius: 10px;
        margin-bottom: 1rem;
        border-color: #828282;
            height: 60px !important;
    }


    .info figure {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .fc table {
        border-collapse: inherit;
        border-spacing: 0px;
        font-size: 1em;
    }

    td.fc-day {
        border: 1px solid #000;
    }

    th.fc-col-header-cell {
        border: 1px solid  #000 !important;
    }
    </style>

@endsection

@section('js')
<script src='https://cdn.jsdelivr.net/npm/@fullcalendar/core@6.1.7/index.global.min.js'></script>
<script src='https://cdn.jsdelivr.net/npm/@fullcalendar/daygrid@6.1.7/index.global.min.js'></script>
<script type="text/javascript">
let yourDate = new Date()


    var dance =@json($danceclass);
    let cal_dance = [];
    for (const key in dance){
        let jsonObj = dance[key]
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var d = new Date(jsonObj['start']);
        var dayName = days[d.getDay()];
        cal_dance.push({
            groupId: jsonObj['id'],
            title: jsonObj['name'],
            start: jsonObj['start'],
            end: jsonObj['end']
        })
         console.log(dayName);
    }

     document.addEventListener('DOMContentLoaded', function () {
        var calendarEl = document.getElementById('calendar');

        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            initialDate: yourDate.toISOString().split('T')[0],
            headerToolbar: {
            },
            events:cal_dance
        });

        calendar.render();
    });

    console.log(dance)
</script>
    <script type="text/javascript"></script>
@endsection
