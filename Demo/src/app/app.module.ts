import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test01Component } from './test01/test01.component';
import { FormsModule } from '@angular/forms';
import { StrFormatPipe } from './pipe/str-format.pipe';
import { HttpClientModule } from '@angular/common/http';
import { LogService } from './service/log.service';
import { Test02Component } from './test02/test02.component';

@NgModule({
  declarations: [
    AppComponent,
    Test01Component,
    StrFormatPipe,
    Test02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
