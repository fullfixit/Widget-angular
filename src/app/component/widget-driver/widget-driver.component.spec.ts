import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDriverComponent } from './widget-driver.component';

describe('WidgetDriverComponent', () => {
  let component: WidgetDriverComponent;
  let fixture: ComponentFixture<WidgetDriverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WidgetDriverComponent]
    });
    fixture = TestBed.createComponent(WidgetDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
