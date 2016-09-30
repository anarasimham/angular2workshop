import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular App. Date time is: {{d}}</h1>'
})
export class AppComponent {
    d: Date;
    
    constructor() {
        this.d = new Date();
    }}
