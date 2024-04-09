   <!-- footer html start  -->
   <footer class="MainFooter">
       <div class="container">
           <div class="row">
               <div class="col-md-4">
                   <div class="Footerlogo">
                       <h1><a class="d-flex justify-content-center" href="{{ route('home') }}">
                               <img src="{{ asset($logo->img_path) }}" class="footerlogo" alt="" class="img-fluid">
                           </a></h1>
                       {{--<p> {{ App\Http\Traits\HelperTrait::returnFlag(1967) }}
                       <p> </p>--}}
                       <div class="FooterIcons d-flex justify-content-center"> {{--<a target="_blank" href="{{ App\Http\Traits\HelperTrait::returnFlag(1964) }}"><i
                                   class="fab fa-youtube"></i></a> <a target="_blank"
                               href="{{ App\Http\Traits\HelperTrait::returnFlag(1973) }}"><i
                                   class="fab fa-linkedin"></i></a> --}}<a target="_blank"
                               href="{{ App\Http\Traits\HelperTrait::returnFlag(1960) }}"><i
                                   class="fab fa-twitter"></i></a> <a target="_blank"
                               href="{{ App\Http\Traits\HelperTrait::returnFlag(682) }}"><i
                                   class="fab fa-facebook-f"></i></a> <a target="_blank"
                               href="{{ App\Http\Traits\HelperTrait::returnFlag(1962) }}"><i
                                   class="fab fa-instagram"></i></a> </div>
                   </div>
               </div>
               <div class="col-md-2">
                   <div class="Quicklinkheading">
                       <h5>QUICK LINKS</h5>
                       <ul>
                           <li><a href="{{ route('home') }}">Home</a></li>
                           <li><a href="{{ route('about') }}">About </a></li>
                           <li><a href="{{ route('director') }}">Director</a></li>
                           <li><a href="{{ route('gallery') }}"> Gallery</a></li>

                       </ul>
                   </div>
               </div>
               <div class="col-md-2">
                   <div class="Quicklinkheading">
                       <h5>CUSTOMER AREA</h5>
                       <ul>
                           <li><a href="{{ route('classOffered') }}">Classes</a></li>
                           <li><a href="{{ route('upcomingEvent') }}"> Events</a></li>
                           <li><a href="{{ route('schoolOfDance')}}#location">Location</a></li>
                           <li><a href="{{ route('schoolOfDance') }}#school_policy">School Policy</a></li>

                       </ul>
                   </div>
               </div>
               <div class="col-md-4">
                   <div class="Quicklinkheading">
                       <h5>Contact</h5>
                       <p> {{ App\Http\Traits\HelperTrait::returnFlag(1963) }}
                       </p>
                   </div>
                  <div class="FooterButtons">
                       <a href="mailto: {{ App\Http\Traits\HelperTrait::returnFlag(218) }}" class="emaillink text-white">Email: {{ App\Http\Traits\HelperTrait::returnFlag(218) }}</a> 
                   </div>
               </div>
           </div>
       </div>
       <div class="copyright">
           <div class="container">
               <div class="row">
                   <div class="col-md-12">
                       <div class="CopyrightMain">
                           <div class="copyrightfirsttext">
                               <p>{{ App\Http\Traits\HelperTrait::returnFlag(499) }}</p>
                           </div>

                       </div>
                   </div>
               </div>
           </div>
       </div>
   </footer>