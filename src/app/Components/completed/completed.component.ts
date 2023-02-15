import {Component, OnInit} from '@angular/core';
import {ManageListService, ToDoListItem} from "../../services/manageList/manage-list.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-history',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit{

  historyList: ToDoListItem[] = []

  constructor(private managelist: ManageListService, private router: Router) {
  }

  ngOnInit(): void {
    this.historyList = this.managelist.list
  }

  delete(index: number){
    this.managelist.deleteItem(index)
  }

  redirect(){
    this.router.navigate(['/'])
  }

  toggleStatus(index: number){
    this.historyList[index].isDone = !this.historyList[index].isDone
    this.managelist.updateLocalStorage()
  }

  hasFinished(){
    return this.historyList.filter(item => item.isDone).length !== 0
  }


}
