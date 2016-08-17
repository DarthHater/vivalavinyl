import { Component, EventEmitter, Input, OnChanges } from '@angular/core';
import { NgForm }    from '@angular/common';
import { Observable } from 'rxjs/Rx';

import { ThreadBoxComponent } from './thread-box.component';
import { ThreadService } from '../services/thread.service';
import { EmitterService } from '../emitter.service';
import { Thread } from '../models/thread'

// Component decorator
@Component({
    selector: 'thread-form',
    template: `
       <form (ngSubmit)="submitThread()">
            <div class="form-group">
                <div class="input-group">
                    <span class="input-group-addon" id="basic-addon1"><span class="glyphicon glyphicon-user"></span></span>
                    <input type="text" class="form-control" placeholder="Author" [(ngModel)]="model.author" name="author">
                </div>
                <br />
                <textarea class="form-control" rows="3" placeholder="Text" [(ngModel)]="model.text" name="text"></textarea>
                <br />
                <button *ngIf="!editing" type="submit" class="btn btn-primary btn-block">Say It</button>
                <button *ngIf="editing" type="submit" class="btn btn-warning btn-block">Update</button>
            </div>
        </form>
    `,
    providers: [ThreadService]
})
// Component class
export class ThreadFormComponent implements OnChanges { 
    // Constructor with injected service
    constructor(
        private threadService: ThreadService
        ){}
    // Local properties
    private model = new Thread(new Date(), '', '');
    private editing = false;

    // Input properties
     @Input() editId: string;
     @Input() listId: string;

    submitComment(){
        // Variable to hold a reference of addComment/updateComment
        let threadOperation:Observable<Thread[]>;

        if(!this.editing){
            // Create a new comment
            threadOperation = this.threadService.addThread(this.model)
        } else {
            // Update an existing comment
             //commentOperation = this.threadService.updateThread(this.model)
        }

        // Subscribe to observable
        threadOperation.subscribe(
                                threads => {
                                    // Emit list event
                                    EmitterService.get(this.listId).emit(threads);
                                    // Empty model
                                    this.model = new Thread(new Date(), '', '');
                                    // Switch editing status
                                    if(this.editing) this.editing = !this.editing;
                                }, 
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }

    ngOnChanges() {
        // Listen to the 'edit'emitted event so as populate the model
        // with the event payload
        EmitterService.get(this.editId).subscribe((thread:Thread) => {
            this.model = thread
            this.editing = true;
        });
    }
 }