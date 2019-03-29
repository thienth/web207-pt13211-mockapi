import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherAddFormComponent } from './publisher-add-form.component';

describe('PublisherAddFormComponent', () => {
  let component: PublisherAddFormComponent;
  let fixture: ComponentFixture<PublisherAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublisherAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
