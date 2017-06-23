import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  public titulo: string;
  public nombre: string;
  public fontSizePx = 12;
  public ocultar = false;
  public lista = [
    {id: 1, nombre: 'Cadiz'},
    {id: 2, nombre: 'malaga'},
    {id: 3, nombre: 'JAEN'},
    {id: 4, nombre: 'granada'},
  ];
  public idProvincia = 3;
  public texto='If you are familiar with Angular validations, you may have noticed that the custom validation directive is instantiated with useExisting rather than useClass. The registered validator must be this instance of the ForbiddenValidatorDirective—the instance in the form with its forbiddenName property bound to “bob". If you were to replace useExisting with useClass, then you’d be registering a new class instance, one that doesn’t have a forbiddenName.';
public fecha = new Date(2017, 3, 17);

  get Init() {
    return this.nombre;
  }
  @Input() set Init(valor: string) {
    this.nombre = valor;
  }

  constructor() {
    this.nombre = 'mundo';
  }

  ngOnInit() {
    this.saluda();
  }

  public saluda() {
    this.titulo = `Hola ${this.nombre}`;
  }
  public despide() {
    this.titulo = `Adios ${this.nombre}`;
  }
  public diAlgo(algo) {
    this.titulo = `Dice ${algo}`;
  }

  cambiaVer() {
    this.ocultar = !this.ocultar;
  }
  addProvincia(nombre: string) {
    this.lista.push({id: this.lista.length + 1, nombre: nombre});
    this.idProvincia = this.lista.length;
  }


  resultados: any[] = [];
  ponResultado(origen: string, valor: any) {
    this.resultados.push({pos: this.resultados.length + 1, origen: origen, valor: valor});
  }

}
