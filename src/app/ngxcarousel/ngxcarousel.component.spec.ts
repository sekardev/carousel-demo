import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxcarouselComponent } from './ngxcarousel.component';

describe('NgxcarouselComponent', () => {
  let component: NgxcarouselComponent;
  let fixture: ComponentFixture<NgxcarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxcarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
