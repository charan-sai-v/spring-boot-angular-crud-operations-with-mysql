import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewusersComponent } from './viewusers.component';

describe('ViewusersComponent', () => {
  let component: ViewusersComponent;
  let fixture: ComponentFixture<ViewusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewusersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
