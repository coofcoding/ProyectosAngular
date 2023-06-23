import { Component } from '@angular/core';
import { PowerpointService } from '../powerpoint.service';

@Component({
  selector: 'app-powerpoint',
  templateUrl: './powerpoint.component.html',
  styleUrls: ['./powerpoint.component.css']
})
export class PowerpointComponent {
  documentoPowerPoint: any;

  constructor(private powerpointService: PowerpointService) {}

  ngOnInit() {
    this.documentoPowerPoint = this.powerpointService.obtenerEnlacePp();
  }
}
