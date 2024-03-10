import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMailListComponent } from './e-mail-list.component';

describe('EMailListComponent', () => {
  let component: EMailListComponent;
  let fixture: ComponentFixture<EMailListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EMailListComponent]
    });
    fixture = TestBed.createComponent(EMailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
