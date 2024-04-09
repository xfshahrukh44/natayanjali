@extends('layouts.main')
@section('content')
    


            <!--</div>-->
            <div class="main-blog-page">
            <section class="blog-banner">
                <div class="container-fluid">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-xxl-7 col-xl-10 col-lg-12 col-md-12">
                            <div class="banner-inner">
                                {{--<div class="jorib">
                                    <a href="#" target="_blank">
                                        <div class="googlejo">
                                            <img src="https://demowebsitess.com/custom-html/malini-portal/images/blog/12.png" alt="">
                                        </div>
                                    </a>
                                    <a href="#" target="_blank">
                                        <div class="twitterjo">
                                            <img src="https://demowebsitess.com/custom-html/malini-portal/images/blog/13.png" alt="">
                                        </div>
                                    </a>
                                    <a href="#" target="_blank">
                                        <div class="facebookjo">
                                            <img src="https://demowebsitess.com/custom-html/malini-portal/images/blog/14.png" alt="">
                                        </div>
                                    </a>
                                    <a href="#" target="_blank">
                                        <div class="pinterestjo">
                                            <img src="https://demowebsitess.com/custom-html/malini-portal/images/blog/15.png" alt="">
                                        </div>
                                    </a>
                                </div>--}}
                                <div class="blog-banner-content">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="main-outer-blog">
    	        <div class="container">
            		<div class="row justify-content-center align-items-cenetr">
            			<div class="col-xxl-10 col-xl-11 col-lg-11 col-md-12">
            				<section class="blog-nav">
            					<div class="row">
            						<div class="col-lg-12">
            							<nav class="navbar navbar-expand-lg navbar-dark">
            								<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
            								<div class="collapse navbar-collapse" id="navbarSupportedContent">
            									<!--<ul class="navbar-nav me-auto mb-2 mb-lg-0">-->
            									<!--	<li class="nav-item"> <a class="nav-link active" aria-current="page" href="#">Title card</a> </li>-->
            									<!--	<li class="nav-item"> <a class="nav-link" href="#">Video</a> </li>-->
            									<!--	<li class="nav-item"> <a class="nav-link" href="#">Categories</a> </li>-->
            									<!--	<li class="nav-item"> <a class="nav-link" href="#">Latest Post</a> </li>-->
            									<!--	<li class="nav-item"> <a class="nav-link" href="#">Popular Post</a> </li>-->
            									<!--	<li class="nav-item"> <a class="nav-link" href="#">Archives</a> </li>-->
            									<!--</ul>-->
            									<form class="d-flex">
            										<input class="form-control" type="search" placeholder="Search Somethings.." aria-label="Search"> 
        										</form>
            								</div>
            							</nav>
            						</div>
            					</div>
            				</section>
            				<section class="blog-list">
            					<div class="blog-outer">
            						<div class="row">
            							<div class="col-lg-8">
            							    @foreach($blogs as $blog)
            							    	<div class="blog-list-1">
            									<div class="blog-img">
            										<figure style="background-image:url({{asset($blog->image)}})"></figure>
            										<div class="date">
            										    @php
            										        $date = \Carbon\Carbon::parse($blog->created_at);
            										    @endphp
            											<a href="javascript:;" rel="bookmark"> <span>
                                                               {{$date->format('d')}}
                                                                </span> <span>
                                                                         {{$date->format('M')}}
                                                                </span> <span>
                                                                       {{$date->format('Y')}}
                                                                </span> </a>
            										</div>
            									</div>
            									<div class="blog-topic-content">
            										<h2>{{$blog->name}}</h2>
            										<div class="jomore">
            											<div class="posted-by"> 
            											    {!!$blog->short_detail!!}
            											</div>
            											
            											<div class="read-More"> <img src="{{asset($blog->right_image)}}" class="img-fluid" alt=""> <a target="" href="{{ route('blogDetail', ['id' => $blog->id, 'name' => preg_replace('/[^A-Za-z0-9\-]/', '', strtolower(str_replace(' ', '-', $blog->name)))]) }}" class="btn custom-btn-2">Read More</a> </div>
            										</div>
            									</div>
            								</div>
            							    @endforeach
            							
            							{{--<div class="blog-list-1">
            									<div class="blog-img">
            										<figure> <img src="https://demowebsitess.com/custom-html/malini-portal/images/blog/3.jpg" class="img-fluid" alt=""> </figure>
            										<div class="date">
            											<a href="javascript:;" rel="bookmark"> <span>
                                                                    14
                                                                </span> <span>
                                                                    Apr
                                                                </span> <span>
                                                                    2016
                                                                </span> </a>
            										</div>
            									</div>
            									<div class="blog-topic-content">
            										<h2>Demo post with formatted</h2>
            										<div class="jomore">
            											<div class="posted-by"> <span class="author1">Posted by : BTemplates</span> <a class="comment-link" href="javascript:;">
                                                                    3 Comments</a>
            												<div class="categ">Tag : <a href="javascript:;" rel="tag">Blogger,</a> <a href="javascript:;" rel="tag">Images,</a> <a href="javascript:;" rel="tag">Tag</a> </div>
            											</div>
            											<div class="read-More"> <img src="https://demowebsitess.com/custom-html/malini-portal/images/blog/9.png" class="img-fluid" alt=""> <a href="#" class="btn custom-btn-2">Read More</a> </div>
            										</div>
            									</div>
            								</div>
            								<div class="blog-list-1">
            									<div class="blog-img">
            										<figure> <img src="https://demowebsitess.com/custom-html/malini-portal/images/blog/4.jpg" class="img-fluid" alt=""> </figure>
            										<div class="date">
            											<a href="javascript:;" rel="bookmark"> <span>
                                                                    14
                                                                </span> <span>
                                                                    Apr
                                                                </span> <span>
                                                                    2016
                                                                </span> </a>
            										</div>
            									</div>
            									<div class="blog-topic-content">
            										<h2>Demo post with formatted</h2>
            										<div class="jomore">
            											<div class="posted-by"> <span class="author1">Posted by : BTemplates</span> <a class="comment-link" href="javascript:;">
                                                                    3 Comments</a>
            												<div class="categ">Tag : <a href="javascript:;" rel="tag">Blogger,</a> <a href="javascript:;" rel="tag">Images,</a> <a href="javascript:;" rel="tag">Tag</a> </div>
            											</div>
            											<div class="read-More"> <img src="https://demowebsitess.com/custom-html/malini-portal/images/blog/9.png" class="img-fluid" alt=""> <a href="#" class="btn custom-btn-2">Read More</a> </div>
            										</div>
            									</div>
            								</div>
            								<div class="blog-list-1">
            									<div class="blog-img">
            										<figure> <img src="https://demowebsitess.com/custom-html/malini-portal/images/blog/5.jpg" class="img-fluid" alt=""> </figure>
            										<div class="date">
            											<a href="javascript:;" rel="bookmark"> <span>
                                                                    14
                                                                </span> <span>
                                                                    Apr
                                                                </span> <span>
                                                                    2016
                                                                </span> </a>
            										</div>
            									</div>
            									<div class="blog-topic-content">
            										<h2>Demo post with formatted</h2>
            										<div class="jomore">
            											<div class="posted-by"> <span class="author1">Posted by : BTemplates</span> <a class="comment-link" href="javascript:;">
                                                                    3 Comments</a>
            												<div class="categ">Tag : <a href="javascript:;" rel="tag">Blogger,</a> <a href="javascript:;" rel="tag">Images,</a> <a href="javascript:;" rel="tag">Tag</a> </div>
            											</div>
            											<div class="read-More"> <img src="https://demowebsitess.com/custom-html/malini-portal/images/blog/9.png" class="img-fluid" alt=""> <a href="#" class="btn custom-btn-2">Read More</a> </div>
            										</div>
            									</div>
            								</div>
            								<div class="blog-list-1">
            									<div class="blog-img">
            										<figure> <img src="https://demowebsitess.com/custom-html/malini-portal/images/blog/6.jpg" class="img-fluid" alt=""> </figure>
            										<div class="date">
            											<a href="javascript:;" rel="bookmark"> <span>
                                                                    14
                                                                </span> <span>
                                                                    Apr
                                                                </span> <span>
                                                                    2016
                                                                </span> </a>
            										</div>
            									</div>
            									<div class="blog-topic-content">
            										<h2>Demo post with formatted</h2>
            										<div class="jomore">
            											<div class="posted-by"> <span class="author1">Posted by : BTemplates</span> <a class="comment-link" href="javascript:;">
                                                                    3 Comments</a>
            												<div class="categ">Tag : <a href="javascript:;" rel="tag">Blogger,</a> <a href="javascript:;" rel="tag">Images,</a> <a href="javascript:;" rel="tag">Tag</a> </div>
            											</div>
            											<div class="read-More"> <img src="https://demowebsitess.com/custom-html/malini-portal/images/blog/9.png" class="img-fluid" alt=""> <a href="#" class="btn custom-btn-2">Read More</a> </div>
            										</div>
            									</div>
            								</div>
            								<div class="blog-list-1">
            									<div class="blog-img">
            										<figure> <img src="https://demowebsitess.com/custom-html/malini-portal/images/blog/3.jpg" class="img-fluid" alt=""> </figure>
            										<div class="date">
            											<a href="javascript:;" rel="bookmark"> <span>
                                                                    14
                                                                </span> <span>
                                                                    Apr
                                                                </span> <span>
                                                                    2016
                                                                </span> </a>
            										</div>
            									</div>
            									<div class="blog-topic-content">
            										<h2>Demo post with formatted</h2>
            										<div class="jomore">
            											<div class="posted-by"> <span class="author1">Posted by : BTemplates</span> <a class="comment-link" href="javascript:;">
                                                                    3 Comments</a>
            												<div class="categ">Tag : <a href="javascript:;" rel="tag">Blogger,</a> <a href="javascript:;" rel="tag">Images,</a> <a href="javascript:;" rel="tag">Tag</a> </div>
            											</div>
            											<div class="read-More"> <img src="https://demowebsitess.com/custom-html/malini-portal/images/blog/9.png" class="img-fluid" alt=""> <a href="#" class="btn custom-btn-2">Read More</a> </div>
            										</div>
            									</div>
            								</div>--}}
            							</div>
            							<div class="col-lg-4">
            							    <div class="main-right-popular-post">
            									<div class="blog-topic-content right-side-blog">
            										<h2>CATEGORIES</h2>
            										@foreach($cat as $item)
                										<div class="jomore">
                									
                											<div class="posted-by"> <a class="comment-link" href="{{ route('blog-category', ['id' => $item->id, 'name' => preg_replace('/[^A-Za-z0-9\-]/', '', strtolower(str_replace(' ', '-', $item->name)))]) }}">{{$item->name}}</a> </div>
                										</div>
            										@endforeach
            									</div>
            								</div>
            								<div class="main-right-popular-post my-3">
            									<div class="blog-topic-content right-side-blog">
            										<h2>RECENT POSTS</h2>
            										@foreach($blogs_recent as $item)
                										<div class="jomore">
                											<div class="read-More">
                												<a href="{{ route('blogDetail', ['id' => $item->id, 'name' => preg_replace('/[^A-Za-z0-9\-]/', '', strtolower(str_replace(' ', '-', $item->name)))]) }}"> <img src="{{asset($item->image)}}" class="img-fluid" alt=""> </a>
                											</div>
                											<div class="posted-by"> <a class="comment-link" href="{{ route('blogDetail', ['id' => $item->id, 'name' => preg_replace('/[^A-Za-z0-9\-]/', '', strtolower(str_replace(' ', '-', $item->name)))]) }}">{{$item->name}}</a> </div>
                										</div>
            										@endforeach
            									</div>
            								</div>
            								
            							
            								<div class="main-right-popular-post my-3">
            									<div class="blog-topic-content right-side-blog">
            										<h2>POPULAR POSTS</h2>
            										@foreach($blogs_recent as $item)
                										<div class="jomore">
                											<div class="read-More">
                												<a href="{{ route('blogDetail', ['id' => $item->id, 'name' => preg_replace('/[^A-Za-z0-9\-]/', '', strtolower(str_replace(' ', '-', $item->name)))]) }}"> <img src="{{asset($item->image)}}" class="img-fluid" alt=""> </a>
                											</div>
                											<div class="posted-by"> <a class="comment-link" href="{{ route('blogDetail', ['id' => $item->id, 'name' => preg_replace('/[^A-Za-z0-9\-]/', '', strtolower(str_replace(' ', '-', $item->name)))]) }}">{{$item->name}}</a> </div>
                										</div>
            										@endforeach
            									</div>
            								</div>
            								<!--<div class="main-right-popular-post my-3">-->
            								<!--	<div class="blog-topic-content right-side-blog">-->
            								<!--		<div class="jomore twitter-div">-->
            								<!--			<a class="" href="javascript:;">-->
            								<!--				<div class="twitter-btn"> <span><img src="images/twitter.svg" alt=""></span> <span class="label" id="l">Follow <b>@btemplates</b></span> </div>-->
            								<!--			</a>-->
            								<!--		</div>-->
            								<!--	</div>-->
            								<!--</div>-->
            								<!--<div class="main-right-popular-post btemplates-div">-->
            								<!--	<div class="blog-topic-content right-side-blog">-->
            								<!--		<h2>BTEMPLATES.COM</h2>-->
            								<!--		<div class="bte-ul">-->
            								<!--			<ul>-->
            								<!--				<li><a href="javascript:;">Premium</a></li>-->
            								<!--				<li><a href="javascript:;">2 Columns</a></li>-->
            								<!--				<li><a href="javascript:;">3 Columns</a></li>-->
            								<!--				<li><a href="javascript:;">Responsive</a></li>-->
            								<!--				<li><a href="javascript:;">Adapted from Wordpress</a></li>-->
            								<!--				<li><a href="javascript:;">Magazine</a></li>-->
            								<!--				<li><a href="javascript:;">Gallery</a></li>-->
            								<!--				<li><a href="javascript:;">Cute</a></li>-->
            								<!--				<li><a href="javascript:;">Anime</a></li>-->
            								<!--				<li><a href="javascript:;">Girly</a></li>-->
            								<!--			</ul>-->
            								<!--		</div>-->
            								<!--	</div>-->
            								<!--</div>-->
            								<!--<div class="main-right-popular-post btemplates-div">-->
            								<!--	<div class="blog-topic-content right-side-blog">-->
            								<!--		<h2>Blogroll</h2>-->
            								<!--		<div class="bte-ul">-->
            								<!--			<ul>-->
            								<!--				<li><a href="javascript:;">BTemplates</a></li>-->
            								<!--				<li><a href="javascript:;">Djogzs</a></li>-->
            								<!--				<li><a href="javascript:;">Blogger templates search engine</a></li>-->
            								<!--				<li><a href="javascript:;">BTemplates Blog</a></li>-->
            								<!--				<li><a href="javascript:;">Blog and Web</a></li>-->
            								<!--			</ul>-->
            								<!--		</div>-->
            								<!--	</div>-->
            								<!--</div>-->
            								<!--<div class="main-right-popular-post btemplates-div">-->
            								<!--	<div class="blog-topic-content right-side-blog">-->
            								<!--		<h2>LABELS</h2>-->
            								<!--		<div class="bte-ul">-->
            								<!--			<ul>-->
            								<!--				<li><a href="javascript:;">Blogger</a></li>-->
            								<!--				<li><a href="javascript:;">BTemplates</a></li>-->
            								<!--				<li><a href="javascript:;">Demo</a></li>-->
            								<!--				<li><a href="javascript:;">Gallery</a></li>-->
            								<!--				<li><a href="javascript:;">Images</a></li>-->
            								<!--				<li><a href="javascript:;">Tag</a></li>-->
            								<!--			</ul>-->
            								<!--		</div>-->
            								<!--	</div>-->
            								<!--</div>-->
            							</div>
            						</div>
            					</div>
            					{{--<div class="blog-footer">
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <div class="main-right-popular-post btemplates-div">
                                                <div class="blog-topic-content right-side-blog">
                                                    <h2>BLOG CATEGORIES</h2>
                                                    <div class="bte-ul">
                                                        
                                                        <ul>
                                                            <li><a href="javascript:;">
                                                                    Blog Archive
                                                                </a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="main-right-popular-post btemplates-div">
                                                <div class="blog-topic-content right-side-blog">
                                                    <h2>BLOG ARCHIVE</h2>
                                                    <div class="bte-ul">
                                                        <ul>
                                                            <li><a href="javascript:;">
                                                                    Blog Archive
                                                                </a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="main-right-popular-post btemplates-div">
                                                <div class="blog-topic-content right-side-blog">
                                                    <h2>LABELS</h2>
                                                    <div class="bte-ul">
                                                        <ul>
                                                            <li><a href="javascript:;">Blogger</a></li>
                                                            <li><a href="javascript:;">BTemplates</a></li>
                                                            <li><a href="javascript:;">Demo</a></li>
                                                            <li><a href="javascript:;">Gallery</a></li>
                                                            <li><a href="javascript:;">Images</a></li>
                                                            <li><a href="javascript:;">Tag</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="main-right-popular-post btemplates-div">
                                                <div class="blog-topic-content right-side-blog">
                                                    <h2>ABOUT</h2>
                                                    <div class="bte-ul">
                                                        <ul>
                                                            <li>
                                                                <span class="d-block footer-about">
                                                                    Mel putent quaeque an, ut postea melius denique sit.
                                                                    Officiis sensibus at mea, sea at labitur deserunt. Eam dicam
                                                                    congue soluta ut.
                                                                </span>
                                                                <a href="#">Blogger Templates</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>--}}
            					<div class="fleft">
            						<p></p>
            					</div>
            				</section>
            			</div>
            		</div>
            	</div>
            </div>
            </div>
    <!--    </div>-->
    <!--</section>-->
    
    <!-- section-4 html end  -->
