<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class users extends Controller{
    public function register(Request $request){
        $dbUser = new User;

        $dbUser->name = $request->input('name');
        $dbUser->password = Hash::make($request->input('password'));
        $dbUser->email = $request->input('email');
        $dbUser->save();
        return $dbUser;
    }


    public function login(Request $request){
        $userDb = User::where('email', $request->input('email'))->first();
        if($userDb == null){
            return json_encode(["msg" => "This user is not exist", 'res' => false]);
        }
        if(!Hash::check($request->input('password'), $userDb->password)){
            return json_encode(['msg' => "The password is incorrect", "res" => false]);
        }


        return json_encode(['msg' => $userDb, 'res' => true]);
    }
}
