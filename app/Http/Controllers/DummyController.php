<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\Snappy\Facades\SnappyImage;

class DummyController extends Controller
{

    public function testimage()
    {
        return view('images/result', ['correct' => 109, 'incorrect' => 0]);
    }
    
    public function runCommand()
    {
        $file_name = uniqid();
        $url = url('').'/testimage';
        $output_path = storage_path().'/app/public/result/'.$file_name.'.jpg';
        $path = env('WKHTML_IMG_BINARY');
        // $output_path = "/Users/safrin/Projects/Personal/typerapper/resources/views/images/images.jpg";
        $command = "$path --width 400 --height 400 $url $output_path > debug.log 2>&1";
        echo shell_exec($command);
    }

}
