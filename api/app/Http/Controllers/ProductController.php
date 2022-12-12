<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;class ProductController extends Controller{

    function addproduct(Request $request){
     //   $request = json_decode($request);
        if(($request->input('name'))  == null || ($request->input('description')) == null || ($request->input('price')) == null || $request->file('file') == null){
            return json_encode(["msg" => "Fill all the data", "res" => false]);
        }
        $dbProduct = new Product;
        $dbProduct->name = $request->input('name');
        $dbProduct->description = $request->input('description');
        $dbProduct->price = $request->input('price');
        $dbProduct->path_img = $request->file('file')->store('products');
        $dbProduct->save();
        return json_encode(["msg" => "The data was inserted successfully", "res" => true]);
    }
}
