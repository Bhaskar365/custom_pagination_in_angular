import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDataTestComponent } from './api-data-test.component';

describe('ApiDataTestComponent', () => {
  let component: ApiDataTestComponent;
  let fixture: ComponentFixture<ApiDataTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiDataTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDataTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
