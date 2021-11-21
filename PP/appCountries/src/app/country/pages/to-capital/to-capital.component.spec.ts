import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToCapitalComponent } from './to-capital.component';

describe('ToCapitalComponent', () => {
  let component: ToCapitalComponent;
  let fixture: ComponentFixture<ToCapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToCapitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
