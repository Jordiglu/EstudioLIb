import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMethodComponent } from './main-method.component';

describe('MainMethodComponent', () => {
  let component: MainMethodComponent;
  let fixture: ComponentFixture<MainMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
