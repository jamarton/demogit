import { Injectable } from '@angular/core';

@Injectable()
export class MasDatosService {
  private nombre = 'Mi nombre';

  constructor() { }

  public get Nombre() { return this.nombre; }
  public set Nombre(valor: string) { this.nombre = valor; }

  public dameLongitud(): number { return this.nombre.length; }
}