@endsection
@section('css')
<style>

.main-blog-page {
    background: #FAD4CC 0% 0% no-repeat padding-box;
}
.blog-banner {
    background-image: url('{{asset("images/blogbanner.jpg")}}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 500px;
    display: flex;
    align-items: center;
    margin-bottom: -60px;
}
.jorib {
    display: flex;
    align-items: baseline;
    justify-content: end;
    padding-top: 2rem;
    position: relative;
    z-index: 0;
    top: -170px;
}
.jorib a {
    background: #89031b;
    height: 35px;
    width: 38px;
    margin: 0 3px;
    box-shadow: 0px 2px 0px rgba(221, 221, 221, 0.6), inset 0px 0px 5px rgba(195, 221, 220, 0.5);
    border: 1px solid #8e1293;
    outline: 1px solid #8e1293;
    border-radius: 4px;
}
.blog-banner-content {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    align-items: center;

}
.blog-banner-content h1 {
    color: white;
    /*font-family: 'Sacramento';*/
    font-size: 3.4rem;
}
.blog-banner-content span {
    font-size: 25px;
    color: #FED569;
    font-weight: 200;
    /*font-family: 'Poppins', sans-serif;*/
}
    .blogBanner{
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        height: 500px;
        display: flex;
        align-items: center;
        margin-bottom: -60px;
    }
.blog-nav nav {
    width: 1014px;
    margin: auto;
    /* height: 50px; */
    -moz-transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    text-transform: uppercase;
    position: relative;
    background: #89031b;
    border: 1px solid #dd3055;
    color: #fff;
    box-shadow: inset 0px 0px 10px RGBA(0, 0, 0, 0.4), 0px 5px 0px RGBA(0, 0, 0, 0.4);
    padding: 0;
}

.blog-nav nav input {
    background: transparent;
    background: #dd3055 url(https://demowebsitess.com/custom-html/malini-portal/images/blog/search.png)no-repeat center left;
    font-size: 14px;
    background-position-y: 9px;
    color: #fff;
    width: 0;
    padding: 14px 0px 14px 35px;
    z-index: 9;
    border: 1px solid #803530;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    margin-bottom: 0px;
    /* position: absolute; */
    /* top: 0px; */
    /* right: 0px; */
    height: 100%;
}

.blog-nav nav li {
    padding: 15px;
    -moz-transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.blog-nav nav li a {
    color: #fff !important;
    padding: 0 10px;
    line-height: 15px;
    font-size: 12px;
    display: block;
    text-decoration: none;
    -moz-transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.1);
}

.blog-nav nav li:hover {
    background: #dd3055;
    box-shadow: 0px 3px 0px rgba(0, 0, 0, 0.2), inset 0px 0px 15px rgba(0, 0, 0, 0.2);
}

.blog-outer {
    padding: 20px 10px 20px 10px;
    background: white;
    margin: auto;
    border: 1px solid #dd3055;
    border-top: 0px;
}

.blog-img {
     max-width: 300px; 
    /* height: 165px; */
    overflow: hidden;
    position: relative;
    border: 1px solid #dd3055;
    outline: 1px solid #dd3055;
    background: #666 url(https://3.bp.blogspot.com/-vuUHJZE602I/Vw9x4Xwwn8I/AAAAAAAAAyA/_rKVQMFY6jw/s000/noimagebyjohanes.png) no-repeat center center;
    border-radius: 2px;
    /* margin-right: 10px; */
    width: 100%;
}

.blog-list-1 {
    display: flex;
    padding: 5px 5px;
    margin-bottom: 15px;
    width: 100%;
    border: 1px dashed #dd3055;
    gap: 9px;
}

.date {
    position: absolute;
    top: 10px;
    left: 10px;
}

.date a {
    display: flex;
    align-items: baseline;
    gap: 1px;
}

.date span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    text-align: center;
    float: left;
    margin-right: 3px;
    margin-left: 3px;
    text-transform: uppercase;
    color: #fff;
    background: #dd3055;
    width: 32px;
    height: 32px;
    border-radius: 50px;
    line-height: 30px;
    box-shadow: inset 2px 2px 0px rgba(0, 0, 0, 0.1), 2px 2px 0px rgba(0, 0, 0, 0.2);
    font-weight: 600;
}

