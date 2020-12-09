import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxRoutesComponent } from './aux-routes.component';

describe('AuxRoutesComponent', () => {
  let component: AuxRoutesComponent;
  let fixture: ComponentFixture<AuxRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
