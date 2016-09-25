import { Component } from '@angular/core';
import {MyCustomObject } from './MyCustomObject';
import { AppComponent3 } from './app.component3';
import {HighlightDirective } from './highlight.directive';

@Component({
    selector: 'my-app',
    template: `<h1 highlight>My First Angular 2 App</h1>
                <h4 *ngFor="let item of myArr">{{item}}</h4>
                <router-outlet></router-outlet>`
})
export class AppComponent { 
    private myArr: Array<string>;

    constructor() {
        this.myArr = Array(1).fill(1);
    }

    handleMyEvent(arg: Array<string>) {
    }
}

@Component({
    selector: 'my-app2',
    templateUrl: 'app/app.component2.html',
})
export class AppComponent2 { 
    private numbers: Array<string>;
    private isComponent: boolean;
    private custom: MyCustomObject;
    private classes: string;
    private abcd: string;

    constructor() {
        this.abcd = 'This is new text';
        this.numbers = Array(3).fill('blank value');
        this.isComponent = false;
        this.custom = new MyCustomObject(1, 'aaa');
        this.classes = "btn-primary";
    }

    addRowToList(arg: Array<number>) {
        var val: string;
        if (Math.random() > .5) {
            val = arg[0];
        } else {
            val = arg[1];
        }
        this.numbers.push(val);
    }
}
