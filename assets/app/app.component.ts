import { Component } from '@angular/core';
import { ThreadComponent } from './threads/components/index'

@Component({
    selector: 'my-app',
    template: `
        <h1>Threads</h1>

        <thread-widget></thread-widget>
        `,
        directives:[ThreadComponent]
})
export class AppComponent { }