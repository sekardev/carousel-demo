import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPrimeComponent } from './carousel-prime.component';

describe('CarouselPrimeComponent', () => {
  let component: CarouselPrimeComponent;
  let fixture: ComponentFixture<CarouselPrimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselPrimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselPrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
