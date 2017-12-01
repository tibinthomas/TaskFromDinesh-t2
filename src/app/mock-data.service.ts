import { SDC } from './model';

export class Data {

  fakeSDC: SDC = {
  state: ['A', 'B', 'C'],
  dist: [{'A': ['Aa', 'Ab', 'Ac']}, {'B': ['Ba', 'Bb']}, {'C': ['Ca', 'Cb']}],
  city: [{'Aa': ['Aa1', 'Ab2', 'Ac3']}, {'Ab': ['Ab1', 'Ab2']}, {'Ac': ['Ac1', 'Ac2']},
         {'Ba': ['Ba1', 'Bb2', 'Bc3']}, {'Bb': ['Bb1', 'Bb2']},
         {'Ca': ['Ca1', 'Cb2', 'Cc3']}, {'Cb': ['Cb1', 'Cb2', 'Cb3', 'Cb4']}]
};

selectedStateIndex = 0;
selectedDistrictIndex = 0;

}
