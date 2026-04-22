import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationServerComponent } from './pagination-server.component';

describe('PaginationServerComponent', () => {
  let component: PaginationServerComponent;
  let fixture: ComponentFixture<PaginationServerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationServerComponent]
    });
    fixture = TestBed.createComponent(PaginationServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
