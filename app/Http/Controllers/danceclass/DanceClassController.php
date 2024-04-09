<?php

namespace App\Http\Controllers\danceclass;

use App\Http\Controllers\Controller;
use App\Http\Requests;

use App\Models\DanceClass;
use Illuminate\Http\Request;
use Image;
use File;

class DanceClassController extends Controller
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
        $model = str_slug('danceclass','-');
        if(auth()->user()->permissions()->where('name','=','view-'.$model)->first()!= null) {
            $keyword = $request->get('search');
            $perPage = 25;

            if (!empty($keyword)) {
                $danceclass = DanceClass::where('name', 'LIKE', "%$keyword%")
                ->orWhere('description', 'LIKE', "%$keyword%")
                ->orWhere('experience', 'LIKE', "%$keyword%")
                ->paginate($perPage);
            } else {
                $danceclass = DanceClass::paginate($perPage);
            }

            return view('admin.dance-class.index', compact('danceclass'));
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
        $model = str_slug('danceclass','-');
        if(auth()->user()->permissions()->where('name','=','add-'.$model)->first()!= null) {
            return view('admin.dance-class.create');
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
      
        $model = str_slug('danceclass','-');
        if(auth()->user()->permissions()->where('name','=','add-'.$model)->first()!= null) {
            $this->validate($request, [
			'name' => 'required',
			'description' => 'required',
			'experience' => 'required'
		]);

            $danceclass = new DanceClass($request->all());

            if ($request->hasFile('image')) {

                $file = $request->file('image');

                //make sure yo have image folder inside your public
                $danceclass_path = 'uploads/danceclasss/';
                $fileName = $file->getClientOriginalName();
                $profileImage = date("Ymd").$fileName.".".$file->getClientOriginalExtension();

                Image::make($file)->save(public_path($danceclass_path) . DIRECTORY_SEPARATOR. $profileImage);

                $danceclass->image = $danceclass_path.$profileImage;
            }

            $danceclass->save();
            return redirect()->back()->with('message', 'DanceClass added!');
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
        $model = str_slug('danceclass','-');
        if(auth()->user()->permissions()->where('name','=','view-'.$model)->first()!= null) {
            $danceclass = DanceClass::findOrFail($id);
            return view('admin.dance-class.show', compact('danceclass'));
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
        $model = str_slug('danceclass','-');
        if(auth()->user()->permissions()->where('name','=','edit-'.$model)->first()!= null) {
            $danceclass = DanceClass::findOrFail($id);
            return view('admin.dance-class.edit', compact('danceclass'));
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
        $model = str_slug('danceclass','-');
        if(auth()->user()->permissions()->where('name','=','edit-'.$model)->first()!= null) {
            $this->validate($request, [
			'name' => 'required',
			'description' => 'required',
			'experience' => 'required'
		]);
            $requestData = $request->all();


        if ($request->hasFile('image')) {

            $danceclass = DanceClass::where('id', $id)->first();
            $image_path = public_path($danceclass->image);

            if(File::exists($image_path)) {
                File::delete($image_path);
            }

            $file = $request->file('image');
            $fileNameExt = $request->file('image')->getClientOriginalName();
            $fileNameForm = str_replace(' ', '_', $fileNameExt);
            $fileName = pathinfo($fileNameForm, PATHINFO_FILENAME);
            $fileExt = $request->file('image')->getClientOriginalExtension();
            $fileNameToStore = $fileName.'_'.time().'.'.$fileExt;
            $pathToStore = public_path('uploads/danceclasss/');
            Image::make($file)->save($pathToStore . DIRECTORY_SEPARATOR. $fileNameToStore);

             $requestData['image'] = 'uploads/danceclasss/'.$fileNameToStore;
        }


            $danceclass = DanceClass::findOrFail($id);
            $danceclass->update($requestData);
            return redirect()->back()->with('message', 'DanceClass updated!');
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
        $model = str_slug('danceclass','-');
        if(auth()->user()->permissions()->where('name','=','delete-'.$model)->first()!= null) {
            DanceClass::destroy($id);
            return redirect()->back()->with('message', 'DanceClass deleted!');
        }
        return response(view('403'), 403);

    }
}
