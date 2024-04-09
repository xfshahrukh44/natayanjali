<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\BlogCategory;
use App\Blog;
use Illuminate\Http\Request;
use Image;
use File;

class BlogController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\View\View
     */

    public function index(Request $request)
    {
        $model = str_slug('blog','-');
        if(auth()->user()->permissions()->where('name','=','view-'.$model)->first()!= null) {
            $keyword = $request->get('search');
            $perPage = 25;

            if (!empty($keyword)) {
                $blog = Blog::where('name', 'LIKE', "%$keyword%")
                ->orWhere('short_detail', 'LIKE', "%$keyword%")
                ->orWhere('detail', 'LIKE', "%$keyword%")
                ->orWhere('image', 'LIKE', "%$keyword%")
                ->paginate($perPage);
            } else {
                $blog = Blog::paginate($perPage);
            }

            return view('admin.blog.index', compact('blog'));
        }
        return response(view('403'), 403);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        $model = str_slug('blog','-');
        if(auth()->user()->permissions()->where('name','=','add-'.$model)->first()!= null) {
            $category = BlogCategory::all();
            return view('admin.blog.create',compact('category'));
        }
        return response(view('403'), 403);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function store(Request $request)
    {
        $model = str_slug('blog','-');
        if(auth()->user()->permissions()->where('name','=','add-'.$model)->first()!= null) {
            $this->validate($request, [
			'name' => 'required',
			'short_detail' => 'required',
			'image' => 'required',
			'blog_link' => 'required'
		]);
            $blog = new blog;
            $blog->name = $request->input('name');   
            $blog->short_detail = $request->input('short_detail'); 
            $blog->detail = $request->input('detail'); 
             $blog->blog_id = $request->input('blog_id');     
            $blog->blog_link = $request->input('blog_link');
            $destination_path = 'uploads/blogs/';
            if ($request->hasFile('image')) {
                $file = $request->file('image');
                $fileName = $file->getClientOriginalName();
                $profileImage = date("Ymd").$fileName.".".$file->getClientOriginalExtension();
                Image::make($file)->save(public_path($destination_path) . DIRECTORY_SEPARATOR. $profileImage);
                $blog->image = $destination_path.$profileImage;
            }
            if ($request->hasFile('right_image')) {
                $file = $request->file('right_image');
                $fileName = $file->getClientOriginalName();
                $profileImage = date("Ymd").$fileName.".".$file->getClientOriginalExtension();
                Image::make($file)->save(public_path($destination_path) . DIRECTORY_SEPARATOR. $profileImage);
                $blog->right_image = $destination_path.$profileImage;
            }
             $blog->save();

            return redirect('admin/blog')->with('message', 'Blog added!');
        }
        return response(view('403'), 403);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     *
     * @return \Illuminate\View\View
     */
    public function show($id)
    {
        $model = str_slug('blog','-');
        if(auth()->user()->permissions()->where('name','=','view-'.$model)->first()!= null) {
            $blog = Blog::findOrFail($id);
            return view('admin.blog.show', compact('blog'));
        }
        return response(view('403'), 403);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     *
     * @return \Illuminate\View\View
     */
    public function edit($id)
    {
        $model = str_slug('blog','-');
        if(auth()->user()->permissions()->where('name','=','edit-'.$model)->first()!= null) {
            $blog = Blog::findOrFail($id);
            $category = BlogCategory::all();
            return view('admin.blog.edit', compact('blog','category'));
        }
        return response(view('403'), 403);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param  int  $id
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function update(Request $request, $id)
    {
        $model = str_slug('blog','-');
        if(auth()->user()->permissions()->where('name','=','edit-'.$model)->first()!= null) {
            $this->validate($request, [
			'name' => 'required',
			'short_detail' => 'required'
		]);
            $requestData = $request->all();
            
            
            

        if ($request->hasFile('image')) {
            
            $blog = blog::where('id', $id)->first();
            $image_path = public_path($blog->image); 
            
            if(File::exists($image_path)) {
                File::delete($image_path);
            }

            $file = $request->file('image');
            $fileNameExt = $request->file('image')->getClientOriginalName();
            $fileNameForm = str_replace(' ', '_', $fileNameExt);
            $fileName = pathinfo($fileNameForm, PATHINFO_FILENAME);
            $fileExt = $request->file('image')->getClientOriginalExtension();
            $fileNameToStore = $fileName.'_'.time().'.'.$fileExt;
            $pathToStore = public_path('uploads/blogs/');
            Image::make($file)->save($pathToStore . DIRECTORY_SEPARATOR. $fileNameToStore);

             $requestData['image'] = 'uploads/blogs/'.$fileNameToStore;               
        }
          if ($request->hasFile('right_image')) {
            
            $blog = blog::where('id', $id)->first();
            $image_path = public_path($blog->blog_link); 
            
            if(File::exists($image_path)) {
                File::delete($image_path);
            }

            $file = $request->file('right_image');
            $fileNameExt = $request->file('right_image')->getClientOriginalName();
            $fileNameForm = str_replace(' ', '_', $fileNameExt);
            $fileName = pathinfo($fileNameForm, PATHINFO_FILENAME);
            $fileExt = $request->file('right_image')->getClientOriginalExtension();
            $fileNameToStore = $fileName.'_'.time().'.'.$fileExt;
            $pathToStore = public_path('uploads/blogs/');
            Image::make($file)->save($pathToStore . DIRECTORY_SEPARATOR. $fileNameToStore);

             $requestData['right_image'] = 'uploads/blogs/'.$fileNameToStore;               
        }


            $blog = Blog::findOrFail($id);
            $blog->update($requestData);

            return redirect('admin/blog')->with('message', 'Blog updated!');
        }
        return response(view('403'), 403);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function destroy($id)
    {
        $model = str_slug('blog','-');
        if(auth()->user()->permissions()->where('name','=','delete-'.$model)->first()!= null) {
            Blog::destroy($id);

            return redirect('admin/blog')->with('flash_message', 'Blog deleted!');
        }
        return response(view('403'), 403);

    }
}
