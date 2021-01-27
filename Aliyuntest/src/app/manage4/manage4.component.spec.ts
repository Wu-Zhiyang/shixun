import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Manage4Component } from './manage4.component';

describe('Manage4Component', () => {
  let component: Manage4Component;
  let fixture: ComponentFixture<Manage4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Manage4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Manage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
