import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorCustomersComponent } from './creator-customers.component';

describe('CreatorCustomersComponent', () => {
  let component: CreatorCustomersComponent;
  let fixture: ComponentFixture<CreatorCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatorCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
