<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Models\DanceClass;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Image;
use File;

class TicketController extends Controller
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
        $model = str_slug('ticket','-');
        if(auth()->user()->permissions()->where('name','=','view-'.$model)->first()!= null) {
            $keyword = $request->get('search');
            $perPage = 25;

            if (!empty($keyword)) {
                $ticket = Ticket::where('time', 'LIKE', "%$keyword%")
                ->orWhere('ticket_id', 'LIKE', "%$keyword%")
                ->paginate($perPage);
            } else {
                $ticket = Ticket::paginate($perPage);
            }

            return view('admin.ticket.index', compact('ticket'));
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
        $model = str_slug('ticket','-');
        if(auth()->user()->permissions()->where('name','=','add-'.$model)->first()!= null) {
            $classes = DanceClass::all();
            return view('admin.ticket.create',compact('classes'));
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
        $model = str_slug('ticket','-');
        if(auth()->user()->permissions()->where('name','=','add-'.$model)->first()!= null) {
            $this->validate($request, [
			'time' => 'required',
			'ticket_id' => 'required'
		]);

            $ticket = new Ticket($request->all());

            if ($request->hasFile('image')) {

                $file = $request->file('image');

                //make sure yo have image folder inside your public
                $ticket_path = 'uploads/tickets/';
                $fileName = $file->getClientOriginalName();
                $profileImage = date("Ymd").$fileName.".".$file->getClientOriginalExtension();

                Image::make($file)->save(public_path($ticket_path) . DIRECTORY_SEPARATOR. $profileImage);

                $ticket->image = $ticket_path.$profileImage;
            }

            $ticket->save();
            return redirect()->back()->with('message', 'Ticket added!');
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
        $model = str_slug('ticket','-');
        if(auth()->user()->permissions()->where('name','=','view-'.$model)->first()!= null) {
            $ticket = Ticket::findOrFail($id);
            return view('admin.ticket.show', compact('ticket'));
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
        $model = str_slug('ticket','-');
        if(auth()->user()->permissions()->where('name','=','edit-'.$model)->first()!= null) {
            $ticket = Ticket::findOrFail($id);
            $classes = DanceClass::all();

            return view('admin.ticket.edit', compact('ticket','classes'));
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
        $model = str_slug('ticket','-');
        if(auth()->user()->permissions()->where('name','=','edit-'.$model)->first()!= null) {
            $this->validate($request, [
			'time' => 'required',
			'ticket_id' => 'required'
		]);
            $requestData = $request->all();


        if ($request->hasFile('image')) {

            $ticket = Ticket::where('id', $id)->first();
            $image_path = public_path($ticket->image);

            if(File::exists($image_path)) {
                File::delete($image_path);
            }

            $file = $request->file('image');
            $fileNameExt = $request->file('image')->getClientOriginalName();
            $fileNameForm = str_replace(' ', '_', $fileNameExt);
            $fileName = pathinfo($fileNameForm, PATHINFO_FILENAME);
            $fileExt = $request->file('image')->getClientOriginalExtension();
            $fileNameToStore = $fileName.'_'.time().'.'.$fileExt;
            $pathToStore = public_path('uploads/tickets/');
            Image::make($file)->save($pathToStore . DIRECTORY_SEPARATOR. $fileNameToStore);

             $requestData['image'] = 'uploads/tickets/'.$fileNameToStore;
        }


            $ticket = Ticket::findOrFail($id);
            $ticket->update($requestData);
            return redirect()->back()->with('message', 'Ticket updated!');
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
        $model = str_slug('ticket','-');
        if(auth()->user()->permissions()->where('name','=','delete-'.$model)->first()!= null) {
            Ticket::destroy($id);
            return redirect()->back()->with('message', 'Ticket deleted!');
        }
        return response(view('403'), 403);

    }
}
