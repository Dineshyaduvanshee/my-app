import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynStyleComponent } from './dyn-style.component';

describe('DynStyleComponent', () => {
  let component: DynStyleComponent;
  let fixture: ComponentFixture<DynStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynStyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
