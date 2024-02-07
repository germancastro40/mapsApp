import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem{
  route:string,
  name:string
}

@Component({
  selector: 'side-menu',
  standalone: true,
  imports:[CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems:MenuItem[] = [
    {name: 'Fullscreen', route: '/maps/fullscreen'},
    {name: 'Zoom Range', route: '/maps/zoom-range'},
    {name: 'Markers', route: '/maps/markers'},
    {name: 'Properties', route: '/maps/properties'},
    {name: 'Alone page', route: '/alone'}
  ]

}
