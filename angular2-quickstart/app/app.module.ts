import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, AppComponent2 }  from './app.component';
import { AppComponent3 }  from './app.component3';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, AppComponent2, AppComponent3, HighlightDirective ],
  bootstrap: [ AppComponent, AppComponent2 ]
})
export class AppModule { }
