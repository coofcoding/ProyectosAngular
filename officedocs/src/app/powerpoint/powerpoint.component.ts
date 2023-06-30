import { Component, OnInit } from '@angular/core';
//import PSPDFKit from 'pspdfkit';

@Component({
  selector: 'app-powerpoint',
  templateUrl: './powerpoint.component.html',
  styleUrls: ['./powerpoint.component.css']
})
export class PowerpointComponent implements OnInit {

  ngOnInit(): void {
    // PSPDFKit.load({
    //   disableWebAssemblyStreaming: true,
    //   // Use the assets directory URL as a base URL. PSPDFKit will download its library assets from here.
    //   baseUrl: location.protocol + "//" + location.host + "/assets/",
    //   document: "/assets/document.pdf",
    //   container: "#pspdfkit-container",
    // }).then(instance => {
    //   // For the sake of this demo, store the PSPDFKit for Web instance
    //   // on the global object so that you can open the dev tools and
    //   // play with the PSPDFKit API.
    //   (window as any).instance = instance;
    // })
  }
}
