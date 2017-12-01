import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Data } from '../mock-data.service';
import { disableDebugTools } from '@angular/platform-browser/src/browser/tools/tools';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  constructor(private data: Data) { }

  statesToDisplay: string[] = [];
  selectedStateIndex: number;

  ngOnInit() {
    this.statesToDisplay = this.data.fakeSDC.state;
  }

  onSelectingState() {
    this.data.selectedDistrictIndex = this.selectedStateIndex;
  }
}
