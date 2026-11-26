import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeputadosLista } from './deputados-lista';

describe('DeputadosLista', () => {
  let component: DeputadosLista;
  let fixture: ComponentFixture<DeputadosLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeputadosLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeputadosLista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
