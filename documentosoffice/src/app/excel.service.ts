import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor(private sanitizer: DomSanitizer) { }

  obtenerEnlaceExcel() {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://docs.google.com/spreadsheets/d/1YnjHy2W_8IIz6F69kVqxNgignuGAIJ8onFaSLvv_-Tk/edit?usp=sharing");
  }
}
