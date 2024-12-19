import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishRecommondationsComponent } from './dish-recommondations.component';

describe('DishRecommondationsComponent', () => {
  let component: DishRecommondationsComponent;
  let fixture: ComponentFixture<DishRecommondationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DishRecommondationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishRecommondationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
