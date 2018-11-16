import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CarouselModule} from 'primeng/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselPrimeComponent } from './carousel-prime/carousel-prime.component';
import { NgxcarouselComponent } from './ngxcarousel/ngxcarousel.component';
import { NgxCarouselModule } from 'ngx-carousel'

@NgModule({
  declarations: [
    AppComponent,
    CarouselPrimeComponent,
    NgxcarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, CarouselModule , NgxCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
