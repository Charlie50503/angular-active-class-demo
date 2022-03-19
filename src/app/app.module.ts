import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActiveClassComponentComponent } from './active-class-component/active-class-component.component';
import { BetterActiveClassComponentComponent } from './better-active-class-component/better-active-class-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveClassComponentComponent,
    BetterActiveClassComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
