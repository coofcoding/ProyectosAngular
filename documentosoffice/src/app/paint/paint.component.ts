import { Component } from '@angular/core';
import { PaintService } from '../paint.service';

@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.css']
})
export class PaintComponent {
  documentoPaint: any;

  constructor(private paintService: PaintService) {}

  ngOnInit() {
    this.documentoPaint = this.paintService.obtenerPintura();
  }

}
