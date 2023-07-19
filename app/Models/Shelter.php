<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shelter extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'shelter_type_id', 'state_id', 'district_id', 'parish_id', 'latitude', 'longitude', 'pic_name', 'pic_notel1', 'pic_notel2', 'created_by_id'];

    public function shelterType()
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
}
