import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageCardComponent } from './profile-page-card.component';

describe('ProfilePageCardComponent', () => {
  let component: ProfilePageCardComponent;
  let fixture: ComponentFixture<ProfilePageCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilePageCardComponent]
    });
    fixture = TestBed.createComponent(ProfilePageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
