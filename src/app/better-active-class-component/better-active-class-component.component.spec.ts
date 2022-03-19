import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetterActiveClassComponentComponent } from './better-active-class-component.component';

describe('BetterActiveClassComponentComponent', () => {
  let component: BetterActiveClassComponentComponent;
  let fixture: ComponentFixture<BetterActiveClassComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetterActiveClassComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetterActiveClassComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
