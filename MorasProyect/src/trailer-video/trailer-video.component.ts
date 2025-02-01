import { Component } from '@angular/core';
import { IframeVideoComponent, MainContainerComponent } from '../components';

@Component({
  selector: 'app-trailer-video',
  standalone: true,
  imports: [ IframeVideoComponent, MainContainerComponent ],
  templateUrl: './trailer-video.component.html',
  styleUrl: './trailer-video.component.scss'
})
export class TrailerVideoComponent {
  videoSrc = "https://www.youtube.com/embed/Fa5CWnhAkhs?controls=0&autoplay=1&loop=1&mute=1"
}
