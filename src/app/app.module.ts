import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StateComponent } from './state/state.component';
import { DistComponent } from './dist/dist.component';
import { CityComponent } from './city/city.component';
import { Data } from './mock-data.service';

@NgModule({
  declarations: [
    AppComponent,
    StateComponent,
    DistComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [Data],
  bootstrap: [AppComponent]
})
export class AppModule { }
