import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableServerComponent } from './datatable-server.component';

describe('DatatableServerComponent', () => {
  let component: DatatableServerComponent;
  let fixture: ComponentFixture<DatatableServerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatatableServerComponent]
    });
    fixture = TestBed.createComponent(DatatableServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
