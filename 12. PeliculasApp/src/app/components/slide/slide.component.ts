import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html'
})
export class SlideComponent implements OnInit {

  @Input ('peliculas') peliculas;
  @Input ('titulo') titulo;
  constructor() { }

  ngOnInit() {
  }

}
