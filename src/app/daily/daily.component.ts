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

  playStyle = {
    UNTIL: 'until',
    FOREVER: 'forever'
  };

  lottoNums = '----';
  currentNum = '----';
  numberOfDigits: string[] = ['1', '2', '3', '4'];
  selectedDigits = 'Number of Digits';
  selection = '4';
  playStyleSelection = '';
  numberOfDaysToPlay = '1';

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

  generateLottoNumbers(nDigits: string, playstyle: string) {

    const numDigits = parseInt(nDigits, 10);
    const nums: number[] = [];
    this.playStyleSelection = playstyle;
    this.lottoNums = '';

    this.pickNumbers(numDigits, nums);
    this.addDashesToRemaining(numDigits);
  }

  private pickNumbers(numDigits: number, nums: number[]) {
    for (let i = 0; i < numDigits; i++) {
      nums[i] = Math.floor(Math.random() * 10);
      this.lottoNums += `${nums[i]}`;
    }
  }

  private addDashesToRemaining(numDigits: number) {
    for (let i = 0; i < this.numberOfDigits.length - numDigits; i++) {
      this.lottoNums += '-';
    }
  }

  playLottoNumbersGame(nDigits: string, playstyle: string) {

    this.determineNumberOfDaysToPlay();
    this.generateLottoNumbers(nDigits, playstyle);
    this.tryToFindMatch();

  }
  tryToFindMatch() {
    const days: number = parseInt(this.numberOfDaysToPlay, 10);

    for (let i = 0; i < days; i++) {

    }
  }

  determineNumberOfDaysToPlay() {

    const dateStr = this.buildDateStringFromModel();
    const todayStr = this.buildTodayDateString();
    const start = moment(todayStr, 'YYYY-MM-DD');
    const end = moment(dateStr, 'YYYY-MM-DD');

    // Difference in number of days
    const diffDays = moment.duration(end.diff(start)).asDays();
    this.numberOfDaysToPlay = `${diffDays.toFixed(0)}`;
  }

  buildDateStringFromModel(): string {
    return `${this.model.year}-${this.model.month}-${this.model.day}`;
  }

  buildTodayDateString(): string {
    return `${this.calendar.getToday().year}-${this.calendar.getToday().month}-${this.calendar.getToday().day}`;
  }
}
