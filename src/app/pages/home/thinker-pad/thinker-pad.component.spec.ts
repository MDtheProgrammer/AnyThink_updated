import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinkerPadComponent } from './thinker-pad.component';

describe('ThinkerPadComponent', () => {
  let component: ThinkerPadComponent;
  let fixture: ComponentFixture<ThinkerPadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThinkerPadComponent]
    });
    fixture = TestBed.createComponent(ThinkerPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
