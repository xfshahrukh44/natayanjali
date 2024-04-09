<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests;

use App\Models\WhatWeDo;
use Illuminate\Http\Request;
use Image;
use File;

class WhatWeDoController extends Controller
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
        $model = str_slug('whatwedo','-');
        if(auth()->user()->permissions()->where('name','=','view-'.$model)->first()!= null) {
            $keyword = $request->get('search');
            $perPage = 25;

            if (!empty($keyword)) {
                $whatwedo = WhatWeDo::where('name', 'LIKE', "%$keyword%")
                ->paginate($perPage);
            } else {
                $whatwedo = WhatWeDo::paginate($perPage);
            }

            return view('admin.what-we-do.index', compact('whatwedo'));
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
        $model = str_slug('whatwedo','-');
        if(auth()->user()->permissions()->where('name','=','add-'.$model)->first()!= null) {
            return view('admin.what-we-do.create');
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
        $model = str_slug('whatwedo','-');
        if(auth()->user()->permissions()->where('name','=','add-'.$model)->first()!= null) {
            

            $whatwedo = new WhatWeDo($request->all());

            if ($request->hasFile('image')) {

                $file = $request->file('image');
                
                //make sure yo have image folder inside your public
                $whatwedo_path = 'uploads/whatwedos/';
                $fileName = $file->getClientOriginalName();
                $profileImage = date("Ymd").$fileName.".".$file->getClientOriginalExtension();

                Image::make($file)->save(public_path($whatwedo_path) . DIRECTORY_SEPARATOR. $profileImage);

                $whatwedo->image = $whatwedo_path.$profileImage;
            }
            
            $whatwedo->save();
            return redirect()->back()->with('message', 'WhatWeDo added!');
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
        $model = str_slug('whatwedo','-');
        if(auth()->user()->permissions()->where('name','=','view-'.$model)->first()!= null) {
            $whatwedo = WhatWeDo::findOrFail($id);
            return view('admin.what-we-do.show', compact('whatwedo'));
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
        $model = str_slug('whatwedo','-');
        if(auth()->user()->permissions()->where('name','=','edit-'.$model)->first()!= null) {
            $whatwedo = WhatWeDo::findOrFail($id);
            return view('admin.what-we-do.edit', compact('whatwedo'));
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
        $model = str_slug('whatwedo','-');
        if(auth()->user()->permissions()->where('name','=','edit-'.$model)->first()!= null) {
            
            $requestData = $request->all();
            

        if ($request->hasFile('image')) {
            
            $whatwedo = WhatWeDo::where('id', $id)->first();
            $image_path = public_path($whatwedo->image); 
            
            if(File::exists($image_path)) {
                File::delete($image_path);
            }

            $file = $request->file('image');
            $fileNameExt = $request->file('image')->getClientOriginalName();
            $fileNameForm = str_replace(' ', '_', $fileNameExt);
            $fileName = pathinfo($fileNameForm, PATHINFO_FILENAME);
            $fileExt = $request->file('image')->getClientOriginalExtension();
            $fileNameToStore = $fileName.'_'.time().'.'.$fileExt;
            $pathToStore = public_path('uploads/whatwedos/');
            Image::make($file)->save($pathToStore . DIRECTORY_SEPARATOR. $fileNameToStore);

             $requestData['image'] = 'uploads/whatwedos/'.$fileNameToStore;               
        }


            $whatwedo = WhatWeDo::findOrFail($id);
            $whatwedo->update($requestData);
            return redirect()->back()->with('message', 'WhatWeDo updated!');
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
        $model = str_slug('whatwedo','-');
        if(auth()->user()->permissions()->where('name','=','delete-'.$model)->first()!= null) {
            WhatWeDo::destroy($id);
            return redirect()->back()->with('message', 'WhatWeDo deleted!');
        }
        return response(view('403'), 403);

    }
}
