<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\support\facades\DB;
class PostController extends Controller
{
    public function index()
    {
        return view("welcome");
    }
    public function get()
    {
        $posts=DB::Table("post")->get();
        return $posts;
    }
    public function getbanar()
    {
        $posts=DB::Table("post")->orderBy('id', 'desc')->take(3)->get();
        return $posts;
    }
    public function Aboutus()
    {
        return view("welcome");
    }
    public function contactus()
    {
        return view("welcome");
    }
    public function blogPage()
    {
        return view("welcome");
    }
    public function postpage()
    {
        return view("welcome");
    }
    public function viwepost()
    {
        return view("welcome");
    }
    public function getpost($id)
    {
        $posts=DB::Table("post")->where("id",$id)->first();
        return $posts;
   
    }
}
