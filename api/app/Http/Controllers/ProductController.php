<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller{
    
    function addProduct(Request $request){

        if(($request->input('name'))  == null || ($request->input('description')) == null || ($request->input('price')) == null){
            return json_encode(["msg" => "Fill all the data", "res" => false]);
        }

        $dbProduct = new Product;
        $dbProduct->name = $request->input('name');
        $dbProduct->description = $request->input('description');
        $dbProduct->price = $request->input('price');
        $dbProduct->path_img = $request->file('file')->store('products');
        $dbProduct->save();
        return json_encode(["msg" => $dbProduct, "res" => true]);
    }
}
