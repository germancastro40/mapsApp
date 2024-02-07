import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CounterAloneComponent } from '../../components/counterAlone/counterAlone.component';
import { SideMenuComponent } from '../../../maps/components/side-menu/side-menu.component';

@Component({
  selector: 'app-alone-pages',
  standalone: true,
  imports: [ CounterAloneComponent ],
  templateUrl: './alonePages.component.html',
})
export class AlonePagesComponent { 
  
 }
