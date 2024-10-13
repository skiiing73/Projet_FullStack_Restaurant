import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterListComponent } from './starter-list.component';

describe('StarterListComponent', () => {
  let component: StarterListComponent;
  let fixture: ComponentFixture<StarterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarterListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
