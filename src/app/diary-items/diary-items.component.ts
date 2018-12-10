import { Component, OnInit } from '@angular/core';
import { DairyService } from '../dairy.service';
import { DairyElement } from '../dairy-element';

@Component({
  selector: 'app-diary-items',
  templateUrl: './diary-items.component.html',
  styleUrls: ['./diary-items.component.css']
})
export class DiaryItemsComponent implements OnInit {

  public dairyText: string;

  constructor(public dairyService: DairyService) { }

  ngOnInit() {
    this.dairyText = '';
  }

  addDairyElement(): void {
    this.dairyService.addDairyElement(this.dairyText);
    this.dairyText = '';
  }

  removeDairyElement(id): void {
    this.dairyService.removeDairyElement(id);
  }
}
