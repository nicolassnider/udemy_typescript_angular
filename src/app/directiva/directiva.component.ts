import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.scss']
})
export class DirectivaComponent implements OnInit {
  cargando:Boolean=true;
  nombres:Array<String>=['Juan','Pedro','María'];
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.cargando=false;
    },5000)
  }

  mostrarCargando(){
    this.cargando=!this.cargando;
  }

}
