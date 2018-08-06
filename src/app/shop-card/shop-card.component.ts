import { Component, OnInit } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.css']
})
export class ShopCardComponent implements OnInit {
  liked = false;
  addToFavourite() {
    this.liked = true ;
    console.log('Added to fav');
    this.countService.incrementCount();
  }
  constructor(private countService: CountService) {
  }

  ngOnInit() {
  }

}
