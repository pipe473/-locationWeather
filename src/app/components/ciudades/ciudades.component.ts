import { Component, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.scss']
})
export class CiudadesComponent implements OnInit {

  public ciudades: Ciudad[]; 

  constructor(){
    this.ciudades = [
      new Ciudad ('Madrid', 'España', 'MAD'),
      new Ciudad ('Cali', 'Colombia', 'CL'),
      new Ciudad ('Florencia', 'Italia', 'FL')
    ]
  }


  dataWeight(ciudad: HTMLInputElement, pais: HTMLInputElement, codigo: HTMLInputElement ){
    console.log(this.ciudades);
        let ciudadNueva = new Ciudad(String(ciudad.value), String (pais.value), String (codigo.value))
        this.ciudades.push(ciudadNueva);
        return ciudadNueva;
    // console.log(this.ciudades);
  }
  ngOnInit(): void {
  }

}



