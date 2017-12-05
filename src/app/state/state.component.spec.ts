import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateComponent } from './state.component';
import { DistComponent } from '../dist/dist.component';
import { CityComponent } from '../city/city.component';
import { Data } from '../mock-data.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('StateComponent', () => {
  let stateComponent: StateComponent;
  let fixtureS: ComponentFixture<StateComponent>;
  let distComponent: DistComponent;
  let fixtureD: ComponentFixture<DistComponent>;
  let cityComponent: CityComponent;
  let fixtureC: ComponentFixture<CityComponent>;
  let dataService: Data;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ StateComponent, DistComponent, CityComponent ],
      providers: [Data]
    })
    .compileComponents();

    fixtureS = TestBed.createComponent(StateComponent);
    stateComponent = fixtureS.componentInstance;

    fixtureD = TestBed.createComponent(DistComponent);
    distComponent = fixtureD.componentInstance;

    fixtureC = TestBed.createComponent(CityComponent);
    cityComponent = fixtureC.componentInstance;

    stateComponent.ngOnInit();
    distComponent.ngOnInit();
    cityComponent.ngOnInit();

  }));

  it('should create a component with a dropdown to select state', () => {
    expect(stateComponent).toBeTruthy();
  });

  it('should create a component with a dropdown to select dist', () => {
    expect(distComponent).toBeTruthy();
  });

  it('should create a component with a dropdown to select city', () => {
    expect(cityComponent).toBeTruthy();
  });

  it('state dropdown should load all the state', () => {
    const elementS = fixtureS.nativeElement;
    stateComponent.statesToDisplay = ['A'];
    fixtureS.detectChanges();
    expect(elementS.querySelector('option').innerHTML).toBe('A');
  });

  it('dist dropdown should load only the dist in the selected state', () => {
    const elementD = fixtureD.nativeElement;
    fixtureD.detectChanges();
    expect(elementD.querySelector('option').innerHTML).toBe('Aa');
    distComponent.distToDisplay = ['Aa'];
  });

  xit('city dropdown should load only the city in the selected dist', () => {
    const elementC = fixtureC.nativeElement;
    fixtureC.detectChanges();
    expect(elementC.querySelector('option').innerHTML).toBe('Aa1');
  });

});
