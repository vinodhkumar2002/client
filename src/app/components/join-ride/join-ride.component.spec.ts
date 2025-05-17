import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinRideComponent } from './join-ride.component';

describe('JoinRideComponent', () => {
  let component: JoinRideComponent;
  let fixture: ComponentFixture<JoinRideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JoinRideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
