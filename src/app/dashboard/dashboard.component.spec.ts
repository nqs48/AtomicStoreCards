import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  //Making unit test Sum
  it('shoud sum to numbers', () => {
    let num1= 3;
    let num2= 4;
    let result: number = component.sum(num1, num2);
    expect(result).toBe(7);
  })


  //Sum two number with greater than 10
  it('shoud validate is greater than 10', () => {
      let num1= 3;
      let num2= 4;
      let result: boolean = component.validateSum(num1, num2);
      expect(result).toBeFalse();
    })


  fit('shoul validate if return string', ()=> {
    let num1= 9;
    let num2= 4;
    let result: string[] = component.addItem(num1, num2);
    expect(result).toContain('sofka');
  })





});
