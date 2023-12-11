<?php

namespace App\Livewire;

use LivewireUI\Modal\ModalComponent;

class CreatePosts extends ModalComponent
{
    public function render()
    {
        return view('livewire.create-posts');
    }
}
