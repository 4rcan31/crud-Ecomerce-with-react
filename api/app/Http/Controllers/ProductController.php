<?php

namespace App\Http\Controllers;

use App\Models\Product;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ProductController extends Controller{

    function addproduct(Request $request){
        if(($request->input('name'))  == null || ($request->input('description')) == null || ($request->input('price')) == null || $request->file('file') == null){
            return json_encode(["msg" => "Fill all the data", "res" => false]);
        }

        $dbProduct = new Product;
        $dbProduct->name = $request->input('name');
        $dbProduct->description = $request->input('description');
        $dbProduct->price = $request->input('price');


        $img = $request->file('file');
        $nameImg = Str::slug(rand(0,999)).".".$img->guessExtension();
        $rute = public_path('products/');
        copy($img->getRealPath(), $rute.$nameImg);
        $dbProduct->path_img = $nameImg;


        //$dbProduct->path_img = $request->file('file')->store('public/products');
        $dbProduct->save();
        return json_encode(["msg" => "The data was inserted successfully", "res" => true]);
    }


    function getProducts(){
        return Product::all();
    }

    function delete($id){
        $result = Product::where('id', $id)->delete();

        if($result){
            return json_encode(['msg' => "Product has been delete", 'res' => true]);
        }else{
            return json_encode(['msg' => "Ops!", 'res' => false]);
        }
    }

    function getProduct($id){
        $result = Product::where('id', $id)->first();

        if($result){
            return json_encode(['msg' => $result, 'res' => true]);
        }else{
            return json_encode(['msg' => "Ops!", 'res' => false]);
        }
    }


    function updateproduct(Request $request){
        if(($request->input('name'))  == null || ($request->input('description')) == null || ($request->input('price')) == null || $request->input('id') == null){
            return json_encode(["msg" => "Fill all the data", "res" => false]);
        }

        $product = Product::where('id', $request->input('id'))->first();

        if($product){
            $product->name = $request->input('name');
            $product->description = $request->input('description');
            $product->price = $request->input('price');
            $product->save();
            return json_encode(["msg" => "The data was update successfully", "res" => true]);
        }
        

    }
}
