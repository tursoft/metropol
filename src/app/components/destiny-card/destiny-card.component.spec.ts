import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinyCardComponent } from './destiny-card.component';

describe('DestinyCardComponent', () => {
  let component: DestinyCardComponent;
  let fixture: ComponentFixture<DestinyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinyCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
