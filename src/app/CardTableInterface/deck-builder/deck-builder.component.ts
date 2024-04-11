import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatOption, MatSelect} from "@angular/material/select";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {Card} from "../../Model/Card";
import {CardServiceService} from "../../Service/card-service.service";
import {NgForOf} from "@angular/common";

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
    MatColumnDef,
    MatHeaderRow,
    MatRow,
    NgForOf,
    MatHeaderRowDef,
    MatRowDef
  ],
  templateUrl: './deck-builder.component.html',
  styleUrl: './deck-builder.component.css'
})
export class DeckBuilderComponent implements OnInit{

  searchQuery: string = '';
  selectedClass: string = '';
  classes: string[] = ['Hunter', 'Rouge', 'Druid', 'Mage', 'Priest', 'Demon Hunter', 'Death Knight', 'Shaman', 'Paladin', 'Warrior', 'Warlock'];
  deckName: string = 'Deck Name';
  selectedCards: Card[] = [];
  public card ?: Card;
  // Example data source for the table
  dataSource = [
    { deckName: 'Deck 1'  , cards:[]},
    { deckName: 'Deck 2' , cards: []},
    // Add more data as needed
  ];

  displayedColumns: string[] = ['cards', 'add'];
  filteredCards: Card[] = [];

  constructor(private cardService: CardServiceService) {
  }
  addCardToDeck(card: Card) {
    const sameCards = this.selectedCards.filter(selectedCard => selectedCard.cardId === card.cardId);
    if (sameCards.length < 2) {
      this.selectedCards.push(card);
    } else {
      console.log('You cannot add more than 2 of the same card to a deck.');
    }
  }
  searchCards(): Promise<Card[]> {
    return this.cardService.findSingleCard(this.searchQuery);
  }
  async searchAndAddCard(): Promise<void> {
    const cards = await this.searchCards();
    if (cards.length > 0) {
      this.addCardToDeck(cards[0]);
    } else {
      console.log('No cards found with the provided name.');
    }
  }

  ngOnInit(): void {
  }
}
