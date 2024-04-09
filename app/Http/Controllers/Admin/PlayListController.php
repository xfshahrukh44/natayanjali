<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests;

use App\Models\PlayList;
use Illuminate\Http\Request;
use Image;
use File;

class PlayListController extends Controller
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
        $model = str_slug('playlist', '-');
        if (auth()->user()->permissions()->where('name', '=', 'view-' . $model)->first() != null) {
            $keyword = $request->get('search');
            $perPage = 25;

            if (!empty($keyword)) {
                $playlist = PlayList::where('name', 'LIKE', "%$keyword%")
                    ->orWhere('description', 'LIKE', "%$keyword%")
                    ->orWhere('image', 'LIKE', "%$keyword%")
                    ->paginate($perPage);
            } else {
                $playlist = PlayList::paginate($perPage);
            }

            return view('admin.play-list.index', compact('playlist'));
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
        $model = str_slug('playlist', '-');
        if (auth()->user()->permissions()->where('name', '=', 'add-' . $model)->first() != null) {
            return view('admin.play-list.create');
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
        $model = str_slug('playlist', '-');
        if (auth()->user()->permissions()->where('name', '=', 'add-' . $model)->first() != null) {
            $this->validate($request, [
                'name' => 'required',
                'description' => 'required'
            ]);

            $playlist = new PlayList($request->all());

            if ($request->hasFile('image')) {

                $file = $request->file('image');

                //make sure yo have image folder inside your public
                $playlist_path = 'content/thumbnails';
                $fileName = $file->getClientOriginalName();
                $profileImage = date("Ymd") . $fileName . "." . $file->getClientOriginalExtension();

                Image::make($file)->save(public_path($playlist_path) . DIRECTORY_SEPARATOR . $profileImage);

                $playlist->image = $playlist_path . $profileImage;
            }

            $playlist->save();
            return redirect()->back()->with('message', 'PlayList added!');
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
        $model = str_slug('playlist', '-');
        if (auth()->user()->permissions()->where('name', '=', 'view-' . $model)->first() != null) {
            $playlist = PlayList::findOrFail($id);
            return view('admin.play-list.show', compact('playlist'));
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
        $model = str_slug('playlist', '-');
        if (auth()->user()->permissions()->where('name', '=', 'edit-' . $model)->first() != null) {
            $playlist = PlayList::findOrFail($id);
            return view('admin.play-list.edit', compact('playlist'));
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
        $model = str_slug('playlist', '-');
        if (auth()->user()->permissions()->where('name', '=', 'edit-' . $model)->first() != null) {
            $this->validate($request, [
                'name' => 'required',
                'description' => 'required'
            ]);
            $requestData = $request->all();


            if ($request->hasFile('image')) {

                $playlist = PlayList::where('id', $id)->first();
                $image_path = public_path($playlist->image);

                if (File::exists($image_path)) {
                    File::delete($image_path);
                }

                $file = $request->file('image');
                $fileNameExt = $request->file('image')->getClientOriginalName();
                $fileNameForm = str_replace(' ', '_', $fileNameExt);
                $fileName = pathinfo($fileNameForm, PATHINFO_FILENAME);
                $fileExt = $request->file('image')->getClientOriginalExtension();
                $fileNameToStore = $fileName . '_' . time() . '.' . $fileExt;
                $pathToStore = public_path('content/thumbnails');
                Image::make($file)->save($pathToStore . DIRECTORY_SEPARATOR . $fileNameToStore);

                $requestData['image'] = 'content/thumbnails/' . $fileNameToStore;
            }


            $playlist = PlayList::findOrFail($id);
            $playlist->update($requestData);
            return redirect()->back()->with('message', 'PlayList updated!');
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
        $model = str_slug('playlist', '-');
        if (auth()->user()->permissions()->where('name', '=', 'delete-' . $model)->first() != null) {
            PlayList::destroy($id);
            return redirect()->back()->with('message', 'PlayList deleted!');
        }
        return response(view('403'), 403);
    }
}
