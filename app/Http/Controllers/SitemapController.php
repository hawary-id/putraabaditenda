<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class SitemapController extends Controller
{
    public function index(Request $request)
    {
       
        $products = Product::orderBy('id','desc')->get();

        return response()->view('sitemap', compact('products'))
          ->header('Content-Type', 'text/xml');

    }
}
