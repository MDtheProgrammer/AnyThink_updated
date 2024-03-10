import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationLineTemplateComponent } from './navigation-line-template.component';

describe('NavigationLineTemplateComponent', () => {
  let component: NavigationLineTemplateComponent;
  let fixture: ComponentFixture<NavigationLineTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationLineTemplateComponent]
    });
    fixture = TestBed.createComponent(NavigationLineTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
