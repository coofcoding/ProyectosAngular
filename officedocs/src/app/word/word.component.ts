import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '@syncfusion/ej2-angular-documenteditor';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css'],
  providers: [ToolbarService]
})
export class WordComponent implements OnInit {

  ngOnInit(): void {
  }
}
