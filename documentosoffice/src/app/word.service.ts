import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor(private sanitizer: DomSanitizer) { }

  obtenerRuta() {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://docs.google.com/document/d/19jpT-DYod_HAn8nArF3kEOdTXsumqE0huIPIBERM2YE/edit?usp=sharing");
  }
}
