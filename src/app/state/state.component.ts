import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Data } from '../mock-data.service';
import { disableDebugTools } from '@angular/platform-browser/src/browser/tools/tools';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  constructor(private data: Data) { }

  selectedStateIndex: number;
  statesToDisplay: string[] = [];

  ngOnInit() {
    this.statesToDisplay = this.data.fakeSDC.state;
  }

  changeInselectedStateIndex() {
    this.data.changeInselectedStateIndex(this.selectedStateIndex);
  }

}
