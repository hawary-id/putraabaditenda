<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Home');
    }

    public function aboutUs(Request $request)
    {
        return Inertia::render('AboutUs');
    }

    public function product(Request $request)
    {
        return Inertia::render('Product');
    }

    public function productDetail(Request $request)
    {
        return Inertia::render('ProductDetail');
    }

    public function contact(Request $request)
    {
        return Inertia::render('Contact');
    }
}
