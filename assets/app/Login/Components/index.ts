import { Component} from '@angular/core';
import { LoginComponent } from './login.component'

@Component({
    selector: 'thread-widget',
    template: `
        Suck It
    `,
    directives: [LoginComponent]
})
export class LoginComponent { 

}