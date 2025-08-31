import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweechComponent } from './sweech.component';

describe('SweechComponent', () => {
  let component: SweechComponent;
  let fixture: ComponentFixture<SweechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SweechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SweechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
