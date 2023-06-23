import { Component } from '@angular/core';
import { ExcelService } from '../excel.service';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css']
})
export class ExcelComponent {
  documentoExcel: any;

  constructor(private excelService: ExcelService) {}

  ngOnInit() {
    this.documentoExcel = this.excelService.obtenerEnlaceExcel();
  }

}
