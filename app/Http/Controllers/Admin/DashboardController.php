<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $products = Product::count();
        $categories = Category::count();
        return Inertia::render('Admin/Dashboard',[
            'products' => $products,
            'categories' => $categories,
        ]);
    }
}
