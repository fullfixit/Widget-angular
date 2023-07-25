import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetHealthComponent } from './widget-health.component';

describe('WidgetHealthComponent', () => {
  let component: WidgetHealthComponent;
  let fixture: ComponentFixture<WidgetHealthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetHealthComponent]
    });
    fixture = TestBed.createComponent(WidgetHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
