import { Component, OnInit } from '@angular/core';

interface Articulo{
  nombre:string,
  descripcion:string,
  precio:number
}

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {

  articulos:Array<Articulo>=new Array<Articulo>()
  constructor() { }

  ngOnInit(): void {
    this.articulos.push(
      {nombre:'tv 14',descripcion:'television 15 pulg',precio:2500},
      {nombre:'licuadora',descripcion:'licuadora etc etc',precio:500},
      {nombre:'coso',descripcion:'otro asd con descripcion',precio:100}
    )
  }

}
