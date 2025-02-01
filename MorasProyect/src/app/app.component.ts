import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { SocialMediaComponent } from '../components/social-media/social-media.component';
import { TrailerVideoComponent } from '../trailer-video';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ToolbarComponent,
    WelcomeComponent,
    SocialMediaComponent,
    TrailerVideoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MorasProyect';
}
