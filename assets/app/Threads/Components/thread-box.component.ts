import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Thread } from '../models/thread'
import { EmitterService } from '../../emitter.service';
import { ThreadService } from '../services/thread.service';

@Component({
    selector: 'thread-box',
    template: `
       <div class="panel panel-default">
            <div class="panel-heading">{{thread.author}}</div>
            <div class="panel-body">
                {{thread.title}}
            </div>
            <div class="panel-footer">
                <button class="btn btn-info" (click)="editThread()"><i class="fa fa-edit"></i></button>
            </div>
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