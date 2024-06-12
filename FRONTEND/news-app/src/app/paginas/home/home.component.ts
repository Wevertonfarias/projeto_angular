import { Component, AfterViewInit, ElementRef } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
      $(this.el.nativeElement).ready(() => {
          $('.carousel').slick({
              dots: true,
              infinite: true,
              speed: 650,
              slidesToShow: 1,
              adaptiveHeight: true,
              autoplay: true,
              autoplaySpeed: 2000,
              arrows: true
          });
      });
  }

}

