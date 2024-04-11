import { Routes } from '@angular/router';
import {MainComponent} from "./CardTableInterface/main/main.component";
import {CardTableComponent} from "./CardTableInterface/card-table/card-table.component";
import {DeckBuilderComponent} from "./CardTableInterface/deck-builder/deck-builder.component";

export const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'card-table',component:CardTableComponent},
  {path:'deck',component:DeckBuilderComponent}
];
