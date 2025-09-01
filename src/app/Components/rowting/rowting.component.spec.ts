import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowtingComponent } from './rowting.component';

describe('RowtingComponent', () => {
  let component: RowtingComponent;
  let fixture: ComponentFixture<RowtingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowtingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowtingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
