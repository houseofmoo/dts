import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitorPageComponent } from './exhibitor-page.component';

describe('ExhibitorPageComponent', () => {
  let component: ExhibitorPageComponent;
  let fixture: ComponentFixture<ExhibitorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
