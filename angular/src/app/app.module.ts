import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateComponentComponent } from './date-component/date-component.component';
import { MonthComboboxComponent } from './month-combobox/month-combobox.component';

@NgModule({
  declarations: [
    AppComponent,
    DateComponentComponent,
    MonthComboboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
