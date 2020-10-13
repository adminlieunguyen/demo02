import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ptb2Component } from './ptb2.component';

describe('Ptb2Component', () => {
  let component: Ptb2Component;
  let fixture: ComponentFixture<Ptb2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ptb2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ptb2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
