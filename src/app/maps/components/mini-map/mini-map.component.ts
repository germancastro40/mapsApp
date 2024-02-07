import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

import {Map, Marker} from 'mapbox-gl'

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css'
})
export class MiniMapComponent implements AfterViewInit {

  @ViewChild('map')
  divMap?: ElementRef

  @Input()
  lngLat ?:[number, number]
  
  ngAfterViewInit(): void {
    if( !this.divMap ) throw Error('El elemento HTML no fue encontrado')
    if( !this.lngLat ) throw Error('El elemento lnglnt no debe ser nulo')

    const map = new Map({
      accessToken: 'pk.eyJ1IjoiZ2VybWFuY2FzdHIwMSIsImEiOiJjbHF3bHZobnUwNGRpMmtxa2NzZ2RjZTFqIn0.ZfMUp4jXxGnyDWe2vC3ErQ',
      container: this.divMap?.nativeElement, 
      style: 'mapbox://styles/mapbox/streets-v12', 
      center: this.lngLat, 
      zoom: 15, 
      interactive: false
    });   
    
    new Marker()
    .setLngLat( this.lngLat )
    .addTo( map )
  }

}
