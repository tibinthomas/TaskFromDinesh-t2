import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StateComponent } from './state/state.component';
import { DistComponent } from './dist/dist.component';
import { CityComponent } from './city/city.component';

@NgModule({
  declarations: [
    AppComponent,
    StateComponent,
    DistComponent,
    CityComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
