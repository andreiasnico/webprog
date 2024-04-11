import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {get} from "node:http";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Card} from "../Model/Card";
import axios from "axios";


function castToCards(body: any): Card[] {
  return body.map((cardData: any) => {
    return {
      cardId: cardData.cardId,
      name: cardData.name,
      cost: cardData.cost,
      attack: cardData.attack,
      health: cardData.health,
      text: cardData.text,
      type: cardData.type,
      picture: cardData.img
    };
  });



}

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {
  private baseUrl: string;
  private header: any;
  constructor() {
    this.baseUrl = "https://omgvamp-hearthstone-v1.p.rapidapi.com";
    this.header = {
      'X-RapidAPI-Key': '6847fb838amsha289d9dfc14b473p1f8af5jsnd001bb4c6026',
      'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }

  }

  public async findInfo(): Promise<any> {
    const option = {
      method: 'GET',
      url: this.baseUrl + '/info',
      headers: this.header
    }
    try {
      const response = await axios.request(option)
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  public async findSingleCard(name: string): Promise<any> {

    const option = {
      method: 'GET',
      url: this.baseUrl + '/cards/' + name,
      headers: this.header
    }

    try {
      const response = await axios.request(option)
      return castToCards(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  public async findCardByClass(hsClass: string): Promise<any> {
    const option = {
      method: 'GET',
      url: this.baseUrl + '/cards/classes/' + hsClass,
      headers: this.header
    }

    try {
      const response = await axios.request(option)
      console.log(response.data);
      return castToCards(response.data);

    } catch (error) {
      console.log(error);
    }
  }


  public async findCardByRace(race: string): Promise<any>{
    const option = {
      method: 'GET',
      url: this.baseUrl + '/cards/races/' + race,
      headers: this.header
    }

    try {
      const response = await axios.request(option)
      return castToCards(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  public async findCardByCardset(cardSet: string): Promise<any> {
    const option = {
      method: 'GET',
      url: this.baseUrl + '/cards/sets/' + cardSet,
      headers: this.header
    }

    try {
      const response = await axios.request(option)
      return castToCards(response.data)
    } catch (error) {
      console.log(error);
    }

  }

  public async findCardsByType(cardType: string): Promise<any> {
    const option = {
      method: 'GET',
      url: this.baseUrl + '/cards/types/' + cardType,
      headers: this.header
    }

    try {
      const response = await axios.request(option)
      return castToCards(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  public async findAllCards(): Promise<any> {
    const option = {
      method: 'GET',
      url: this.baseUrl + '/cards',
      headers: this.header
    }
    try {
      const response = await axios.request(option)
      return castToCards(response.data)
    } catch (error) {
      console.log(error);
    }
  }


}

