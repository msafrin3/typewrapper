<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ReportDetail extends Model
{
    use HasFactory, SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $fillable = ['report_id', 'disaster_id', 'kategori_id', 'state_id', 'district_id', 'shelter_id', 'total_keluarga', 'total_mangsa', 'total_kematian', 'shelter_is_active'];

    public function report()
    {
        return $this->belongsTo(Report::class);
    }

    public function disaster()
    {
        return $this->belongsTo(Disaster::class);
    }

    public function kategori()
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

    public function shelter()
    {
        return $this->belongsTo(Shelter::class);
    }
}
