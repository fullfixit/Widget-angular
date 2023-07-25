import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetHoroscopeComponent } from './widget-horoscope.component';

describe('WidgetHoroscopeComponent', () => {
  let component: WidgetHoroscopeComponent;
  let fixture: ComponentFixture<WidgetHoroscopeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetHoroscopeComponent]
    });
    fixture = TestBed.createComponent(WidgetHoroscopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
