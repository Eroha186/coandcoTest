<?php

namespace App\Http\Controllers;

use App\Contact;
use Illuminate\Http\Request;

class ContactsController extends Controller
{
    public function show()
    {
        return view('main', ['contacts' => Contact::all()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Contact::create($request->all());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Contact  $contact
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function update(Request $request, Contact $contact)
    {
        $contact->update($request->all());
        return response('ok',200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Contact  $contact
     * @return Contact[]|\Illuminate\Database\Eloquent\Collection
     */
    public function destroy(Contact $contact)
    {
        $contact->delete();
        return Contact::all();
    }

    public function search(Request $request)
    {
        $search = $request->get('search');
        return Contact::where('name', 'like', "%${search}%")
            ->whereOr('surname', 'like', "%${search}%")
            ->whereOr('middle_name', 'like', "%${search}%")
            ->whereOr('phone', 'like', "%${search}%")
            ->get();
    }
}
