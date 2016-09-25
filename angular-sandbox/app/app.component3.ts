import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Com3InputService } from './app.com3inputservice';

@Component({
    selector: 'my-subcomponent',
    template: `
    <h3>Hello! I am a child component.</h3>
    <h4>{{constantStr}}/{{inputStr}}</h4>
    `,
})
export class AppComponent3 { 
    inputStr: string = 'blank';
    constantStr = 'This is text that is already present';

    constructor(inputService: Com3InputService) {
        this.inputStr = inputService.testStr;
    }
}
