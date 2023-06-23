import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExcelComponent } from './excel/excel.component';
import { WordComponent } from './word/word.component';
import { PowerpointComponent } from './powerpoint/powerpoint.component';
import { PaintComponent } from './paint/paint.component';
import { LenguajesComponent } from './lenguajes/lenguajes.component';

@NgModule({
  declarations: [
    AppComponent,
    ExcelComponent,
    WordComponent,
    PowerpointComponent,
    PaintComponent,
    LenguajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