.blog-topic-content {
    width: 100%;
}

.blog-topic-content h2 {
    text-align: left;
    color: #fafafa;
    padding: 7px;
    /* position: relative; */
    /*font-family: 'Segoe UI Light', 'Open Sans', Verdana, Arial, Helvetica, sans-serif;*/
    font-weight: 200;
    font-size: 18pt;
    letter-spacing: 0.01em;
    line-height: 21pt;
    background: #89031b;
    /* width: 100%; */
    /* max-width: 286px; */
    border: 1px solid #dd3055;
    margin-left: -1px;
    box-shadow: inset 0px 0px 10px #c950ce, 0px 5px 0px #dd3055;
    z-index: 20;
    /* height: 26px; */
    overflow: hidden;
}

.jomore {
    min-height: 72px;
    font-size: 15px;
    /* position: relative; */
    /* font-family: 'Segoe UI Light', 'Open Sans', Verdana, Arial, Helvetica, sans-serif; */
    font-weight: 200;
    letter-spacing: 0.01em;
    font-smooth: always;
    /* max-width: 280px; */
    background: #89031b;
    /* float: left; */
    width: 100%;
    border: 1px solid #dd3055;
    color: #fff;
    padding: 10px;
    box-shadow: inset 0px 0px 10px #dd3055, 0px 5px 0px #dd3055;
    display: flex;
    align-items: flex-start;
    height: 101px;
    justify-content: space-between;
}

