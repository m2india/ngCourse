import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveServiceComponent } from './active-service.component';

describe('ActiveServiceComponent', () => {
  let component: ActiveServiceComponent;
  let fixture: ComponentFixture<ActiveServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveServiceComponent]
    });
    fixture = TestBed.createComponent(ActiveServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
