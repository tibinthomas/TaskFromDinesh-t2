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
  selectedDistrictIndex: string;

  ngOnInit() {
    this.data.selectedDistrictIndex.subscribe((index) => { this.selectedDistrictIndex = index;
      console.log(this.selectedDistrictIndex);
      // tslint:disable-next-line:max-line-length
      this.data.fakeSDC.city.map(x => x[this.selectedDistrictIndex] !== undefined ? this.cityToDisplay = x[this.selectedDistrictIndex] : null);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    const change = changes.distToDisplay;
    const cityToDisplay = change.currentValue;
  }

}
