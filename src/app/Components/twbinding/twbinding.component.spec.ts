import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TWBindingComponent } from './twbinding.component';

describe('TWBindingComponent', () => {
  let component: TWBindingComponent;
  let fixture: ComponentFixture<TWBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TWBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TWBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
