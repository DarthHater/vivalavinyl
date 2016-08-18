import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ThreadBoxComponent } from './thread-box.component';
import { Thread } from '../models/thread';
import { ThreadService } from '../services/thread.service';
import { EmitterService } from '../../emitter.service';

// Component decorator
@Component({
    selector: 'thread-list',
    template: `
        <thread-box 
            [editId]="editId" 
            [listId]="listId" 
            *ngFor="let thread of threads" 
            [thread]="thread">
        </thread-box>
        `,
    directives: [ThreadBoxComponent],
    providers: [ThreadService]
})
// Component class
export class ThreadListComponent implements OnInit, OnChanges{
    // Local properties
    threads: Thread[];
    // Input properties
    @Input() listId: string;
    @Input() editId: string;

    // Constructor with injected service
    constructor(private threadService: ThreadService) {}

    ngOnInit() {
            // Load comments
            this.loadThreads()
    }

    loadThreads() {
        // Get all comments
         this.threadService.getThreads()
                           .subscribe(
                               threads => this.threads = threads, //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }

    ngOnChanges(changes:any) {
        // Listen to the 'list'emitted event so as populate the model
        // with the event payload
        EmitterService.get(this.listId).subscribe((threads:Thread[]) => { this.loadThreads()});
    }

}