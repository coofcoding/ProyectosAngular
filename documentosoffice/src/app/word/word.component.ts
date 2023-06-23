import { Component } from '@angular/core';
import { WordService } from '../word.service';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent {
  documentoWord: any;

  constructor(private wordService: WordService) {}

  ngOnInit() {
    this.documentoWord = this.wordService.obtenerRuta();
  }
}
