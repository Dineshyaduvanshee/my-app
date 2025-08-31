import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglsComponent } from './singls.component';

describe('SinglsComponent', () => {
  let component: SinglsComponent;
  let fixture: ComponentFixture<SinglsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
