import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PowerpointService {

  constructor(private sanitizer: DomSanitizer) { }

  obtenerEnlacePp() {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://docs.google.com/presentation/d/1DBzFidZPwrkjDGxo6LOjD8OjD0_bynMC_ZE7O5VEmL4/edit?usp=sharing")
  }
}
