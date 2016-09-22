import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, AppComponent2 }  from './app.component';
import { AppComponent3 }  from './app.component3';
import { HighlightDirective } from './highlight.directive';
import { Com3InputService } from './app.com3inputservice';

import { routing, appRoutingProviders } from './app.routing';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [ AppComponent, AppComponent2, AppComponent3, HighlightDirective ],
  providers: [ Com3InputService, appRoutingProviders, {provide: APP_BASE_HREF, useValue: '/'} ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
