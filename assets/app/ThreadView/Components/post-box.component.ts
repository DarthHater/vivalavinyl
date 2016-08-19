import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../models/post'
import { EmitterService } from '../../emitter.service';
import { PostService } from '../services/post.service';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
    selector: 'post-box',
    directives: [RouterOutlet, RouterLink],
    template: `
        <div id="threadposts">
            <div class="row post" id="post_{{ post._id }}_info">
                <div class="col-md-12">
                      <a routerLink="/user/{{ post.creator }}" class="memberlink">{{ post.username }}</a> posted this on {{ post.createdAt | date: 'medium' }}
                        &nbsp;&raquo; quote&nbsp;&raquo;
              </div>
            </div>
            <div class="row post" id="post_{{ post._id }}_body">
              <div class="col-md-12">
                <div class="postbody">{{ post.body }}</div>
              </div>
            </div>
         </div>
        `
    // No providers here because they are passed down from the parent component
})

// Component class
export class PostBoxComponent { 
    // Constructor
     constructor(
        private postService: PostService
        ){}

    // Define input properties
    @Input() post: Post;
    @Input() listId: string;
    @Input() editId: string;
}