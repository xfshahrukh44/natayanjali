@extends('layouts.main')
@section('content')
    <section class="banner" id="upcoming">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="Elephant-headings ml2">Upcoming</h1>
                    <p class="para mt-3">Latest Events
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- section-4 html end  -->
    <section class="location-Sec bg-gradient pt-0">
        <div class="container">
            <div class="row align-items-center">

                @forelse ($up_events as $key => $item)
                    @if ($key % 2 == 0)
                        <div class="col-lg-6 my-5">
                            <div class="WestCovina">
                                <div class="Location">
                                    <span>
                                        <p class="para">{{ date('F d, Y @ h:i A', strtotime($item->time)) }}</p>
                                    </span>
                                </div>
                                <div class="LocationPara">
                                    <h3 class="ml6">
                                        <span class="text-wrapper">
                                            <span class="letters Elephant-headings">
                                                <h3>{{ date('M d', strtotime($item->time)) }}</h3>
                                            </span>
                                        </span>
                                    </h3>
                                    {!! $item->description !!}
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 my-5">
                            <figure>
                                <img src="{{ asset($item->image) }}" class="img-fluid" alt="">
                            </figure>
                        </div>
                    @else
                        <div class="col-lg-6 my-5">
                            <figure>
                                <img src="{{ asset($item->image) }}" class="img-fluid" alt="">
                            </figure>
                        </div>
                        <div class="col-lg-6 my-5">
                            <div class="WestCovina">
                                <div class="Location">
                                    <span>
                                        <p class="para">{{ date('F d, Y @ h:i A', strtotime($item->time)) }}</p>
                                    </span>
                                </div>
                                <div class="LocationPara">
                                    <h3 class="ml6">
                                        <span class="text-wrapper">
                                            <span class="letters Elephant-headings">
                                                <h3>{{ date('M d', strtotime($item->time)) }}</h3>
                                            </span>
                                        </span>
                                    </h3>
                                    {!! $item->description !!}
                                </div>
                            </div>
                        </div>
                    @endif
                @empty
                    <h2 class="text-center">No {{ Str::lower($text) }} events.</h2>
                @endforelse





            </div>
        </div>
    </section>
    <section class="banner" id="concluded">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="Elephant-headings ml2">Last</h1>
                    <p class="para mt-3">Past Events
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section class="banner" id="concluded">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <!--<h2 class="Elephant-headings ml2">Class Schedule</h2>-->
                    </p>
                </div>
                <div class="col-lg-12">
                    <div id='calendar'></div>
                </div>
            </div>
        </div>
    </section>
       @if (!$tickets->isEmpty())
        <!--<section class="content component usn_cmp_showtimeticketbox c2-bg c2-bg-solid  ">-->
        <!--    <div class="container">-->
        <!--        <div class="showtime-box component-main row justify-content-between align-items-center">-->
        <!--            <div class="align-self-start col-12 col-md-3 col-xl-3 order-md-1 order-1">-->
        <!--                <h2 class="showtime-text heading text c2-text  " data-os-animation="fadeIn"-->
        <!--                    data-os-animation-delay="0s">-->
        <!--                    Tickets &amp; Showtimes-->
        <!--                </h2>-->
        <!--            </div>-->
        <!--            <div class="col-12 col-md-12 col-xl-12 order-md-2 order-2">-->
        <!--                @foreach ($tickets->take(3) as $item)-->
        <!--                    <div class="upcoming-parent">-->
        <!--                        <div class="upcoming-date">-->
        <!--                            <span>{{ Carbon\Carbon::parse($item->time)->format('D') }}</span>-->
        <!--                            <h6>{{ Carbon\Carbon::parse($item->time)->format('d') }}</h6>-->
        <!--                            <span>{{ Carbon\Carbon::parse($item->time)->format('F') }}</span>-->
        <!--                            <span>{{ Carbon\Carbon::parse($item->time)->format('Y') }}</span>-->
        <!--                            <span>{{ date('h:i A', strtotime($item->time)) }}</span>-->
        <!--                        </div>-->
        <!--                        <div class="upcoming-img" >-->
        <!--                            <img src="{{ asset($item->class->image) }}" class="img-fluid" />-->
        <!--                        </div>-->
        <!--                        <div class="upcoming-content-2">-->
        <!--                            <h3>{{ $item->class->name }}</h3>-->
        <!--                            {!! $item->class->description !!}-->
        <!--                            <div class="find-more">-->
        <!--                                <div class="find-more-arrow">-->
        <!--                                    <a href="{{ route('home').'#online_consultation' }}">Find out more <span class="arrow">></span> </a>-->
        <!--                                </div>-->
        <!--                                <div class="ticket">-->
        <!--                                    <a href="{{ route('home').'#online_consultation' }}"> <span><img src="{{ asset('images/ticket.svg') }}" class="img-fluid"-->
        <!--                                                alt=""></span> <span>FREE</span> </a>-->
        <!--                                </div>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                        <div class="location-map">-->
        <!--                            <span class="address">-->
        <!--                                <p>-->
        <!--                                    <span class="d-block">-->
        <!--                                       {{ App\Http\Traits\HelperTrait::returnFlag(519) }}-->
        <!--                                    </span>-->
                                           
        <!--                                </p>-->
        <!--                            </span>-->
        <!--                            <span class="google-map">-->
        <!--                                <p>Google Map</p>-->
        <!--                                <a href="{{ App\Http\Traits\HelperTrait::returnFlag(1975) }}" target="_blank">-->
        <!--                                    <i class="fa-solid fa-location-dot"></i>-->
        <!--                                </a>-->
        <!--                            </span>-->
        <!--                            <span class="social-icon">-->
        <!--                                <a href="{{ App\Http\Traits\HelperTrait::returnFlag(1960) }}"><img src="{{ asset('images/square-twitter.svg') }}" alt=""></a>-->
        <!--                                <a href="{{ App\Http\Traits\HelperTrait::returnFlag(682) }}"><img src="{{ asset('images/facebook.svg') }}" alt=""></a>-->
        <!--                                <a href="{{ App\Http\Traits\HelperTrait::returnFlag(1962) }}"><img src="{{ asset('images/instagram.svg') }}" alt=""></a>-->
        <!--                            </span>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                @endforeach    -->
                        <!--<div class="repeatable accordion tab-underline " data-os-animation="fadeIn"-->
                        <!--    data-os-animation-delay="0s" data-os-animation-duration="1.2s">-->
                        <!--    <div class="repeatable accordion tab-underline " data-os-animation="fadeIn"-->
                        <!--        data-os-animation-delay="0s" data-os-animation-duration="1.2s">-->
                             
                        <!--        @foreach ($tickets->take(3) as $item)-->
                        <!--            <div id="collapse_998f2f39-fbe9-4078-8b7d-9deb36627efd_1"-->
                        <!--                class="info repeatable-content tab">-->
                        <!--                <ul class="text showtime-list">-->
                        <!--                    <li class="showtime-item showtime-item--multiple showtime-item--divider">-->
                        <!--                        <div class="showtime-item__date">-->
                        <!--                            <strong>-->
                        <!--                                {{ date('l', strtotime($item->time)) }}-->
                        <!--                                <br>-->
                        <!--                                {{ date('d/m/Y', strtotime($item->time)) }}-->
                        <!--                            </strong>-->
                        <!--                        </div>-->
                        <!--                        <div class="showtime-item__date">-->
                        <!--                            <p>-->
                        <!--                                {{ $item->class->name }}-->
                        <!--                            </p>-->
                        <!--                        </div>-->
                        <!--                        <div class="showtime-item__date">-->
                        <!--                            <p>-->
                        <!--                                {{ date('h:i A', strtotime($item->time)) }}-->
                        <!--                            </p>-->
                        <!--                        </div>-->
                        <!--                        <div class="showtime-item__btn">-->
                        <!--                            <p class="link " data-os-animation="fadeIn"-->
                        <!--                                data-os-animation-delay="0s" data-os-animation-duration="1.2s">-->
                        <!--                                <a href="#" class="btn custom-btn">-->
                        <!--                                    <span></span>-->
                        <!--                                    Tickets-->
                        <!--                                </a>-->
                        <!--                            </p>-->
                        <!--                        </div>-->
                        <!--                    </li>-->
                        <!--                </ul>-->
                        <!--            </div>-->
                        <!--        @endforeach-->
                        <!--    </div>-->


                        <!--</div>-->
                        
        <!--            </div>-->
        <!--        </div>-->
        <!--    </div>-->
        <!--</section>-->
    @endif
     
    <!--<section class="location-Sec bg-gradient pt-0">-->
    <!--    <div class="container">-->
    <!--        <div class="row align-items-center">-->

    <!--            @forelse ($last_events as $key => $item)-->
    <!--                @if ($key % 2 == 0)-->
    <!--                    <div class="col-lg-6 my-5">-->
    <!--                        <div class="WestCovina">-->
    <!--                            <div class="Location">-->
    <!--                                <span>-->
    <!--                                    <p class="para">{{ date('F d, Y @ h:i A', strtotime($item->time)) }}</p>-->
    <!--                                </span>-->
    <!--                            </div>-->
    <!--                            <div class="LocationPara">-->
    <!--                                <h3 class="ml6">-->
    <!--                                    <span class="text-wrapper">-->
    <!--                                        <span class="letters Elephant-headings">-->
    <!--                                            <h3>{{ date('M d', strtotime($item->time)) }}</h3>-->
    <!--                                        </span>-->
    <!--                                    </span>-->
    <!--                                </h3>-->
    <!--                                {!! $item->description !!}-->
    <!--                            </div>-->
    <!--                        </div>-->
    <!--                    </div>-->
    <!--                    <div class="col-lg-6 my-5">-->
    <!--                        <figure>-->
    <!--                            <img src="{{ asset($item->image) }}" class="img-fluid" alt="">-->
    <!--                        </figure>-->
    <!--                    </div>-->
    <!--                @else-->
    <!--                    <div class="col-lg-6 my-5">-->
    <!--                        <figure>-->
    <!--                            <img src="{{ asset($item->image) }}" class="img-fluid" alt="">-->
    <!--                        </figure>-->
    <!--                    </div>-->
    <!--                    <div class="col-lg-6 my-5">-->
    <!--                        <div class="WestCovina">-->
    <!--                            <div class="Location">-->
    <!--                                <span>-->
    <!--                                    <p class="para">{{ date('F d, Y @ h:i A', strtotime($item->time)) }}</p>-->
    <!--                                </span>-->
    <!--                            </div>-->
    <!--                            <div class="LocationPara">-->
    <!--                                <h3 class="ml6">-->
    <!--                                    <span class="text-wrapper">-->
    <!--                                        <span class="letters Elephant-headings">-->
    <!--                                            <h3>{{ date('M d', strtotime($item->time)) }}</h3>-->
    <!--                                        </span>-->
    <!--                                    </span>-->
    <!--                                </h3>-->
    <!--                                {!! $item->description !!}-->
    <!--                            </div>-->
    <!--                        </div>-->
    <!--                    </div>-->
    <!--                @endif-->
    <!--            @empty-->
    <!--                <h2 class="text-center">No {{ Str::lower($text) }} events.</h2>-->
    <!--            @endforelse-->





    <!--        </div>-->
    <!--    </div>-->
    <!--</section>-->
  
