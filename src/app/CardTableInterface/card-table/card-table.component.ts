import {Component, OnInit} from '@angular/core';
import {Card} from "../../Model/Card";
import {CardServiceService} from "../../Service/card-service.service";
import {Route, Router, Routes , RouterModule} from "@angular/router";
import path from "node:path";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {FormsModule} from "@angular/forms";
@Component({
  selector: 'app-card-table',
  standalone: true,
  imports: [
    MatTable,
    MatSort,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    FormsModule
  ],
  templateUrl: './card-table.component.html',
  styleUrl: './card-table.component.css'
})
export class CardTableComponent implements OnInit{

  public resultCards: Card[] =[];
  public filterClass: string = "";
  public filterType: string = "";
  public filterName: string = "";

  async applyFilter() {
    if (this.filterClass) {
      this.resultCards = await this.cardService.findCardByClass(this.filterClass);
    }  else if (this.filterType) {
      this.resultCards = await this.cardService.findCardsByType(this.filterType);
    }
    this.resultCards = this.resultCards.filter(card =>
      card.cardId !== undefined &&
      card.name !== undefined &&
      card.cost !== undefined &&
      card.attack !== undefined &&
      card.health !== undefined &&
      card.text !== undefined &&
      card.type !== undefined
    );
  }
  public displayedColumns: string[] = ['name', 'cost', 'attack', 'health', 'description','picture'];

  public route : Routes = [
    {path: '/cards' , component:CardTableComponent }
  ]

 constructor(private cardService:CardServiceService , private router:Router ) {
    //this.resultCards = await this.cardService.findAllCards();

 }

  async ngOnInit(): Promise<void> {
    /* fix this */
    try {
      this.resultCards = await this.cardService.findSingleCard("Wisp");
      console.log(this.resultCards);

    }
    catch (error)
    {
      console.log(error);
    }
    /* output the result */

  }

}
