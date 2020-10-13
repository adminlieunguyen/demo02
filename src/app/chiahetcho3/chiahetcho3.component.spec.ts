import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chiahetcho3Component } from './chiahetcho3.component';

describe('Chiahetcho3Component', () => {
  let component: Chiahetcho3Component;
  let fixture: ComponentFixture<Chiahetcho3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chiahetcho3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chiahetcho3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
