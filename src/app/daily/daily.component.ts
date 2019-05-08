import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {

  lottoNums = '';

  numberOfDigits: string[] = ['1', '2', '3', '4'];
  selectedDigits = 'Number of Digits';

  model: NgbDateStruct;
  date: {year: number, month: number};

  constructor(private calendar: NgbCalendar) {
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  ngOnInit() {
    this.selectToday();
  }

  generateLottoNumbers(nDigits: string) {

    const numDigits = parseInt(nDigits, 10);
    const nums: number[] = [];
    // console.log(moment().format('MMM Do YY'));

    this.lottoNums = ''; 

    for ( let i = 0; i < numDigits; i++) {
      nums[i] = Math.floor(Math.random() * 10);
      this.lottoNums += `${nums[i]}`;
    }

  }

}
