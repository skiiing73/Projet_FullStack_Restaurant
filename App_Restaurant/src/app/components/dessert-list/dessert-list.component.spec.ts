import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertListComponent } from './dessert-list.component';

describe('DessertListComponent', () => {
  let component: DessertListComponent;
  let fixture: ComponentFixture<DessertListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DessertListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DessertListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
