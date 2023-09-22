import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DataInputComponent } from './data-input/data-input.component';
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DataInputComponent,
    DataTableComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
