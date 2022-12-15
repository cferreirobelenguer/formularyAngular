import { Component, Input, OnInit } from '@angular/core';
import { datosUser } from '../interface/interfaceDatos';

@Component({
  selector: 'app-texto-politica',
  templateUrl: './texto-politica.component.html',
  styleUrls: ['./texto-politica.component.css']
})
export class TextoPoliticaComponent implements OnInit{
  //data of formulary component
  @Input() datosUsuario:datosUser={
    url:"",
    name:"",
    juridicPerson:"",
    nameResponsible:"",
    dni:"",
    direction:"",
    tlf:"",
    fax:"",
    social:"",
    verification:false
  }

  ngOnInit(): void {
    console.log(this.datosUsuario)
  }
  
}
