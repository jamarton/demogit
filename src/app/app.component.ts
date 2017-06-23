import { Component } from '@angular/core';
import { LoggerService } from '../my-core/servicios/logger.service'
import { DatosService } from './servicios/datos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola mundo';
  log: LoggerService;

  constructor(datos: DatosService, log: LoggerService) {
    this.title = datos.Titulo;
    this.log = log;
    //this.log.error('Sin implementar');
  }
}
