import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { StarsComponent } from './stars/stars.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    ProductComponent,
    SearchComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
