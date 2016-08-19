import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Thread } from '../models/thread'
import { EmitterService } from '../../emitter.service';
import { ThreadService } from '../services/thread.service';

@Component({
    selector: 'thread-box',
    template: `
        <div class="row list">
            <div class="col-xs-4 col-md-2"> Posted by <a href="#/user/{{ thread.author }}" class="memberlink">{{ thread.createdBy }}</a> </div>
            <div class="col-xs-8 col-md-6"> <a href="#/thread/view/{{ thread._id }}">{{ thread.title }}</a></div>
            <div class="col-xs-2 col-md-1"> {{ thread.numberOfPosts }} posts </div>
            <div class="col-xs-10 col-md-3"> Last post by {{ thread.updatedBy }}<br>on {{ thread.dateUpdated | date: 'medium' }} </div>
        </div>
        `
    // No providers here because they are passed down from the parent component
})

// Component class
export class ThreadBoxComponent { 
    // Constructor
     constructor(
        private threadService: ThreadService
        ){}

    // Define input properties
    @Input() thread: Thread;
    @Input() listId: string;
    @Input() editId: string;

    editComment() {
        // Emit edit event
        EmitterService.get(this.editId).emit(this.thread);
    }
}