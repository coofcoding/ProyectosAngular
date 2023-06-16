import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiguraComponent } from './figura.component';

describe('FiguraComponent', () => {
  let component: FiguraComponent;
  let fixture: ComponentFixture<FiguraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiguraComponent]
    });
    fixture = TestBed.createComponent(FiguraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
