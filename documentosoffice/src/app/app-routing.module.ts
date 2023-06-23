import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcelComponent } from './excel/excel.component';
import { WordComponent } from './word/word.component';
import { PowerpointComponent } from './powerpoint/powerpoint.component';
import { PaintComponent } from './paint/paint.component';
import { LenguajesComponent } from './lenguajes/lenguajes.component';

const routes: Routes = [
  {
    path: 'excel',
    component: ExcelComponent
  },
  {
    path: 'word',
    component: WordComponent
  },
  {
    path: 'powerpoint',
    component: PowerpointComponent
  },
  {
    path: 'paint',
    component: PaintComponent
  },
  {
    path: 'lenguajes',
    component: LenguajesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
