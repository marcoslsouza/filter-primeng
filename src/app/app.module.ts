import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookDataComponent } from './book-data/book-data.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table'; 
import { HttpClientModule } from '@angular/common/http';

import {CheckboxModule} from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    BookDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    TableModule,
    HttpClientModule,
    CheckboxModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
