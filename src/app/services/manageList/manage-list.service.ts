import {Injectable, OnDestroy, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageListService{
  constructor() {
    let ls: string | null = localStorage.getItem("ToDoList")
    if (ls !== null){
      this.list = JSON.parse(ls);
      this.list.map(item => item.date = new Date(item.date))
    }
  }

  private _list: ToDoListItem[] = []

  get list(): ToDoListItem[] {
    return this._list;
  }

  set list(value: ToDoListItem[]) {
    this._list = value;
    this.updateLocalStorage()
  }

  addItem(item: ToDoListItem){
    this._list.push(item)
    this.updateLocalStorage()
  }

  deleteItem(index: number){
    this._list.splice(index, 1)
    this.updateLocalStorage()
  }

  updateLocalStorage(){
    localStorage.setItem("ToDoList", JSON.stringify(this._list))
  }
}

export type ToDoListItem = {
  title: string,
  content: string,
  date: Date,
  isDone: boolean
}
