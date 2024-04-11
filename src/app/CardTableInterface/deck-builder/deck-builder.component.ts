import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatCell, MatCellDef, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatTable} from "@angular/material/table";
import {Card} from "../../Model/Card";
import {CardServiceService} from "../../Service/card-service.service";

@Component({
  selector: 'app-deck-builder',
  standalone: true,
  imports: [
    FormsModule,
    MatSelect,
    MatOption,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatColumnDef
  ],
  templateUrl: './deck-builder.component.html',
  styleUrl: './deck-builder.component.css'
})
export class DeckBuilderComponent implements OnInit{

  searchQuery: string = '';
  selectedClass: string = '';
  classes: string[] = ['Hunter', 'Rouge', 'Druid', 'Mage', 'Priest', 'Demon Hunter', 'Death Knight', 'Shaman', 'Paladin', 'Warrior', 'Warlock'];
  deckName: string = 'Deck Name';
  cards!: Card[]
  // Example data source for the table
  dataSource = [
    { deckName: 'Deck 1'  , cards:[]},
    { deckName: 'Deck 2' , cards: []},
    // Add more data as needed
  ];

  displayedColumns: string[] = ['deckName'];

  constructor() {
  }

  ngOnInit(): void {
    this.cards =[];
  }
}
