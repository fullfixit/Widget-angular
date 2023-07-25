import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetMapComponent } from './widget-map.component';

describe('WidgetMapComponent', () => {
  let component: WidgetMapComponent;
  let fixture: ComponentFixture<WidgetMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetMapComponent]
    });
    fixture = TestBed.createComponent(WidgetMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
