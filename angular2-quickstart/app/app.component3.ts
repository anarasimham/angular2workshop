import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'my-subcomponent',
    template: `
    <h3>Hello! I am a child component.</h3>
    <h4>{{constantStr}}/{{inputStr}}</h4>
    <h3 (click)="fireMyEvent()">Click me</h3>
    `,
})
export class AppComponent3 { 
    @Input() inputStr: string = 'blank';
    @Output() myevent: EventEmitter<any>;
    constantStr = 'This is text that is already present';

    constructor() {
        this.myevent = new EventEmitter();
    }

    fireMyEvent(evt: any) {
        this.myevent.next(['abc','def']);
    }
}