.posted-by {
    width: 70%;
}

span.author1 {
    display: block;
    font-size: 17px;
}

.jomore a {
    text-decoration: none;
}

.posted-by a {
    color: white;
    font-size: 17px;
}

.categ {
    font-size: 17px;
}

.read-More {
    text-align: center;
    width: 27%;
    position: relative;
    top: -15px;
}
.read-More .btn {
    margin: 20px 0 0 0;
    border-radius: 5px;
    padding: 2px 0px;
    background: #dd3055;
    border: 1px solid #803530;
    font-weight: 400 !important;
}

.custom-btn-2 {
    /* background: #F48253 0% 0% no-repeat padding-box; */
    /* border: 2px solid #F48253; */
    /* border-radius: 30px; */
    color: white !important;
    width: 100%;
    /* padding: 12px 0; */
    margin-top: 21px;
    text-transform: uppercase;
    font: normal normal 600 12px/12px  !important;
    letter-spacing: 0px;
    color: #FFFFFF;
    text-transform: uppercase;
}
.blog-topic-content.right-side-blog .jomore.twitter-div {
    padding-top: 1rem;
    padding-bottom: 1rem;
}
.blog-topic-content.right-side-blog .jomore {
    justify-content: space-between;
    align-items: center;
    border: none;
    box-shadow: none;
    border-bottom: 1px dashed black;
    padding: 55px 15px;
}
.twitter-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: aqua;
    box-sizing: border-box;
    padding: 1px 12px 1px 12px;
    background-color: #1d9bf0;
    color: #fff;
    border-radius: 9999px;
    font-weight: 500;
    cursor: pointer;
}
.bte-ul {
    overflow: hidden;
    margin-bottom: 16px;
    padding: 20px;
    font-weight: 300;
    font-size: 8pt;
    letter-spacing: 0.02em;
    line-height: 20px;
    background: #89031b;
    border: 1px solid #dd3055;
    color: #fff;
    box-shadow: inset 0px 0px 10px #dd3055, 0px 5px 0px #dd3055;
}
.bte-ul ul {
    line-height: 2.0;
    list-style: none;
    padding: 0;
    margin: 0;
}
.bte-ul ul li {
    border-bottom: 1px dashed #8e1293;
}
.bte-ul ul li a {
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    font-size: 12pt;
    letter-spacing: 0.01em;
    line-height: 24pt;
    font-smooth: always;
    color: #ffffff;
    font-weight: 200;
    letter-spacing: 0.01em;
    text-decoration: none;
}
.blog-list-1:hover figure img {
    transform: scale(1.2);
    transition: all ease .5s;
}
div#navbarSupportedContent {
    justify-content: space-between;
}
.blog-nav nav input:hover {
    width: 200px;
}
.blog-footer {
    background: aqua;
    color: black;
    background: #fff url(https://demowebsitess.com/custom-html/malini-portal/images/titan.jpg) no-repeat bottom center;
    margin: auto;
    -moz-transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    border-top: 0px;
    border: 1px solid #8e1293;
    margin-top: 1px;
    padding: 30px 30px 114px;
}
.fleft {
    text-align: center;
    margin: auto;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #fff;
    font-size: 10pt;
    text-transform: uppercase;
    background: #89031b;
    outline: 1px solid #8e1293;
    font-weight: 200;
    letter-spacing: 0.01em;
}
.fleft p {
    margin: 0;
}

.fleft a {
    color: #fff;
    font-size: 10pt;
    text-decoration: none;
}
.blog-topic-content.right-side-blog .read-More img {
    border-radius: 8px;
    filter: grayscale(1);
}
.blog-topic-content.right-side-blog .read-More {
    position: unset;
    overflow: hidden;
}
.blog-topic-content.right-side-blog .read-More:hover img {
    filter: unset;
}
.blog-topic-content.right-side-blog .posted-by a:hover {
    color: #FFFF55;
    -webkit-transition: all 0.1s ease-in-out;
    -moz-transition: all 0.1s ease-in-out;
}

.blog-img figure{
    background-size: cover;
    height: 100%;
    background-position: center;
}
.posted-by p {
    margin: 0;
}

</style>
@endsection

@section('js')
    <script type="text/javascript"></script>
@endsection
