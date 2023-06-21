<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class State extends Model
{
    use HasFactory;

    protected $table = ['dd_states'];

    public function districts()
    {
        return $this->hasMany(District::class);
    }
}
