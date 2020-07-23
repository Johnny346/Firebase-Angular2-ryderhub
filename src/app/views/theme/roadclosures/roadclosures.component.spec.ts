import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadclosuresComponent } from './roadclosures.component';

describe('RoadclosuresComponent', () => {
  let component: RoadclosuresComponent;
  let fixture: ComponentFixture<RoadclosuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadclosuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadclosuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
