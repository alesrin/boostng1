import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaBootstrapComponent } from './prueba-bootstrap.component';

describe('PruebaBootstrapComponent', () => {
  let component: PruebaBootstrapComponent;
  let fixture: ComponentFixture<PruebaBootstrapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PruebaBootstrapComponent]
    });
    fixture = TestBed.createComponent(PruebaBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
