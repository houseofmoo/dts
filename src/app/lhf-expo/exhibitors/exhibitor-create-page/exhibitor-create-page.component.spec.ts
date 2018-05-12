import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitorCreatePageComponent } from './exhibitor-create-page.component';

describe('ExhibitorCreatePageComponent', () => {
  let component: ExhibitorCreatePageComponent;
  let fixture: ComponentFixture<ExhibitorCreatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitorCreatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitorCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
