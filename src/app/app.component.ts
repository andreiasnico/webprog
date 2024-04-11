import { Component } from '@angular/core';
import {RouterLink, RouterOutlet, Routes} from '@angular/router';
import {MainComponent} from "./CardTableInterface/main/main.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  public routes:Routes = [
    {path:'' , component:MainComponent}
  ]
}
