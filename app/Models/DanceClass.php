<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class DanceClass extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    use Sluggable;

    protected $table = 'dance_classes';

    /**
    * The database primary key value.
    *
    * @var string
    */
    protected $primaryKey = 'id';

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'description', 'experience','slug','image','start', 'end','ticket', 'duration', 'day'];
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }
    public function tickets(){
        return $this->hasMany(DanceClass::class,'ticket_id');
    }


}
