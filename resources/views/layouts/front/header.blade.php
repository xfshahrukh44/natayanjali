<?php $segment = Request::segments();?>
<header>
    <div class="container-fluid">
        <div class="row align-items-center">
            <div class="col-lg-12">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="{{ route('home') }}">
                        <img src="{{ asset($logo->img_path) }}" class="logo" alt="">
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="{{ route('home') }}">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="{{ route('about') }}" id="navbarDropdown" aria-expanded="false">
                                    About Us
                                </a>
                                 <div class="dropdown-menu" aria-labelledby="navbarDropdown" aria-expanded="true">
                                     <!--<a class="dropdown-item" href="shop-detail.php">Shop</a> -->
                                    <a class="dropdown-item" href="{{ route('about').'#bharata_natyam' }}">What is Bharata Natyam </a>
                                    <a class="dropdown-item" href="{{ route('about').'#natyanjali_shcool_of_dance' }}" aria-expanded="false">Natyanjali
                                        School of Dance</a>
                                    <a class="dropdown-item" href="{{ route('about').'#testimonial' }}">Testimonials</a>
                                </div> 
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="{{ route('director') }}">
                                    Director
                                </a>
                                 <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <!-- <a class="dropdown-item" href="shop-detail.php">Shop</a> -->
                                    <a class="dropdown-item" href="{{ route('director').'#director' }}">Guru Dr. Malini Krishnamurthi</a>
                                    <a class="dropdown-item" href="{{ route('director').'#press_reviews' }}" aria-expanded="false">Press
                                        Reviews</a>
                                    <a class="dropdown-item" href="{{ route('director').'#performance_history' }}">Performance History</a>
                                    <a class="dropdown-item" href="{{ route('gallery').'#video' }}">Biography video</a>
                                    <a class="dropdown-item" href="{{ route('director').'#pictures' }}">Performance Pictures</a>
                                </div> 
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="{{ route('schoolOfDance').'#danceclass' }}">
                                    School
                                </a>
                                 <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('schoolOfDance').'#offered' }}">Classes offered</a>
                                    <a class="dropdown-item" href="{{ route('home').'#online_consultation' }}">The Free Consultation</a>
                                    <a class="dropdown-item" href="{{ route('schoolOfDance').'#location' }}">Location</a>
                                    <a class="dropdown-item" href="{{ route('schoolOfDance').'#teaching_philosophy' }}">Teaching Philosophy</a>
                                    <a class="dropdown-item" href="{{ route('schoolOfDance').'#school_policy' }}">School Policy</a>
                                    <a class="dropdown-item" href="{{ route('schoolOfDance').'#faq' }}">FAQ</a>
                                    <a class="dropdown-item" href="http://leapingfeet.com/" target="_blank">Go to Student Portal</a>
                                    <a class="dropdown-item" href="{{ route('instructor') }}" aria-expanded="false">Assistant Instructors</a>
                                </div> 
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="{{ route('upcomingEvent') }}">
                                    Events
                                </a>
                                 <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <!-- <a class="dropdown-item" href="shop-detail.php">Shop</a> -->
                                    <a class="dropdown-item" href="{{ route('upcomingEvent').'#upcoming' }}">Upcoming </a>
                                    <a class="dropdown-item" href="{{ route('upcomingEvent').'#concluded' }}" aria-expanded="false">Concluded</a>
                                </div> 
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="{{ route('gallery') }}" id="navbarDropdown" aria-expanded="true">
                                    Gallery
                                </a>
                                 <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <!-- <a class="dropdown-item" href="shop-detail.php">Shop</a> -->
                                    <a class="dropdown-item" href="{{ route('gallery').'#photo' }}">Photos </a>
                                    <a class="dropdown-item" href="{{ route('gallery').'#video' }}" aria-expanded="false">Videos</a>
                                </div> 
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('blogs') }}">Blog</a>
                            </li>
                             <li class="nav-item">
                                <a class="nav-link" href="{{ route('home').'#youth_center' }}">Youth Corner </a>
                            </li> 
                            <li class="nav-item">
                                <a class="nav-link"  href="{{ route('home').'#subscribe-newsletter' }}">Subscribe </a>
                            </li>
                            <li class="nav-item theme">

                                <svg xmlns="http://www.w3.org/2000/svg" style="
    display: none;
">
                                    <symbol id="circle-half" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z">
                                        </path>
                                    </symbol>
                                    <symbol id="moon-stars-fill" viewBox="0 0 16 16">
                                        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z">
                                        </path>
                                        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z">
                                        </path>
                                    </symbol>
                                    <symbol id="sun-fill" viewBox="0 0 16 16">
                                        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z">
                                        </path>
                                    </symbol>
                                </svg>
                                {{-- <button type="button" id="theme-button" class="btn d-flex align-items-center" data-bs-theme-value="light">
                                    <svg class="bi me-2 opacity-50 theme-icon">
                                        <use href="#circle-half"></use>
                                    </svg>
                                    Change theme
                                    <svg class="bi ms-auto">
                                        <use href="#check2"></use>
                                    </svg>
                                </button> --}}

                            </li>

                        </ul>

                        <form class="form-inline my-2 my-lg-0">
                            <a href="{{ route('home').'#online_consultation' }}" class="btn custom-btn">Enroll Now</a>
                        </form>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</header>
