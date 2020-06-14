import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyidSearchComponent } from './companyid-search.component';

describe('CompanyidSearchComponent', () => {
  let component: CompanyidSearchComponent;
  let fixture: ComponentFixture<CompanyidSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyidSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyidSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
