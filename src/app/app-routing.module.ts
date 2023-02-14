import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./Components/list/list.component";
import {AddItemComponent} from "./Components/add-item/add-item.component";
import {HistoryComponent} from "./Components/history/history.component";

const routes: Routes = [
  { path: '', component: ListComponent},
  { path: 'add-item', component: AddItemComponent},
  { path: 'history', component: HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
