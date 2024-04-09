<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests;

use App\Models\{TutorialVideo, PlayList};
use Illuminate\Http\Request;
use Image;
use File;

class TutorialVideoController extends Controller
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
        $model = str_slug('tutorialvideo', '-');
        if (auth()->user()->permissions()->where('name', '=', 'view-' . $model)->first() != null) {
            $keyword = $request->get('search');
            $perPage = 25;

            if (!empty($keyword)) {
                $tutorialvideo = TutorialVideo::where('name', 'LIKE', "%$keyword%")
                    ->orWhere('description', 'LIKE', "%$keyword%")
                    ->orWhere('video', 'LIKE', "%$keyword%")
                    ->orWhere('image', 'LIKE', "%$keyword%")
                    ->paginate($perPage);
            } else {
                $tutorialvideo = TutorialVideo::paginate($perPage);
            }

            return view('admin.tutorial-video.index', compact('tutorialvideo'));
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
        $model = str_slug('tutorialvideo', '-');
        if (auth()->user()->permissions()->where('name', '=', 'add-' . $model)->first() != null) {
            $playlist  = PlayList::all();
            return view('admin.tutorial-video.create', compact('playlist'));
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
        $model = str_slug('tutorialvideo', '-');
        if (auth()->user()->permissions()->where('name', '=', 'add-' . $model)->first() != null) {
            $this->validate($request, [
                'name' => 'required',
                'description' => 'required',
                'video' => 'required'
            ]);

            $tutorialvideo = new TutorialVideo($request->all());

            if ($request->hasFile('image')) {

                $file = $request->file('image');

                //make sure yo have image folder inside your public
                $tutorialvideo_path = 'content/thumbnails/';
                $fileName = $file->getClientOriginalName();
                $profileImage = date("Ymd") . $fileName . "." . $file->getClientOriginalExtension();

                Image::make($file)->save(public_path($tutorialvideo_path) . DIRECTORY_SEPARATOR . $profileImage);

                $tutorialvideo->image = $tutorialvideo_path . $profileImage;
            }
            if ($request->hasFile('video')) {

                $fileName = time().'.'.$request->video->extension();
                $request->video->move(public_path('content/tutorialvideos'), $fileName);


                $tutorialvideo->video = 'content/tutorialvideos/'. $profileImage;
            }

            $tutorialvideo->save();
            return redirect()->back()->with('message', 'TutorialVideo added!');
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
        $model = str_slug('tutorialvideo', '-');
        if (auth()->user()->permissions()->where('name', '=', 'view-' . $model)->first() != null) {
            $tutorialvideo = TutorialVideo::findOrFail($id);
            return view('admin.tutorial-video.show', compact('tutorialvideo'));
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
        $model = str_slug('tutorialvideo', '-');
        if (auth()->user()->permissions()->where('name', '=', 'edit-' . $model)->first() != null) {
            $tutorialvideo = TutorialVideo::findOrFail($id);
            $playlist  = PlayList::all();
            return view('admin.tutorial-video.edit', compact('tutorialvideo', 'playlist'));
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
        $model = str_slug('tutorialvideo', '-');
        if (auth()->user()->permissions()->where('name', '=', 'edit-' . $model)->first() != null) {
            $this->validate($request, [
                'name' => 'required',
                'description' => 'required',
            ]);
            $requestData = $request->all();

            $tutorialvideo = TutorialVideo::where('id', $id)->first();

            if ($request->hasFile('image')) {

                $image_path = public_path($tutorialvideo->image);

                if (File::exists($image_path)) {
                    File::delete($image_path);
                }

                $file = $request->file('image');
                $fileNameExt = $request->file('image')->getClientOriginalName();
                $fileNameForm = str_replace(' ', '_', $fileNameExt);
                $fileName = pathinfo($fileNameForm, PATHINFO_FILENAME);
                $fileExt = $request->file('image')->getClientOriginalExtension();
                $fileNameToStore = $fileName . '_' . time() . '.' . $fileExt;
                $pathToStore = public_path('content/thumbnails/');
                Image::make($file)->save($pathToStore . DIRECTORY_SEPARATOR . $fileNameToStore);

                $requestData['image'] = 'content/thumbnails/' . $fileNameToStore;
            }
            if ($request->hasFile('video')) {
                $image_path = public_path($tutorialvideo->video);
                if (File::exists($image_path)) {
                    File::delete($image_path);
                }
                $fileName = time().'.'.$request->video->extension();
                $request->video->move(public_path('content/tutorialvideos'), $fileName);

                $requestData['video'] = 'content/tutorialvideos/'. $fileName;
            }


            $tutorialvideo = TutorialVideo::findOrFail($id);
            $tutorialvideo->update($requestData);
            return redirect()->back()->with('message', 'TutorialVideo updated!');
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
        $model = str_slug('tutorialvideo', '-');
        if (auth()->user()->permissions()->where('name', '=', 'delete-' . $model)->first() != null) {
            TutorialVideo::destroy($id);
            return redirect()->back()->with('message', 'TutorialVideo deleted!');
        }
        return response(view('403'), 403);
    }
}
