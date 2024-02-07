import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SideMenuComponent } from '../../../maps/components/side-menu/side-menu.component';

@Component({
  selector: 'counter-alone',
  standalone: true,
  imports: [ CommonModule, SideMenuComponent ],
  templateUrl: './counterAlone.component.html',
  styleUrl: './counterAlone.component.css'
})
export class CounterAloneComponent { 

  @Input()
  public counter:number = 1
   
}
