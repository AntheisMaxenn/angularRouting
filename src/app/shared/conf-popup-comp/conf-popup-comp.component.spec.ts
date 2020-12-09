import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfPopupCompComponent } from './conf-popup-comp.component';

describe('ConfPopupCompComponent', () => {
  let component: ConfPopupCompComponent;
  let fixture: ComponentFixture<ConfPopupCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfPopupCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfPopupCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
