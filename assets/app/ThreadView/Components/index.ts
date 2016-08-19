import { Component} from '@angular/core';
import { PostListComponent } from './post-list.component'
import { EmitterService } from '../../emitter.service';

@Component({
    selector: 'post-widget',
    template: `
        <div>
            <post-list [listId]="listId" [editId]="editId"></post-list>
        </div>
    `,
    directives: [PostListComponent],
    providers: [EmitterService]
})
export class PostComponent { 
    // Event tracking properties
    private listId = 'POST_COMPONENT_LIST';
    private editId = 'POST_COMPONENT_EDIT';
 }