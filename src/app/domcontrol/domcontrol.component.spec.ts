import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomcontrolComponent } from './domcontrol.component';

describe('DomcontrolComponent', () => {
  let component: DomcontrolComponent;
  let fixture: ComponentFixture<DomcontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomcontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
