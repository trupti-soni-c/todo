import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplecardComponent } from './multiplecard.component';

describe('MultiplecardComponent', () => {
  let component: MultiplecardComponent;
  let fixture: ComponentFixture<MultiplecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
