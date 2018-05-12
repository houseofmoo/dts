import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalSalesLeadsPageComponent } from './local-sales-leads-page.component';

describe('LocalSalesLeadsPageComponent', () => {
  let component: LocalSalesLeadsPageComponent;
  let fixture: ComponentFixture<LocalSalesLeadsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalSalesLeadsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalSalesLeadsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
