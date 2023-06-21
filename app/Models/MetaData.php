<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MetaData extends Model
{
    use HasFactory;

    protected $table = 'meta_datas';

    protected $fillable = ['meta_id', 'name', 'group_helper'];

    public function meta()
    {
        return $this->belongsTo(Meta::class);
    }
}
