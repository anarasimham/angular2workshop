import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular App</h1>
    <h4 *ngFor="let item of usernames;">{{item}}</h4>`
})
export class AppComponent { 
    usernames: Array<string>;
    
    constructor() {
        this.usernames = Array(3);
        this.usernames.push('hellomyuser');
        this.usernames.push('hello2');
        this.usernames.push('example3');
    }
}
