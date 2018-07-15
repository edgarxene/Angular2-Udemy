import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
          AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-css></app-css>
  <br><hr>

  <app-ng-style></app-ng-style>
  <br><hr>

  <app-clases></app-clases>
  <br><hr>

  <p [appResaltado]="'red'">Hola Mundo</p>
  <br><hr>

  <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
          AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log('Constructor');
   }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges(){
    console.log('ngOnChanges');
  }
  ngDoCheck(){
    console.log('ngDoCheck');
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy');
  }
}
