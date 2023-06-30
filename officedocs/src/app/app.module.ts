import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExcelComponent } from './excel/excel.component';
import { WordComponent } from './word/word.component';
import { PowerpointComponent } from './powerpoint/powerpoint.component';
import { PaintComponent } from './paint/paint.component';
import { LenguajesComponent } from './lenguajes/lenguajes.component';
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet';
import { DocumentEditorContainerModule } from '@syncfusion/ej2-angular-documenteditor';
import { PaintService } from './paint.service';
import { ContenidoComponent } from './contenido/contenido.component';



@NgModule({
  declarations: [
    AppComponent,
    ExcelComponent,
    WordComponent,
    PowerpointComponent,
    PaintComponent,
    LenguajesComponent,
    ContenidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpreadsheetAllModule,
    DocumentEditorContainerModule
  ],
  providers: [PaintService],
  bootstrap: [AppComponent]
})
export class AppModule { }
