import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TractorsListComponent } from './tractors-list.component';

describe('TractorsListComponent', () => {
  let component: TractorsListComponent;
  let fixture: ComponentFixture<TractorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TractorsListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TractorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
