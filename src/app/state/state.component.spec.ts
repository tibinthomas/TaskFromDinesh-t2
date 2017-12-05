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

    fixtureS.detectChanges();
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
    expect(dataService.selectedDistrictIndex).toBeTruthy();
  });

  it('dist dropdown should load only the dist in the selected state', () => {
    expect(dataService.selectedDistrictIndex).toBeTruthy();
  });

  it('city dropdown should load only the city in the selected dist', () => {
    expect(dataService.selectedDistrictIndex).toBeTruthy();
  });

});
