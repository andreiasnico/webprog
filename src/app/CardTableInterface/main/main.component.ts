import { Component } from '@angular/core';
import {Router, RouterLink, Routes} from "@angular/router";
import {CardTableComponent} from "../card-table/card-table.component";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterLink,
    MatButton
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  public routes:Routes = [
    {path:'/card-table' , component:CardTableComponent},
    {path:'/deck',}
  ]

  constructor(private router:Router) {
  }
}