@endsection
@section('css')
<style>
td.fc-day {
        border: 1px solid #000;
    }

    th.fc-col-header-cell {
        border: 1px solid  #000 !important;
    }
    
    table.fc-scrollgrid.fc-scrollgrid-liquid {
        border: 1px solid #000;
    }
    
    .fc-scroller.fc-scroller-liquid-absolute {
        position: inherit;
    }
    
    .upcoming-content h2 {
        letter-spacing: 0px;
        color: #D75743;
        font-size: 48px;
        font: normal normal normal 48px/30px Playball;
        letter-spacing: 0px;
        color: #D75743;
        font-size: 60px;
    }
    
    .upcoming-parent {
        display: flex;
        width: 100%;
        align-items: center;
        height: 100%;
        margin: 2rem 0;
        background: #FFFFFF 0% 0% no-repeat padding-box !important;
        border-radius: 9px;
        box-shadow: 0px 4px 5px #D7574359;
    }
    
     .upcoming-date {
            background: #4C1B4E;
            width: 25%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding-left: 2rem;
            padding: 10px 30px;
            border-radius: 12px 0px 0px 12px;
        }
    
    .upcoming-date span {
        color: white;
        font-family: 'Oswald';
        font-size: 16px;
    }
    
    .upcoming-date h6 {
        letter-spacing: 0px;
        color: #D75743;
        font-size: 36px;
        font: normal normal bold 36px/46px Poppins;
        font-family: 'Poppins', sans-serif;
        margin: 0;
    }
    
    
    .upcoming-img {
        width: 40.8%;
        background-image: url('../images/upcoming-img.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 160px;
    }
    
    .upcoming-img img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
    
    .upcoming-content-2 {
        background: white;
        height: 100%;
        padding: 10px 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .location-map {
        background: #FBFBFB 0% 0% no-repeat padding-box;
        border-radius: 0px 12px 12px 0px;
        width: 35%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px 30px;
    }
    
    .find-more {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .find-more-arrow a {
        font: normal normal normal 14px/12px Oswald;
        letter-spacing: 0px;
        color: #D75743;
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;
    }
    
    .ticket a {
        font: normal normal normal 14px/12px Poppins;
        letter-spacing: 0px;
        color: #4C1B4E;
        text-decoration: none;
        font-size: 14px;
        font-weight: 500;
    }
    
    .upcoming-content-2 h3 {
        font: normal normal bold 18px/27px Oswald;
        letter-spacing: 0px;
        color: #D75743;
        font-size: 18px;
    }
    
    .upcoming-content-2 p {
        font: normal normal normal 14px/21px Poppins;
        letter-spacing: 0px;
        color: #000000;
    }
    
    span.address p {
        font: normal normal normal 14px/21px Poppins;
        letter-spacing: 0px;
        color: #000000;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
    }
    
    span.address span.d-block {
        font: normal normal bold 14px/21px Oswald;
        letter-spacing: 0px;
        color: #000000;
    }
    
    span.google-map {
        display: flex;
        letter-spacing: 0px;
        color: #D75743;
        gap: 20px;
    }
    
    span.social-icon {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    span.google-map a {
        color: #D75743;
    }
    
    .upcoming-parent * {
    font-family: 'Oswald';
}


</style>

@endsection

@section('js')
  <script src='https://cdn.jsdelivr.net/npm/@fullcalendar/core@6.1.7/index.global.min.js'></script>
    <script src='https://cdn.jsdelivr.net/npm/@fullcalendar/daygrid@6.1.7/index.global.min.js'></script>
    <script type="text/javascript">
    let yourDate = new Date()


        var events =@json($all_events);
        let cal_events = [];
        for (const key in events){
            let jsonObj = events[key]
            cal_events.push({
                title: jsonObj['name'],
                start: jsonObj['time'],
                end:jsonObj['time']
            })
        }
         document.addEventListener('DOMContentLoaded', function () {
            var calendarEl = document.getElementById('calendar');

            var calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth',
                initialDate: yourDate.toISOString().split('T')[0],
                headerToolbar: {
                },
                events:cal_events
            });

            calendar.render();
        });
        
        console.log(events)
    </script>
@endsection
