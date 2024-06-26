<?php

namespace App;

use App\Models\BlogCategory;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'blogs';

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
    protected $fillable = ['name', 'created_at', 'short_detail', 'detail', 'right_image', 'image','blog_link','blog_id'];
    public function category(){
        return $this->belongsTo(BlogCategory::class,'blog_id','id');
    }

    
}
