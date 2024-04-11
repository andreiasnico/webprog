import {Card} from "./Card";

export interface Deck {
  deckId: number;
  name: string;
  cards: Card[];
}
