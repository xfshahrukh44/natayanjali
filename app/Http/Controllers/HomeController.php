<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Illuminate\Http\Request;
use App\inquiry;
use App\Models\{
    DanceClass,
    Faq,
    Gallery,
    Instructor,
    Video,
    Event,
    PlayList
};
use App\schedule;
use App\newsletter;
use App\post;
use App\banner;
use App\imagetable;
use DB;
use Mail;
use View;
use Session;
use App\Http\Helpers\UserSystemInfoHelper;
use App\Http\Traits\HelperTrait;
use Auth;
use App\Profile;
use App\Page;
use Carbon\Carbon;
use Image;
use App\Blog;

class HomeController extends Controller
{
    use HelperTrait;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    // use Helper;

    public function __construct()
    {
        //$this->middleware('auth');

        $logo = imagetable::select('img_path')
            ->where('table_name', '=', 'logo')
            ->first();

        $favicon = imagetable::select('img_path')
            ->where('table_name', '=', 'favicon')
            ->first();

        View()->share('logo', $logo);
        View()->share('favicon', $favicon);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */



    public function index()
    {
        $page = DB::table('pages')->where('id', 1)->first();
        $banners = DB::table('banners')->get();
        $section = DB::table('section')->where('page_id', 1)->get();
        $whatwedo = DB::table('what_we_dos')->get();
        $testnomials = DB::table('testimonials')->where('type',1)->get();
        $faqs = Faq::take(6)->get();
        $videos = Video::take(3)->get();
        $danceclass = DanceClass::all();
        return view('welcome', compact('page', 'banners', 'danceclass','faqs', 'page', 'section', 'whatwedo','videos','testnomials'));
    }
    public function classDesc($slug){
        $class = DanceClass::whereSlug($slug)->first();
        $testnomials = DB::table('testimonials')->get();

        return view('classDesc',compact('class','testnomials'));
    }
    public function bharataNatyam(){
        $section = DB::table('section')->where('page_id',3)->get();
        $page = DB::table('pages')->where('id', 3)->first();
        $testnomials = DB::table('testimonials')->get();
        return view('bharat_natayam', compact('page','section','testnomials'));


    }
    public function bharatNatyamPage(){
        $page  =  DB::table('pages')->where('id', 14)->first();
        $section  =  DB::table('section')->where('page_id', 14)->get();
        return view('bharatNatyamPage', compact('section','page'));
    }
    
    public function origin_of_Bharata_natyam(){
        $page  =  DB::table('pages')->where('id', 15)->first();
        return view('origin-of-Bharata-natyam', compact('page'));
    }
    
    public function dance_came_to_be_practiced(){
        $page  =  DB::table('pages')->where('id', 16)->first();
        return view('dance-came-to-be-practiced', compact('page'));
    }
    
    public function revival_of_bharata_natyam(){
        $page  =  DB::table('pages')->where('id', 17)->first();
        return view('revival-of-bharata-natyam', compact('page'));
    }
    
    
    public function testimonial(){
        $section = DB::table('section')->where('page_id',5)->get();
        $page = DB::table('pages')->where('id', 5)->first();
        $testnomials = DB::table('testimonials')->where('type',2)->get();
        return view('testimonial', compact('page','section','testnomials'));
    }

    public function schoolOfDance(){
        $section = DB::table('section')->where('page_id',4)->get();
        $page = DB::table('pages')->where('id', 4)->first();
        return view('schoolOfDance', compact('page','section'));

    }
    public function about()
    {
        $section = DB::table('section')->where('page_id',2)->get();
        $page = DB::table('pages')->where('id', 2)->first();
        $testnomials = DB::table('testimonials')->where('type',2)->get();

        return view('about', compact('page','section','testnomials'));

    }
    public function director()
    {
        $section = DB::table('section')->where('page_id',6)->get();
        $page = DB::table('pages')->where('id', 6)->first();
        $testnomials = DB::table('testimonials')->where('type',3)->get();
        $gallery = Gallery::all();
        $videos = Video::all();

        return view('director', compact('page','section','testnomials','videos','gallery'));

    }
    public function pressReviews()
    {
        $section = DB::table('section')->where('page_id',7)->get();
        $page = DB::table('pages')->where('id', 7)->first();
        $testnomials = DB::table('testimonials')->get();


        return view('pressReviews', compact('page','section','testnomials'));

    }
    public function performHistory()
    {
        $section = DB::table('section')->where('page_id',8)->get();
        $page = DB::table('pages')->where('id', 8)->first();
        $videos = Video::all();


        return view('performHistory', compact('page','section','videos'));

    }
    public function gallery(){
        $gallery = Gallery::all();
        $section = DB::table('section')->where('page_id',9)->get();
        $page = DB::table('pages')->where('id', 9)->first();
        $videos = Video::all();
        $instructor = Instructor::all();
        $playlist = PlayList::all();

        return view('gallery',compact('gallery','section','page','videos','instructor','playlist'));

    }
    public function biographyVideo()
    {
        $section = DB::table('section')->where('page_id',9)->get();
        $page = DB::table('pages')->where('id', 9)->first();
        $videos = Video::all();


        return view('biographyVideo', compact('page','section','videos','instructor'));

    }
    public function instructor()
    {
        $page = DB::table('pages')->where('id', 10)->first();


        $instructor = Instructor::all();

        return view('instructor', compact('instructor','page'));

    }
    public function classregister()
    {
        $page = DB::table('pages')->where('id',11)->first();
        $section = DB::table('section')->where('page_id',11)->get()
        ;
		return view('account.signup',compact('page','section'));
	}
    public function blogs()
    {
        $page = DB::table('pages')->where('id',12)->first();
        $section = DB::table('section')->where('page_id',12)->get();
        $blogs = DB::table('blogs')->get();
        $blogs_recent = DB::table('blogs')->get();
        $cat = DB::table('blog_categories')->get();
		return view('blog',compact('page','section','blogs','cat', 'blogs_recent'));
	}
	public function blogDetail($id){
	    $page = DB::table('pages')->where('id',12)->first();
        $section = DB::table('section')->where('page_id',12)->get();
	    $cat = DB::table('blog_categories')->get();
	    $blog = Blog::find($id);
	    $blogs_recent = DB::table('blogs')->get();
	    return view('blogDetail', compact('page','section','blog','cat', 'blogs_recent'));
	}
	
	public function blog_category($id){
	    $page = DB::table('pages')->where('id',12)->first();
        $section = DB::table('section')->where('page_id',12)->get();
	    $cat = DB::table('blog_categories')->get();
	    $blogs = DB::table('blogs')->where('blog_id', $id)->get();
	    $blogs_recent = DB::table('blogs')->get();
	    return view('blog', compact('page','section', 'blogs', 'cat', 'blogs_recent'));
	}
	
    public function schoolPolicy()
    {
        $page = DB::table('pages')->where('id',15)->first();
        $section = DB::table('section')->where('page_id',15)->get()
        ;
		return view('schoolPolicy',compact('page','section','danceclass','video'));
    }
    public function faq(){
        $page = DB::table('pages')->where('id',16)->first();
        $section = DB::table('section')->where('page_id',16)->get()
        ;
        $faqs = Faq::all();
		return view('faq',compact('page','section','faqs'));

    }
    public function classOffered()
    {
        $page = DB::table('pages')->where('id',13)->first();
        $section = DB::table('section')->where('page_id',13)->get()
        ;
        $tickets = Ticket::all();
        $danceclass = DanceClass::all();
        $faqs = Faq::all();
        $video = Video::inRandomOrder()->first();
        $instructor = Instructor::all();
		return view('classOffered',compact('page','section','danceclass','video','tickets','faqs','instructor'));
	}
    public function location(){
        $page = DB::table('pages')->where('id',14)->first();
        $section = DB::table('section')->where('page_id',14)->get()
        ;
        return view('location',compact('page'));
    }
    public function upcomingEvents(){
        $tickets = Ticket::all();
        $up_events =  Event::where('time','>=',Carbon::now()->toDateString())->orderBy('time','asc')->get();
        $all_events = Event::all();
        $last_events =  Event::where('time','<',Carbon::now()->toDateString())->orderBy('time','asc')->get();
        return view('event',compact('up_events','last_events','all_events','tickets'));



    }
    public function concluded(){
        $tickets = Ticket::all();
        $text = "Last";
        $description = 'Past Events';
        $events =  Event::whereDate('time','<',Carbon::now()->toDateString())->whereTime('time','<',Carbon::now()->toTimeString())->get();

        return view('event',compact('text','description','events','tickets'));



    }


    public function careerSubmit(Request $request)
    {


        inquiry::create($request->all());


        return response()->json(['message' => 'Thank you for contacting us. We will get back to you asap', 'status' => true]);
        return back();
    }
    
    
    
  
    public function newsletterSubmit(Request $request)
    {

        $is_email = newsletter::where('newsletter_email', $request->newsletter_email)->count();
        if ($is_email == 0) {
            $inquiry = new newsletter;
            $inquiry->newsletter_name = $request->newsletter_name;
            $inquiry->newsletter_email = $request->newsletter_email;
            $inquiry->save();
            return response()->json(['message' => 'Thank you for contacting us. We will get back to you asap', 'status' => true]);
        } else {
            return response()->json(['message' => 'Email already exists', 'status' => false]);
        }
    }

    public function updateContent(Request $request)
    {
        $id = $request->input('id');
        $keyword = $request->input('keyword');
        $htmlContent = $request->input('htmlContent');
        if ($keyword == 'page') {
            $update = DB::table('pages')
                ->where('id', $id)
                ->update(array('content' => $htmlContent));

            if ($update) {
                return response()->json(['message' => 'Content Updated Successfully', 'status' => true]);
            } else {
                return response()->json(['message' => 'Error Occurred', 'status' => false]);
            }
        } else if ($keyword == 'section') {
            $update = DB::table('section')
                ->where('id', $id)
                ->update(array('value' => $htmlContent));
            if ($update) {
                return response()->json(['message' => 'Content Updated Successfully', 'status' => true]);
            } else {
                return response()->json(['message' => 'Error Occurred', 'status' => false]);
            }
        }
    }
}
