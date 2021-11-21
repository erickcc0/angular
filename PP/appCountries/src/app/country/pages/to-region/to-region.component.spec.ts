import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToRegionComponent } from './to-region.component';

describe('ToRegionComponent', () => {
  let component: ToRegionComponent;
  let fixture: ComponentFixture<ToRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
