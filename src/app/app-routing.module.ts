import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./Components/list/list.component";
import {AddItemComponent} from "./Components/add-item/add-item.component";
import {CompletedComponent} from "./Components/completed/completed.component";

const routes: Routes = [
  { path: '', component: ListComponent},
  { path: 'add-item', component: AddItemComponent},
  { path: 'completed', component: CompletedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
