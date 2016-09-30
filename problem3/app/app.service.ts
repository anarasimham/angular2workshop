import { Injectable } from '@angular/core';

@Injectable()
export class MyService {
    myStr: string;

    constructor() {
        this.myStr = 'we made it!';
    }
}
