import { Component} from '@angular/core';
import { ThreadFormComponent } from './thread-form.component'
import { ThreadListComponent } from './thread-list.component'
import { EmitterService } from '../emitter.service';

@Component({
    selector: 'thread-widget',
    template: `
        <div>
            <thread-form [listId]="listId" [editId]="editId"></thread-form>
            <thread-list [listId]="listId" [editId]="editId"></thread-list>
        </div>
    `,
    directives: [ThreadListComponent, ThreadFormComponent],
    providers: [EmitterService]
})
export class ThreadComponent { 
    // Event tracking properties
    private listId = 'THREAD_COMPONENT_LIST';
    private editId = 'THREAD_COMPONENT_EDIT';
 }