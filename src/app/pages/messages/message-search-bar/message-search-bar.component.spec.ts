import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSearchBarComponent } from './message-search-bar.component';

describe('MessageSearchBarComponent', () => {
  let component: MessageSearchBarComponent;
  let fixture: ComponentFixture<MessageSearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageSearchBarComponent]
    });
    fixture = TestBed.createComponent(MessageSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
