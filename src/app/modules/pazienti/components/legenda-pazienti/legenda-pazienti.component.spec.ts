import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendaPazientiComponent } from './legenda-pazienti.component';

describe('LegendaPazientiComponent', () => {
  let component: LegendaPazientiComponent;
  let fixture: ComponentFixture<LegendaPazientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegendaPazientiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegendaPazientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
