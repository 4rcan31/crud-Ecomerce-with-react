<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class users extends Controller{
    public function register(Request $data){
        $dbUser = new User;

        $dbUser->name = $data->input('name');
        $dbUser->password = Hash::make($data->input('password'));
        $dbUser->email = $data->input('email');
        $dbUser->save();
        return $dbUser;
    }
}
