import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsbarComponent } from './buttonsbar.component';

describe('ButtonsbarComponent', () => {
  let component: ButtonsbarComponent;
  let fixture: ComponentFixture<ButtonsbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
