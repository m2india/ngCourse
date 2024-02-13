import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveStruComponent } from './directive-stru.component';

describe('DirectiveStruComponent', () => {
  let component: DirectiveStruComponent;
  let fixture: ComponentFixture<DirectiveStruComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveStruComponent]
    });
    fixture = TestBed.createComponent(DirectiveStruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
