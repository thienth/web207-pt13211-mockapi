import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemooutputComponent } from './demooutput.component';

describe('DemooutputComponent', () => {
  let component: DemooutputComponent;
  let fixture: ComponentFixture<DemooutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemooutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemooutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
