<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    use HasFactory;

    protected $fillable = ['result_id', 'user_id', 'count', 'correct', 'incorrect', 'screenshot'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
