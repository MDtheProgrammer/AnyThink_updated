import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageListColumnComponent } from './message-list-column.component';

describe('MessageListColumnComponent', () => {
  let component: MessageListColumnComponent;
  let fixture: ComponentFixture<MessageListColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageListColumnComponent]
    });
    fixture = TestBed.createComponent(MessageListColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
