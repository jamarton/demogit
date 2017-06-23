import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonasDAOService } from './personas-dao.service';
import { LoggerService } from '../../my-core/servicios/logger.service'

const enum Modo { list, add, edit, view };

@Injectable()
export class PersonasViewModelService {
  private listado: Array<any> = [];
  private elemento: any = {};
  private modo = Modo.list;
  private idOriginal: any;

  constructor(private dao: PersonasDAOService,
    private log: LoggerService,
    private router: Router) { }

  get Listado() { return this.listado; }
  get Elemento() { return this.elemento; }
  get Modo() { return this.modo; }

  load() {
    this.dao.query().subscribe(
      datos => { this.listado = datos; },
      error => { this.log.error(`ERROR DAO: ${error}`); }
    );
  }
  list() {
    this.modo = Modo.list;
    this.load();
  }
  add() {
    this.modo = Modo.add;
    this.elemento = {};
  }
  modify(id: any) {
    this.dao.get(id).subscribe(
      datos => {
        this.modo = Modo.edit;
        this.elemento = datos;
        this.idOriginal = id;
      },
      error => { this.log.error(`ERROR DAO: ${error}`); }
    );
  }
  view(id: any) {
    this.dao.get(id).subscribe(
      datos => {
        this.modo = Modo.view;
        this.elemento = datos;
      },
      error => { this.router.navigate(['/error']); }
    );
  }
  remove(id: any) {
    if (window.confirm('¿Seguro?')) {
      this.dao.remove(id).subscribe(
        datos => {
          alert('Se ha borrado.');
          this.modo = Modo.list;
          this.load();
        },
        error => { this.log.error(`ERROR DAO: ${error}`); }
      );
    }
  }
  send() {
    switch (this.modo) {
      case Modo.add:
        this.dao.add(this.elemento).subscribe(
          datos => {
            this.elemento = {};
            this.router.navigate(['/personas']);
            // this.load();
            // this.modo = 'list';
          },
          error => { this.log.error(`ERROR DAO: ${error}`); }
        );
        break;
      case Modo.edit:
        this.dao.change(this.elemento).subscribe(
          datos => {
            this.elemento = {};
            this.router.navigate(['/personas']);
            // this.load();
            // this.modo = 'list';
          },
          error => { this.log.error(`ERROR DAO: ${error}`); }
        );
        break;
      case Modo.view:
        this.cancel();
        break;
    }
  }
  cancel() {
    this.elemento = {};
    this.router.navigate(['/personas']);
    // this.load();
    // this.modo = 'list';
  }
}

@Injectable()
export class PersonasViewModelServiceOld {
  private listado: Array<any> = [];
  private elemento: any = {};
  private modo = 'list';
  private idOriginal: any;

  constructor() { }

  get Listado() { return this.listado; }
  get Elemento() { return this.elemento; }
  get Modo() { return this.modo; }

  load() {
    if (this.listado.length === 0) {
      this.listado = [
        { id: 1, nombre: 'Carmelo', apellidos: 'Coton', edad: 33 },
        { id: 2, nombre: 'Pepito', apellidos: 'Grillo', edad: 118 },
        { id: 3, nombre: 'Capitan', apellidos: 'Tan', edad: 18 },
        { id: 4, nombre: 'Pedro', apellidos: 'Picapiedra', edad: 50 },
      ];
    }
  }
  list() {
    this.modo = 'list';
    this.load();
  }
  add() {
    this.modo = 'add';
    this.elemento = {};
  }
  modify(id: any) {
    let rslt = this.listado.find(item => item.id === id);
    if (rslt) {
      this.modo = 'edit';
      this.elemento = Object.assign({}, rslt);
      this.idOriginal = id;
    }
  }
  view(id: any) {
    let rslt = this.listado.find(item => item.id === id);
    if (rslt) {
      this.modo = 'view';
      this.elemento = Object.assign(rslt, {});
    }
  }
  remove(id: any) {
    let ind = this.listado.findIndex(item => item.id === id);
    if (ind !== -1 && window.confirm('¿Seguro?')) {
      this.listado.splice(ind, 1);
      this.modo = 'list';
    }
  }
  send() {
    switch (this.modo) {
      case 'add':
        this.listado.push(this.elemento);
        this.elemento = {};
        this.load();
        this.modo = 'list';
        break;
      case 'edit':
        let ind = this.listado.findIndex(item => item.id === this.idOriginal);
        if (ind !== -1) {
          this.listado[ind] = this.elemento;
          this.elemento = {};
          this.load();
          this.modo = 'list';
        }
        break;
      case 'view':
        this.elemento = {};
        this.load();
        this.modo = 'list';
        break;
    }
  }
  cancel() {
    this.elemento = {};
    this.load();
    this.modo = 'list';
  }
}
