import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {get} from "node:http";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Card} from "../Model/Card";


function castToCard(body: string): Card {

  let myCard: { cardId: string; name: string };
  myCard = {
    cardId: body[0],
    name: body[2]
  }
  return <Card>myCard;

}

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {
  private baseUrl: string;
  private header: any;
  private axios = require("axios");
  constructor(private http: HttpClient) {
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
      header: this.header
    }
    try {
      const response = await this.axios.request(option)
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  public async findSingleCard(name: string): Promise<any> {

    const option = {
      method: 'GET',
      url: this.baseUrl + '/cards/' + name,
      header: this.header
    }

    try {
      const response = await this.axios.request(option)
      return castToCard(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  public async findCardByClass(hsClass: string): Promise<any> {
    const option = {
      method: 'GET',
      url: this.baseUrl + '/cards/classes/' + hsClass,
      header: this.header
    }

    try {
      const response = await this.axios.request(option)
      return castToCard(response.data)
    } catch (error) {
      console.log(error);
    }
  }


  public async findCardByRace(race: string): Promise<any>{
    const option = {
      method: 'GET',
      url: this.baseUrl + '/cards/races/' + race,
      header: this.header
    }

    try {
      const response = await this.axios.request(option)
      return castToCard(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  public async findCardByCardset(cardSet: string): Promise<any> {
    const option = {
      method: 'GET',
      url: this.baseUrl + '/cards/sets/' + cardSet,
      header: this.header
    }

    try {
      const response = await this.axios.request(option)
      return castToCard(response.data)
    } catch (error) {
      console.log(error);
    }

  }

  public async findCardsByType(cardType: string): Promise<any> {
    const option = {
      method: 'GET',
      url: this.baseUrl + '/cards/types/' + cardType,
      header: this.header
    }

    try {
      const response = await this.axios.request(option)
      return castToCard(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  public async findAllCards(): Promise<any> {
    const option = {
      method: 'GET',
      url: this.baseUrl + '/cards',
      header: this.header
    }
    try {
      const response = await this.axios.request(option)
      return castToCard(response.data)
    } catch (error) {
      console.log(error);
    }
  }


}

