import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PaintService {

  constructor(private sanitizer: DomSanitizer) { }

  obtenerPintura() {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://jspaint.app/");
  }
}
