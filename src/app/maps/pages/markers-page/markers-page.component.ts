import { Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

interface MarkerAndColor {
  color: string
  marker: Marker
}

interface PlainMarker {
  color:string
  lngLat: number[]
}

@Component({
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent {

  public markers : MarkerAndColor[] = []

  public map?:Map
  public lngLat: LngLat = new LngLat(-74.5, 40)

  @ViewChild('map')
  divMap?: ElementRef

  ngAfterViewInit(): void {

    if( !this.divMap ) throw Error('El elemento HTML no fue encontrado')

     this.map = new Map({
      accessToken: 'pk.eyJ1IjoiZ2VybWFuY2FzdHIwMSIsImEiOiJjbHF3bHZobnUwNGRpMmtxa2NzZ2RjZTFqIn0.ZfMUp4jXxGnyDWe2vC3ErQ',
      container: this.divMap?.nativeElement, 
      style: 'mapbox://styles/mapbox/streets-v12', 
      center: this.lngLat, 
      zoom: 10, 
    })

    this.readFromLocalStorage();
  }

  createMarker(){

    if(!this.map) return;

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lnglat = this.map.getCenter();

    this.addMarker(lnglat, color)
  }

  addMarker( lnglat:LngLat, color:string = 'red'){
    if(!this.map) return;

    const marker = new Marker({
      color:color,
      draggable: true
    })
    .setLngLat( lnglat )
    .addTo( this.map )

    this.markers.push({
      color,
      marker
    })

    marker.on('dragend', () => this.saveToLocalStorage())

    this.saveToLocalStorage()
  }

  deleteMarker(i: number){
    this.markers[i].marker.remove()
    this.markers.splice( i, 1 );
  }

  flyTo(marker:Marker){
    this.map?.flyTo({
      zoom:14,
      center: marker.getLngLat()
    })
  }

  saveToLocalStorage(){
    const plainMarker: PlainMarker[] = this.markers.map( ({color, marker}) => {
      return {
        color,
        lngLat: marker.getLngLat().toArray()
      }
    })

    localStorage.setItem('plainMaker', JSON.stringify(plainMarker))
  }

  readFromLocalStorage(){
    const plainMarkersString = localStorage.getItem('plainMaker') ??  '[]'

    const plainMarkers: PlainMarker[] = JSON.parse( plainMarkersString )

    plainMarkers.forEach( ({color,lngLat})=>{
      const [lng, lat] =lngLat;

      const coords = new LngLat(lng, lat)
      this.addMarker(coords, color)
    })
  }

}
