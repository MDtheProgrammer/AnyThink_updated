import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOptionsBarComponent } from './create-options-bar.component';

describe('CreateOptionsBarComponent', () => {
  let component: CreateOptionsBarComponent;
  let fixture: ComponentFixture<CreateOptionsBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateOptionsBarComponent]
    });
    fixture = TestBed.createComponent(CreateOptionsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
