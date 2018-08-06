import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ShopCardComponent } from './shop-card/shop-card.component';
import { CountService } from './count.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ShopCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
