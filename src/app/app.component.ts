import { Component, ViewChild } from '@angular/core';
import { viewStart } from '../../node_modules/@angular/core/src/render3/instructions';
import { ShopCardComponent } from './shop-card/shop-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
