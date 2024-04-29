<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Comment extends Model
{
    use HasFactory, SoftDeletes;
    public function User(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function Post(): BelongsTo
    {
        return $this->belongsTo(Post::class);
    }

    public function parent()
    {
        return $this->belongsTo(Comment::class, 'parent_id'); // Specify 'parent_id' as foreign key
    }
}
