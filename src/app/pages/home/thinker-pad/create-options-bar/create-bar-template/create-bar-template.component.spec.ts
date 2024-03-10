import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBarTemplateComponent } from './create-bar-template.component';

describe('CreateBarTemplateComponent', () => {
  let component: CreateBarTemplateComponent;
  let fixture: ComponentFixture<CreateBarTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBarTemplateComponent]
    });
    fixture = TestBed.createComponent(CreateBarTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
