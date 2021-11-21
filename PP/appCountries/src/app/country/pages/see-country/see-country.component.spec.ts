import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeCountryComponent } from './see-country.component';

describe('SeeCountryComponent', () => {
  let component: SeeCountryComponent;
  let fixture: ComponentFixture<SeeCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
