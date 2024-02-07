import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {Map} from 'mapbox-gl';
// mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VybWFuY2FzdHIwMSIsImEiOiJjbDdlMDMyZHkwOWhlM3VtcDVoNGVuMGFnIn0.aFTAUSuYnXuXqSRWT7oiwg';

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css'
})
export class FullScreenPageComponent implements AfterViewInit {
  
  @ViewChild('map')
  divMap?: ElementRef

  ngAfterViewInit(): void {

    if( !this.divMap ) throw Error('El elemento HTML no fue encontrado')

    const map = new Map({
      accessToken: 'pk.eyJ1IjoiZ2VybWFuY2FzdHIwMSIsImEiOiJjbHF3bHZobnUwNGRpMmtxa2NzZ2RjZTFqIn0.ZfMUp4jXxGnyDWe2vC3ErQ',
      container: this.divMap?.nativeElement, 
      style: 'mapbox://styles/mapbox/streets-v12', 
      center: [-74.5, 40], 
      zoom: 9, 
    });
  }

}
