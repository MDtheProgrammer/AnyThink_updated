import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageTypingColumnComponent } from './message-typing-column.component';

describe('MessageTypingColumnComponent', () => {
  let component: MessageTypingColumnComponent;
  let fixture: ComponentFixture<MessageTypingColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageTypingColumnComponent]
    });
    fixture = TestBed.createComponent(MessageTypingColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
