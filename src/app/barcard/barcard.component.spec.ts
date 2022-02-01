import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcardComponent } from './barcard.component';

describe('BarcardComponent', () => {
  let component: BarcardComponent;
  let fixture: ComponentFixture<BarcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
