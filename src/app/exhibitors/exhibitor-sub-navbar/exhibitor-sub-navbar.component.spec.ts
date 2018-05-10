import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitorSubNavbarComponent } from './exhibitor-sub-navbar.component';

describe('ExhibitorSubNavbarComponent', () => {
  let component: ExhibitorSubNavbarComponent;
  let fixture: ComponentFixture<ExhibitorSubNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitorSubNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitorSubNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
