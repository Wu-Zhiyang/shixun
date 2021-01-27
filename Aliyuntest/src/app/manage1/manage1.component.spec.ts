import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Manage1Component } from './manage1.component';

describe('Manage1Component', () => {
  let component: Manage1Component;
  let fixture: ComponentFixture<Manage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Manage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Manage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
