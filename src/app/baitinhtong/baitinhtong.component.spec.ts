import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitinhtongComponent } from './baitinhtong.component';

describe('BaitinhtongComponent', () => {
  let component: BaitinhtongComponent;
  let fixture: ComponentFixture<BaitinhtongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitinhtongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitinhtongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
