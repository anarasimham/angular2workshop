import { Component } from '@angular/core';
import {MyCustomObject } from './MyCustomObject';
import { AppComponent3 } from './app.component3';
import {HighlightDirective } from './highlight.directive';

@Component({
    selector: 'my-app',
    template: '<h1 highlight>My First Angular 2 App</h1>'
})
export class AppComponent { }

@Component({
    selector: 'my-app2',
    templateUrl: 'app/app.component.html',
})
export class AppComponent2 { 
    private numbers: Array<string>;
    private isComponent: boolean;
    private custom: MyCustomObject;
    private classes: string;
    private abcd: string;

    constructor() {
        this.numbers = Array(3).fill('blank value');
        this.isComponent = false;
        this.custom = new MyCustomObject(1, 'aaa');
        this.classes = "btn-primary";
        this.abcd = 'This is new text';
    }

    handleMyEvent(arg: Array<string>) {
        console.log('in comp2 handling myevent', arg);
        var val: string;
        if (Math.random() > .5) {
            val = arg[0];
        } else {
            val = arg[1];
        }
        this.numbers.push(val);
    }
}
