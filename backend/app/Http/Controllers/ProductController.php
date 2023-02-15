<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function findAll(){
        $products = Product::all();
        return response()->json(compact('products'),200);
    }

}
