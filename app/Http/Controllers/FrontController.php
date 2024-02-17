<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Contact;
use App\Models\Product;
use App\Models\User;
use App\Notifications\ContactNotification;
use App\Notifications\SuccessNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;
use Inertia\Inertia;

class FrontController extends Controller
{
    public function index(Request $request)
    {   

        $categories = Category::has('products')->with('cheapestProduct')->get();

        return Inertia::render('Home',[
            'categories' => $categories
        ]);
    }

    public function aboutUs(Request $request)
    {
        return Inertia::render('AboutUs');
    }

    public function product(Request $request)
    {
        $slug = $request->category ?? '';
        $text = $request->search ?? '';
        $categories = Category::orderBy('name')->get();

        $query = Product::with('category');

        if ($slug) {
            $query->whereHas('category', function ($query) use ($slug) {
                $query->where('slug', $slug);
            });
        }

        if ($text) {
            $query->where(function ($query) use ($text) {
                $query->where('name', 'like', "%$text%")->orWhere('description','like', "%$text%");
            });
        }

        $products = $query->orderBy('name')->paginate(8);

        $products->withPath(route('product', ['category' => $slug, 'search' => $text]));

        return Inertia::render('Product', [
            'categories' => $categories,
            'products' => $products,
            'slug' => $slug,
            'text' => $text,
        ]);
    }




    public function productDetail($slug)
    {
        $product = Product::with('category')->where('slug',$slug)->first();
        $relates = Product::where('category_id',$product->category_id)->take(5)->get();

        return Inertia::render('ProductDetail',[
            'product' => $product,
            'relates' => $relates,
        ]);
    }

    public function contact(Request $request)
    {
        return Inertia::render('Contact');
    }

    public function contactStore(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
            'captcha' => 'required|string',
        ]);

        $contact = Contact::create($data);
        $adminEmail = 'tendasarnafil1999@gmail.com';
        Notification::route('mail', $adminEmail)->notify(new ContactNotification($data['name'], $data['email'], $data['subject'], $data['message']));
        $contact->notify(new SuccessNotification($contact));

        return redirect()->route('contact')->with([
            'message' => 'Pesan Berhasil Dikirim',
            'type' => 'success'
        ]);
    }
}
