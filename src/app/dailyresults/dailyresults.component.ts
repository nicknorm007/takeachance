import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dailyresults',
  templateUrl: './dailyresults.component.html',
  styleUrls: ['./dailyresults.component.scss']
})
export class DailyresultsComponent implements OnInit {

  @Input() luckyNumber: string;
  @Input() numSelected: string;
  @Input() daysToPlay: string;
  @Input() dateSelected: Object;
  @Input() currentNumber: string;
  @Input() foundMatch: boolean;
  @Input() dayNumberHit: string;
  @Input() dateHit: string;


  constructor() { }

  ngOnInit() {
  }

}
