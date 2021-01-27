import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhuceComponent } from './zhuce.component';

describe('ZhuceComponent', () => {
  let component: ZhuceComponent;
  let fixture: ComponentFixture<ZhuceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ZhuceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhuceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
