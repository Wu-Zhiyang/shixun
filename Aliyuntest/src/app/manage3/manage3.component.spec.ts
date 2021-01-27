import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Manage3Component } from './manage3.component';

describe('Manage3Component', () => {
  let component: Manage3Component;
  let fixture: ComponentFixture<Manage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Manage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Manage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
