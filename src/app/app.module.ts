import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FilterPipe } from './filter/filter.pipe';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';
import { ApiDataTestComponent } from './api-data-test/api-data-test.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    PaginationComponent,
    ApiDataTestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
