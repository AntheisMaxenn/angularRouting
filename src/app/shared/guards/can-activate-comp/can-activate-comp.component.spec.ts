import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanActivateCompComponent } from './can-activate-comp.component';

describe('CanActivateCompComponent', () => {
  let component: CanActivateCompComponent;
  let fixture: ComponentFixture<CanActivateCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanActivateCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanActivateCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
