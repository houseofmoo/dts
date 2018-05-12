import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LhfHomeComponent } from './lhf-home.component';

describe('LhfHomeComponent', () => {
  let component: LhfHomeComponent;
  let fixture: ComponentFixture<LhfHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LhfHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LhfHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
