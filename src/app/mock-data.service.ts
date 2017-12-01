import { SDC } from './model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


export class Data {

  fakeSDC: SDC = {
  state: ['A', 'B', 'C'],
  dist: [{'A': ['Aa', 'Ab', 'Ac']}, {'B': ['Ba', 'Bb']}, {'C': ['Ca', 'Cb']}],
  city: [{'Aa': ['Aa1', 'Aa2', 'Aa3']}, {'Ab': ['Ab1', 'Ab2']}, {'Ac': ['Ac1', 'Ac2']},
        {'Ba': ['Ba1', 'Ba2', 'Ba3']}, {'Bb': ['Bb1', 'Bb2']},
        {'Ca': ['Ca1', 'Ca2', 'Ca3']}, {'Cb': ['Cb1', 'Cb2', 'Cb3', 'Cb4']}]
};


public selectedStateIndex = new BehaviorSubject<number>(0);
public selectedDistrictIndex = new BehaviorSubject<number>(0);

changeInselectedStateIndex(index: number) {
  this.selectedStateIndex.next(index);
}

changeInselectedDistrictIndex(index: number) {
  this.selectedDistrictIndex.next(index);
}

}
