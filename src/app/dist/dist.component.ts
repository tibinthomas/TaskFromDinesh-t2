import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../mock-data.service';
import { OnChanges } from '@angular/core';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-dist',
  templateUrl: './dist.component.html',
  styleUrls: ['./dist.component.css']
})
export class DistComponent implements OnChanges, OnInit {

  constructor(private data: Data) { }

  distToDisplay: string[] = [];
  selectedDistIndex: number;

  ngOnInit() {
    this.distToDisplay = Object.values(this.data.fakeSDC.dist[this.data.selectedDistrictIndex])[0];
  }

  ngOnChanges(changes: SimpleChanges) {
    const change = changes.distToDisplay;
    const distToDisplay = change.currentValue;
  }

  onClickingDropdown(distArrayFromFormEvent) {
    this.distToDisplay = distArrayFromFormEvent;
  }

  onSelectingDist() {
    this.data.selectedDistrictIndex = this.selectedDistIndex;
  }
}
