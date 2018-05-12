import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalSalesLeadsPageComponent } from './national-sales-leads-page.component';

describe('NationalSalesLeadsPageComponent', () => {
  let component: NationalSalesLeadsPageComponent;
  let fixture: ComponentFixture<NationalSalesLeadsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalSalesLeadsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalSalesLeadsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
