import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanDeactivateCompComponent } from './can-deactivate-comp.component';

describe('CanDeactivateCompComponent', () => {
  let component: CanDeactivateCompComponent;
  let fixture: ComponentFixture<CanDeactivateCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanDeactivateCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanDeactivateCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
