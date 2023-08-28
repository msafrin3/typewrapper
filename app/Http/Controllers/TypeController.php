<?php

namespace App\Http\Controllers;

use App\Jobs\ScreenshotResult;
use App\Models\Result;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TypeController extends Controller
{
    
    public function index()
    {
        return Inertia::render('Type/Index');
    }

    public function store(Request $request)
    {
        $result_id = uniqid();
        $result = Result::create([
            'result_id' => $result_id,
            'user_id' => Auth::check() ? Auth::user()->id : null,
            'count' => $request->input('count'),
            'correct' => $request->input('correct'),
            'incorrect' => $request->input('incorrect')
        ]);

        dispatch(new ScreenshotResult($result));

        return back()->with(['success' => $result_id]);
    }

    public function show($result_id)
    {
        $result = Result::where('result_id', $result_id)->first();
        // return Inertia::render('Type/Show', ['result' => $result]);
        return view('result.show', ['result' => $result]);
    }

    public function screenshot($result_id)
    {
        $result = Result::where('result_id', $result_id)->first();
        return view('images/result', ['result' => $result]);
    }

}
