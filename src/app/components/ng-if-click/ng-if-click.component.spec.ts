import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfClickComponent } from './ng-if-click.component';

describe('NgIfClickComponent', () => {
  let component: NgIfClickComponent;
  let fixture: ComponentFixture<NgIfClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
