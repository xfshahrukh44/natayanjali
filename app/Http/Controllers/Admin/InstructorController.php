<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests;

use App\Models\Instructor;
use Illuminate\Http\Request;
use Image;
use File;

class InstructorController extends Controller
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
        $model = str_slug('instructor','-');
        if(auth()->user()->permissions()->where('name','=','view-'.$model)->first()!= null) {
            $keyword = $request->get('search');
            $perPage = 25;

            if (!empty($keyword)) {
                $instructor = Instructor::where('name', 'LIKE', "%$keyword%")
                ->orWhere('post', 'LIKE', "%$keyword%")
                ->orWhere('description', 'LIKE', "%$keyword%")
                ->orWhere('image', 'LIKE', "%$keyword%")
                ->paginate($perPage);
            } else {
                $instructor = Instructor::paginate($perPage);
            }

            return view('admin.instructor.index', compact('instructor'));
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
        $model = str_slug('instructor','-');
        if(auth()->user()->permissions()->where('name','=','add-'.$model)->first()!= null) {
            return view('admin.instructor.create');
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
        $model = str_slug('instructor','-');
        if(auth()->user()->permissions()->where('name','=','add-'.$model)->first()!= null) {
            $this->validate($request, [
			'name' => 'required',
			'post' => 'required'
		]);

            $instructor = new Instructor($request->all());

            if ($request->hasFile('image')) {

                $file = $request->file('image');
                
                //make sure yo have image folder inside your public
                $instructor_path = 'uploads/instructors/';
                $fileName = $file->getClientOriginalName();
                $profileImage = date("Ymd").$fileName.".".$file->getClientOriginalExtension();

                Image::make($file)->save(public_path($instructor_path) . DIRECTORY_SEPARATOR. $profileImage);

                $instructor->image = $instructor_path.$profileImage;
            }
            
            $instructor->save();
            return redirect()->back()->with('message', 'Instructor added!');
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
        $model = str_slug('instructor','-');
        if(auth()->user()->permissions()->where('name','=','view-'.$model)->first()!= null) {
            $instructor = Instructor::findOrFail($id);
            return view('admin.instructor.show', compact('instructor'));
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
        $model = str_slug('instructor','-');
        if(auth()->user()->permissions()->where('name','=','edit-'.$model)->first()!= null) {
            $instructor = Instructor::findOrFail($id);
            return view('admin.instructor.edit', compact('instructor'));
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
        $model = str_slug('instructor','-');
        if(auth()->user()->permissions()->where('name','=','edit-'.$model)->first()!= null) {
            $this->validate($request, [
			'name' => 'required',
			'post' => 'required'
		]);
            $requestData = $request->all();
            

        if ($request->hasFile('image')) {
            
            $instructor = Instructor::where('id', $id)->first();
            $image_path = public_path($instructor->image); 
            
            if(File::exists($image_path)) {
                File::delete($image_path);
            }

            $file = $request->file('image');
            $fileNameExt = $request->file('image')->getClientOriginalName();
            $fileNameForm = str_replace(' ', '_', $fileNameExt);
            $fileName = pathinfo($fileNameForm, PATHINFO_FILENAME);
            $fileExt = $request->file('image')->getClientOriginalExtension();
            $fileNameToStore = $fileName.'_'.time().'.'.$fileExt;
            $pathToStore = public_path('uploads/instructors/');
            Image::make($file)->save($pathToStore . DIRECTORY_SEPARATOR. $fileNameToStore);

             $requestData['image'] = 'uploads/instructors/'.$fileNameToStore;               
        }


            $instructor = Instructor::findOrFail($id);
            $instructor->update($requestData);
            return redirect()->back()->with('message', 'Instructor updated!');
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
        $model = str_slug('instructor','-');
        if(auth()->user()->permissions()->where('name','=','delete-'.$model)->first()!= null) {
            Instructor::destroy($id);
            return redirect()->back()->with('message', 'Instructor deleted!');
        }
        return response(view('403'), 403);

    }
}
