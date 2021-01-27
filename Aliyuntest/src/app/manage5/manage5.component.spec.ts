import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Manage5Component } from './manage5.component';

describe('Manage5Component', () => {
  let component: Manage5Component;
  let fixture: ComponentFixture<Manage5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Manage5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Manage5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
