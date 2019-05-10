import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dailyresults',
  templateUrl: './dailyresults.component.html',
  styleUrls: ['./dailyresults.component.scss']
})
export class DailyresultsComponent implements OnInit {

  @Input() luckyNumber: string;
  @Input() numSelected: string;
  @Input() dateSelected: Object;

  constructor() { }

  ngOnInit() {
  }

}
