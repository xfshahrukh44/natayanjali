<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PlayList extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'play_lists';

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

    public function videos()
    {
        return $this->hasMany(TutorialVideo::class);
    }
    protected $fillable = ['name', 'description', 'image'];


}
