import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../mock-data.service';
import { OnChanges } from '@angular/core';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-dist',
  templateUrl: './dist.component.html',
  styleUrls: ['./dist.component.css']
})
export class DistComponent implements OnInit {

  constructor(private data: Data) { }

  distToDisplay: string[] = [];
  selectedDistIndex: any;

  ngOnInit() {
    this.data.selectedStateIndex.subscribe((index) => { this.selectedDistIndex = index;
      this.distToDisplay = Object.values(this.data.fakeSDC.dist[this.selectedDistIndex])[0];
    });
  }

  changeInselectedDistrictIndex() {
    this.data.changeInselectedDistrictIndex(this.selectedDistIndex);
  }
}
