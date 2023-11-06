<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Country extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['name', 'slug'];

    public function tax(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(Tax::class, 'country_id', 'id');
    }
}
