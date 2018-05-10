import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitorSearchPageComponent } from './exhibitor-search-page.component';

describe('ExhibitorSearchPageComponent', () => {
  let component: ExhibitorSearchPageComponent;
  let fixture: ComponentFixture<ExhibitorSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitorSearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitorSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
