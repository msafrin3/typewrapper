<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DisasterShelter extends Model
{
    use HasFactory, SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $fillable = ['disaster_id', 'shelter_id', 'total_keluarga', 'total_mangsa', 'total_kematian', 'dibuka_pada', 'ditutup_pada', 'pic_name', 'pic_notel', 'pic_jawatan', 'created_by_id'];

    public function shelter()
    {
        return $this->belongsTo(Shelter::class);
    }

    public function createdBy()
    {
        return $this->belongsTo(User::class);
    }
}
