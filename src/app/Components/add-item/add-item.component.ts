import { Component } from '@angular/core';
import * as events from "events";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {ManageListService, ToDoListItem} from "../../services/manageList/manage-list.service";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {Router} from "@angular/router";
import {FormControl, Validators} from "@angular/forms";
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent {

  title: string | undefined;
  content: string | undefined;
  dateValue: Date | null = null;
  formControl = new FormControl('', [Validators.required]);

  constructor(private manageList: ManageListService, private dateAdapter: DateAdapter<Date>, public router: Router) {
    this.dateAdapter.setLocale('de-CH')
  }
  addEvent(date: MatDatepickerInputEvent<Date>) {
    this.dateValue = date.value;
  }

  addItem(){
    if (!this.title || !this.content || !this.dateValue){
      return;
    }else{
      this.manageList.addItem({title: this.title, content: this.content, date: this.dateValue, isDone: false})
      this.router.navigate(['/'])
    }
  }

}
