import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoggerService } from '../../my-core/index'

@Component({
  selector: 'calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  private acumulado: number = 0;
  private operador: string = '+';
  private limpiar: boolean = true;

  private pantalla: string = '0';
  private resumen: string = '';

  @Input() private init: string;
  @Output() updated: EventEmitter<any> = new EventEmitter();

  constructor(private log: LoggerService) { }

  ngOnInit() {
    if (this.init) {
      this.ponOperando(this.init);
    }
  }

  get Pantalla(): string { return this.pantalla; }
  get Resumen(): string { return this.resumen; }
  get Limpiar() { return this.limpiar; }

  inicia() {
    this.acumulado = 0;
    this.operador = '+';
    this.pantalla = '0';
    this.resumen = '';
    this.limpiar = true;
  }

  ponDijito(value: any) {
    if (typeof(value) !== 'string') {
      value = value.toString();
    }
    if (value < '0' || value > '9') { return; }
    if (this.limpiar || this.pantalla === '0') {
      this.pantalla = value;
      this.limpiar = false;
    } else {
      this.pantalla += value;
    }
  }

  ponOperando(value: any) {
    if (!Number.isNaN(value)) {
        this.pantalla = value;
        this.limpiar = false;
    }
  }

  ponComa() {
    if (this.limpiar) {
      this.pantalla = '0.';
      this.limpiar = false;
    } else if (this.pantalla.indexOf('.') === -1) {
      this.pantalla += '.';
    } else {
          this.log.warn('Ya tiene separador decimal.');
    }

  }

  borrar() {
    if (this.limpiar || this.pantalla.length === 1) {
      this.pantalla = '0';
      this.limpiar = true;
    } else {
      this.pantalla = this.pantalla.substr(0,
          this.pantalla.length - 1);
    }
  }

  cambiaSigno() {
    this.pantalla = (-this.pantalla).toString();
    if (this.limpiar) {
        this.acumulado = -this.acumulado;
    }
  }

  calcula(value: string) {
    if ('+-*/='.indexOf(value) === -1) {
      this.log.error(`Operacion no soportada: ${value}`);
      return;
    }

    let operando = parseFloat(this.pantalla);
    switch (this.operador) {
    case '+':
      this.acumulado += operando;
      break;
    case '-':
      this.acumulado -= operando;
      break;
    case '*':
      this.acumulado *= operando;
      break;
    case '/':
      this.acumulado /= operando;
      break;
    case '=':
      break;
    }
    // Con eval()
    // acumulado = eval (acumulado + operador + this.pantalla);
    this.resumen = value === '=' ? '' : (this.resumen + this.pantalla + value);
    this.pantalla = this.acumulado.toString();
    this.updated.emit(this.pantalla);
    this.operador = value;
    this.limpiar = true;
  }

}
