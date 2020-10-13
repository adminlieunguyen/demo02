import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai5ScpComponent } from './bai5-scp.component';

describe('Bai5ScpComponent', () => {
  let component: Bai5ScpComponent;
  let fixture: ComponentFixture<Bai5ScpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai5ScpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai5ScpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
