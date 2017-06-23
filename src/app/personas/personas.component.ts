import { Component, OnInit, DoCheck } from '@angular/core';
import { PersonasViewModelService } from './personas-view-model.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit, DoCheck {
  private urlactual = '';

  constructor(public vm: PersonasViewModelService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    if (id) {
      if (this.route.snapshot.url.slice(-1)[0].path === 'edit') {
        this.vm.modify(+id);
      } else {
        this.vm.view(+id);
      }
    } else if (this.route.snapshot.url.slice(-1)[0].path === 'add') {
      this.vm.add();
    } else {
      this.vm.list();
    }
    this.urlactual = this.route.snapshot.url.join('/');
  }

  ngDoCheck() {
    if (this.route.snapshot.url.join('/') !== this.urlactual) {
      this.ngOnInit();
    }
  }
}

@Component({
  selector: 'app-personas-list',
  templateUrl: './list.html'
})
export class PersonasListComponent implements OnInit {

  constructor(public vm: PersonasViewModelService) { }

  ngOnInit() {
    this.vm.list();
  }
}
@Component({
  selector: 'app-personas-form',
  templateUrl: './form.html'
})
export class PersonasFormComponent implements OnInit {

  constructor(public vm: PersonasViewModelService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    if (id) {
      this.vm.modify(+id);
    } else {
      this.router.navigate(['/error']);
    }
  }

  cancel() {
    this.router.navigate(['/personas']);
  }
}
@Component({
  selector: 'app-personas-add',
  templateUrl: './form.html'
})
export class PersonasAddComponent implements OnInit {

  constructor(public vm: PersonasViewModelService, private router: Router) { }

  ngOnInit() {
    this.vm.add();
  }

  cancel() {
    this.router.navigate(['/personas']);
  }
}
@Component({
  selector: 'app-personas-view',
  templateUrl: './view.html'
})
export class PersonasViewComponent implements OnInit {

  constructor(public vm: PersonasViewModelService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    if (id) {
      this.vm.view(+id);
    } else {
      this.router.navigate(['/error']);
    }
  }

  cancel() {
    this.router.navigate(['/personas']);
  }
}
