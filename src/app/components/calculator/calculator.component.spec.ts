import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('deve garantir que 5 + 2 = 7', () => {
    let btn5 = fixture.debugElement.query(By.css("#btn5"));
    let btnSoma = fixture.debugElement.query(By.css("#btnSoma"));
    let btn2 = fixture.debugElement.query(By.css("#btn2"));
    let btnCalcular = fixture.debugElement.query(By.css("#btnCalcular"));
    let display = fixture.debugElement.query(By.css("#display"));

    btn5.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnSoma.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler('click', null);
    fixture.detectChanges();

    display.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('7');
  });
  it('deve garantir que 3 - 4 = -1', () => {
    let btn3 = fixture.debugElement.query(By.css("#btn3"));
    let btnSubtracao = fixture.debugElement.query(By.css("#btnSubtracao"));
    let btn4 = fixture.debugElement.query(By.css("#btn4"));
    let btnCalcular = fixture.debugElement.query(By.css("#btnCalcular"));
    let display = fixture.debugElement.query(By.css("#display"));

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnSubtracao.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn4.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler('click', null);
    fixture.detectChanges();

    display.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('-1');
  });
  it('deve garantir que 6 / 2 = 3', () => {
    let btn6 = fixture.debugElement.query(By.css("#btn6"));
    let btnDivisao = fixture.debugElement.query(By.css("#btnDivisao"));
    let btn2 = fixture.debugElement.query(By.css("#btn2"));
    let btnCalcular = fixture.debugElement.query(By.css("#btnCalcular"));
    let display = fixture.debugElement.query(By.css("#display"));

    btn6.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnDivisao.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler('click', null);
    fixture.detectChanges();

    display.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('3');
  });
});
