<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;
class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::with('category')->orderBy('name')->get();
        return Inertia::render('Admin/Product/Index',[
            'products' => $products
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::orderBy('name')->get();
        return Inertia::render('Admin/Product/Create',[
            'categories' => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|integer',
            'discount_price' => 'required|integer',
            'category_id' => 'required|integer',
            'thumbnail_1' => 'required|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
            'thumbnail_2' => 'required|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
            'thumbnail_3' => 'required|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048'
        ]);

        for ($i = 1; $i <= 3; $i++) {
            $thumbnailKey = "thumbnail_$i";
            $data[$thumbnailKey] = Storage::disk('public')->put('product', $request->file($thumbnailKey));
        }

        $data['slug'] = Str::slug($data['name']);

        Product::create($data);
        return redirect()->route('admin.product.index')->with([
            'message' => 'Successfully Created product',
            'type' => 'success',
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        $categories = Category::orderBy('name')->get();
        return Inertia::render('Admin/Product/Edit',[
            'categories' => $categories,
            'product' => $product,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $data =$request->all();
        $data['slug'] = Str::slug($data['name']);
        
        for ($i = 1; $i <= 3; $i++) {
            $thumbnailKey = "thumbnail_$i";
            if ($request->hasFile($thumbnailKey)) {
                if ($product->$thumbnailKey) {
                    Storage::disk('public')->delete($product->$thumbnailKey);
                }
                $data[$thumbnailKey] = Storage::disk('public')->put('product', $request->file($thumbnailKey));
            } else {
                $data[$thumbnailKey] = $product->$thumbnailKey;
            }
        }

        $product->update($data);

        return redirect()->route('admin.product.index')->with([
            'message' => 'Successfully updated product',
            'type' => 'success',
        ]);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        for($i=1; $i <=3; $i++){
            $thumbnailKey = "thumbnail_$i";
            if ($product->$thumbnailKey) {
                Storage::disk('public')->delete($product->$thumbnailKey);
            }
        }

        $product->delete();
        return redirect()->route('admin.product.index')->with([
            'message' => 'Successfully deleted product',
            'type' => 'success',
        ]);
    }
}
