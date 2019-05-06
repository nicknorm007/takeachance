import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {

  lottoNums = '';

  numberOfDigits = new FormControl('4');

  constructor() { }

  ngOnInit() {
  }

  generateLottoNumbers(numDigits: number) {

    const nums: number[] = [];
    // console.log(moment().format('MMM Do YY'));

    this.lottoNums = '';

    for ( let i = 0; i < numDigits; i++) {
      nums[i] = Math.floor(Math.random() * 10);
      this.lottoNums += `${nums[i]}`;
    }

  }

}
