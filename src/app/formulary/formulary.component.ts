import { Component } from '@angular/core';
import { datosUser } from '../interface/interfaceDatos';

@Component({
  selector: 'app-formulary',
  templateUrl: './formulary.component.html',
  styleUrls: ['./formulary.component.css']
})
export class FormularyComponent {
  public data:datosUser={
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
  sendData(){
    //It put the data into the object
    this.data=this.data
    console.log(this.data)
  }

}
