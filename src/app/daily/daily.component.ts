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

  // game vars
  playingStyleSelection = '';
  lottoNums = '----';
  currentNum = '----';
  currentLength = 4;
  numberOfDigits: string[] = ['1', '2', '3', '4'];
  selectedDigits = 'Number of Digits';
  selection = '4';
  playStyleSelection = '';
  numberOfDaysToPlay = '1';
  gotMatch = false;
  dayNumberHit = '0';
  dateHit = '';

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
    this.playStyleSelection = playstyle;
    this.lottoNums = '';

    this.pickNumbers(numDigits);
    this.addDashesToRemaining(numDigits);
  }

  private pickNumbers(numDigits: number, tryingMatch: boolean = false) {
    const nums: number[] = [];
    for (let i = 0; i < numDigits; i++) {
      nums[i] = Math.floor(Math.random() * 10);
      if (!tryingMatch) {
        this.lottoNums += `${nums[i]}`;
      } else {
        this.currentNum += `${nums[i]}`;
      }

    }
  }

  private addDashesToRemaining(numDigits: number, tryingMatch: boolean = false) {
    for (let i = 0; i < this.numberOfDigits.length - numDigits; i++) {
      if (!tryingMatch) {
        this.lottoNums += '-';
      } else {
        this.currentNum += '-';
      }
    }
  }

  private checkForMatch(dayNumber: number) {

    if (this.currentNum === this.lottoNums) {

      this.dayNumberHit = '' + dayNumber;
      this.gotMatch = true;
      this.calculateFutureDateHit(dayNumber);
    }

  }

  playLottoNumbersGame(nDigits: string, playstyle: string) {

    this.dayNumberHit = '0';
    this.gotMatch = false;
    // tslint:disable-next-line:radix
    this.currentLength = parseInt(nDigits);
    this.playingStyleSelection = playstyle;
    this.determineNumberOfDaysToPlay();
    this.generateLottoNumbers(nDigits, playstyle);
    this.tryToFindMatch();

  }
  tryToFindMatch() {
    const forever =  Number.MAX_SAFE_INTEGER;
    const days: number = ( this.playingStyleSelection === this.playStyle.FOREVER ) ?
      forever : parseInt(this.numberOfDaysToPlay, 10);
    for (let i = 0; i < days; i++) {
      if ( this.gotMatch ) {
        break;
      }
      this.currentNum = '';
      this.pickNumbers(this.currentLength, true);
      this.addDashesToRemaining(this.currentLength, true);
      this.checkForMatch(i);
    }
  }

  calculateFutureDateHit(days: number) {

    const todayStr = this.buildTodayDateString();
    const diff = moment(todayStr, 'YYYY-MM-DD').add(days, 'days');
    this.dateHit = diff.format('MM/DD/YYYY');

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
