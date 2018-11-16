import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import {vehilelist} from '../carousel-prime/carousel-prime.component'
@Component({
  selector: 'app-ngxcarousel',
  templateUrl: './ngxcarousel.component.html',
  styleUrls: ['./ngxcarousel.css']
})
export class NgxcarouselComponent implements OnInit {
  public itemList: object[] = [];
    public Config  : NgxCarousel;
  constructor() { 
    this.itemList = vehilelist;
    // this.itemList = [
    //   {
    //     title: 'slide 1',
    //     color: 'green'
    //   },
    //   {
    //     title: 'slide 2',
    //     color: 'blue'
    //   },
    //   {
    //     title: 'slide 3',
    //     color: 'red'
    //   },
    //   {
    //     title: 'slide 4',
    //     color: 'yellow'
    //   },
    //   {
    //     title: 'slide 5',
    //     color: 'black'
    //   },
    //   {
    //     title: 'slide 6',
    //     color: 'purple'
    //   },
    //         {
    //     title: 'slide 7',
    //     color: 'magenta'
    //   },
    //   {
    //     title: 'slide 8',
    //     color: 'pink'
    //   },
    //   {
    //     title: 'slide 9',
    //     color: 'grey'
    //   }
    // ]



    this.Config = {
      grid: {xs: 3, sm: 3, md: 3, lg: 3, all: 0},
      slide: 3,
      speed: 1200,
      point: {
        visible: true
      },
      loop: false,
      touch: true,
      animation: 'lazy',            
      easing: 'ease'
    }
  }

  ngOnInit() {
  }
  
}
