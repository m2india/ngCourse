import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveServiceComponent } from './inactive-service.component';

describe('InactiveServiceComponent', () => {
  let component: InactiveServiceComponent;
  let fixture: ComponentFixture<InactiveServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InactiveServiceComponent]
    });
    fixture = TestBed.createComponent(InactiveServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
