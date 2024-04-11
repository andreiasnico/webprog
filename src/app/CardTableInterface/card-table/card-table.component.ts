import {Component, OnInit} from '@angular/core';
import {Card} from "../../Model/Card";
import {CardServiceService} from "../../Service/card-service.service";
import {Route, Router, Routes , RouterModule} from "@angular/router";
import path from "node:path";
import {MatCell, MatColumnDef, MatHeaderCell, MatHeaderRow, MatRow, MatTable} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
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
    MatRow
  ],
  templateUrl: './card-table.component.html',
  styleUrl: './card-table.component.css'
})
export class CardTableComponent implements OnInit{

  public resultCards!: Card[];

  public displayedColumns: string[] = ['name', 'cost', 'attack', 'health', 'description'];
  public hearthstoneCards: Card[] = [
    {
      cardId: "EX1_001",
      name: "Lightwarden",
      cost: 1,
      attack: 1,
      health: 2,
      text: "Whenever a character is healed, gain +2 Attack."
    },
    {
      cardId: "EX1_002",
      name: "The Black Knight",
      cost: 6,
      attack: 4,
      health: 5,
      text: "Battlecry: Destroy an enemy minion with Taunt."
    },
    {
      cardId: "EX1_003",
      name: "Big Game Hunter",
      cost: 5,
      attack: 4,
      health: 2,
      text: "Battlecry: Destroy a minion with 7 or more Attack."
    },
    ]
  public route : Routes = [
    {path: '/cards' , component:CardTableComponent }
  ]

 constructor(private cardService:CardServiceService , private router:Router ) {
    //this.resultCards = await this.cardService.findAllCards();

 }

  ngOnInit(): void {
    /* fix this */
    this.cardService.findAllCards().then((data) => {
      this.resultCards = data;
    });

    /* output the result */
    console.log(this.resultCards);
  }

}
