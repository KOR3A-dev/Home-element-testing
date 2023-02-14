<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    use HasFactory;

    public function invoice()
    {
        return $this->hasOne(Invoice::class);
    }

    public function reports()
    {
        return $this->belongsToMany(Report::class);
    }
}
