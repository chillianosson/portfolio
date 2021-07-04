import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { AfterSlideDetail, BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'app-light-gallery',
  templateUrl: './light-gallery.component.html',
  styleUrls: ['./light-gallery.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class LightGalleryComponent implements OnInit {
  settings = {
    counter: false,
    plugins: [lgZoom]
  };

  constructor() { }

  ngOnInit(): void {
  }

  onGalleryInit() {
    console.log('gallery initialised');
  }

  onBeforeOpen() {
    console.log('just before opening');
  }

  onAfterAppendSlide() {
    console.log('just after slide appended');
  }

  onAfterAppendSubHtml() {
    console.log('just after appending title and/or description')
  }

  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

  onBeforeNextSlide() {

  }
  onBeforePrevSlide() {

  }
  onBeforeClose() {

  }
  onAfterClose({ instance }: any) {
    console.log('instance ', instance);
  }

}
