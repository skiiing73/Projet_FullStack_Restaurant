import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommandationComponent } from './recommandation.component';

describe('RecommandationComponent', () => {
  let component: RecommandationComponent;
  let fixture: ComponentFixture<RecommandationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommandationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommandationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
