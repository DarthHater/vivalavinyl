import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PostBoxComponent } from './post-box.component';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';
import { EmitterService } from '../../emitter.service';
import { ActivatedRoute } from '@angular/router';

// Component decorator
@Component({
    selector: 'post-list',
    template: `
        <post-box 
            [editId]="editId" 
            [listId]="listId" 
            *ngFor="let post of posts" 
            [post]="post">
        </post-box>
        `,
    directives: [PostBoxComponent],
    providers: [PostService]
})
// Component class
export class PostListComponent implements OnInit, OnChanges{
    // Local properties
    posts: Post[];
    id: any;
    paramsSub: any;
    // Input properties
    @Input() listId: string;
    @Input() editId: string;

    // Constructor with injected service
    constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
            // Load comments
            this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = params['id']);
  
            this.loadPosts(this.id)
    }

    loadPosts(id: any) {
        // Get all comments
         this.postService.getPosts(id)
                           .subscribe(
                               posts => this.posts = posts, //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }

    ngOnChanges(changes:any) {
        // Listen to the 'list'emitted event so as populate the model
        // with the event payload
        EmitterService.get(this.listId).subscribe((posts:Post[]) => { this.loadPosts(this.id)});
    }

}