import { Component } from '@angular/core';
import { MyService } from './app.service';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular App</h1>
                <h4>{{serviceVar}}</h4>`
})
export class AppComponent { 
    serviceVar: string;

    constructor(s: MyService) {
        this.serviceVar = s.myStr;
    }
}
