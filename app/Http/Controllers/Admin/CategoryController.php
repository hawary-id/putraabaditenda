<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::orderBy('name')->get();

        return Inertia::render("Admin/Category/Index",[
            'categories' => $categories
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Admin/Category/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255|unique:categories,name',
            'description' => 'required|string',
            'thumbnail' => 'required|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048'
        ]);

        $data['slug'] = Str::slug($data['name']);
        $data['thumbnail'] = Storage::disk('public')->put('category', $request->file('thumbnail'));
        Category::create($data);
        return redirect()->route('admin.category.index')->with([
            'message' => 'Successfully Created Category',
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
    public function edit(Category $category)
    {
        $categories = Category::all();
        return Inertia::render('Admin/Category/Edit',[
            'category' => $category,
            'categories' => $categories,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        $data = $request->all();
        $data['thumbnail'] = $category->thumbnail;
        $data['slug'] = Str::slug($data['name']);
        if($request->hasFile('thumbnail')){
            if($category->thumbnail){
                Storage::disk('public')->delete($category->thumbnail);
            }
            $data['thumbnail'] = Storage::disk('public')->put('category', $request->file('thumbnail'));
        }

        $category->update($data);

        return redirect()->route('admin.category.index')->with([
            'message' => 'Successfully updated category',
            'type' => 'success'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        if($category->thumbnail){
            Storage::disk('public')->delete($category->thumbnail);
        }
        $category->delete();
        return redirect()->route('admin.category.index')->with([
            'message' => 'Successfully deleted category',
            'type' => 'success'
        ]);
    }
}
