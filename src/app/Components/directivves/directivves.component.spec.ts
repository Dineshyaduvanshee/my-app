import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivvesComponent } from './directivves.component';

describe('DirectivvesComponent', () => {
  let component: DirectivvesComponent;
  let fixture: ComponentFixture<DirectivvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivvesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
