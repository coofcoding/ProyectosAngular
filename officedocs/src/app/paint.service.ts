import { Injectable } from '@angular/core';

let infiniteX = Infinity;
let infiniteY = Infinity;
let colorHue = 0;

@Injectable({
  providedIn: 'root'
})
export class PaintService {
  private canvas: any;
  private ctx: any;

  initialize(mountPoint: HTMLElement) {
    this.canvas = mountPoint.querySelector('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.canvas.width = mountPoint.offsetWidth;
    this.canvas.height = mountPoint.offsetHeight;
    this.ctx.lineJoin = 'round';
    this.ctx.lineCap = 'round';
    this.ctx.lineWidth = 30;
  }

  paint({ clientX, clientY }: {clientX: any; clientY: any}) {
    this.ctx.strokeStyle = `hsl(${colorHue}, 100%, 60%)`;
    this.ctx.beginPath();
    if (Math.abs(infiniteX - clientX) < 100 && Math.abs(infiniteY - clientY) < 100) {
      this.ctx.moveTo(infiniteX, infiniteY);
    }
    this.ctx.lineTo(clientX, clientY);
    this.ctx.stroke();
    infiniteX = clientX;
    infiniteY = clientY;
    colorHue++;
  }

}
