<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Disaster extends Model
{
    use HasFactory, SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $fillable = [
        'kategori_id', 'name', 'description', 'level_id', 'datetime_start', 'datetime_end', 'state_id', 'district_id', 'parish_id', 
        'latitude', 'longitude', 'status', 'created_by_id'
    ];

    public function kategori()
    {
        return $this->belongsTo(MetaData::class);
    }

    public function level()
    {
        return $this->belongsTo(MetaData::class);
    }

    public function state()
    {
        return $this->belongsTo(State::class);
    }

    public function district()
    {
        return $this->belongsTo(District::class);
    }

    public function parish()
    {
        return $this->belongsTo(Parish::class);
    }

    public function createdBy()
    {
        return $this->belongsTo(User::class);
    }
}
