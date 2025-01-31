import { Component } from '@angular/core';
import { MainContainerComponent } from "../layout/main-container/main-container.component";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [MainContainerComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

}
