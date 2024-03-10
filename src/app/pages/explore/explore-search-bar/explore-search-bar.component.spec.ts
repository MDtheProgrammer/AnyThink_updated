import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreSearchBarComponent } from './explore-search-bar.component';

describe('ExploreSearchBarComponent', () => {
  let component: ExploreSearchBarComponent;
  let fixture: ComponentFixture<ExploreSearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreSearchBarComponent]
    });
    fixture = TestBed.createComponent(ExploreSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
