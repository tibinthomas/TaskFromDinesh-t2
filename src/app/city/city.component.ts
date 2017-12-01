import { Component, OnInit } from '@angular/core';
import { Data } from '../mock-data.service';
import { OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit, OnChanges {

  constructor(private data: Data) { }

  cityToDisplay: string[] = [];

  ngOnInit() {
    this.cityToDisplay = Object.values(this.data.fakeSDC.city[this.data.selectedDistrictIndex])[0];
  }

  ngOnChanges(changes: SimpleChanges) {
    const change = changes.distToDisplay;
    const cityToDisplay = change.currentValue;
  }

}
