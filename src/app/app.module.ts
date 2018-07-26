import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceComponent } from './service/service.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from "ag-grid-angular";
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServiceComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule, AgGridModule.withComponents([]),
    HttpClientModule, FormsModule
  ],
  providers: [ServiceComponent, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
