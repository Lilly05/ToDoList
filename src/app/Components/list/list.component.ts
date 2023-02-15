import {Component, OnInit} from '@angular/core';
import {ManageListService, ToDoListItem} from "../../services/manageList/manage-list.service";
import {Router} from "@angular/router";
import {state} from "@angular/animations";
import * as repl from "repl";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  list: ToDoListItem[] = [];

  constructor(private manageList: ManageListService, public router: Router) {
  }
  ngOnInit(): void {
      this.list = this.manageList.list;
  }

  delete(index: number){
    this.manageList.deleteItem(index)
  }

  toggleStatus(index: number){
    this.list[index].isDone = !this.list[index].isDone
    this.manageList.updateLocalStorage()
  }

  hasUnfinished(){
    return this.list.filter(item => !item.isDone).length !== 0
  }

  isDueDatePassed(index: number): boolean{
    let today: Date = new Date();
    return new Date(this.list[index].date.toDateString()) < new Date(today.toDateString())
  }

}
