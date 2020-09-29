import { Component, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad';
import { Clima } from 'src/app/models/clima';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.scss']
})
export class CiudadesComponent implements OnInit {

  public ciudades: Ciudad[]; 

  constructor(){
    this.ciudades = [
      new Ciudad ('Madrid', 'España', 'MAD', new Clima(20, 200, 60)),
      new Ciudad ('Cali', 'Colombia', 'CL', new Clima(20, 200, 60)),
      new Ciudad ('Florencia', 'Italia', 'FL', new Clima(20, 200, 60))
    ]
  }

// FUNCION QUE ME CREA UN  NUEVO CLIMA
  dataWeight(ciudad: HTMLInputElement, pais: HTMLInputElement, codigo: HTMLInputElement, temperatura: HTMLInputElement, viento: HTMLInputElement, precipitaciones: HTMLInputElement ){
    console.log(this.ciudades);
        let ciudadNueva = new Ciudad(String(ciudad.value), String (pais.value), String (codigo.value), new Clima(Number (temperatura.value), Number(viento.value), Number(precipitaciones.value)))
        this.ciudades.push(ciudadNueva);
        return ciudadNueva;
    // console.log(this.ciudades);
  }
  ngOnInit(): void {
  }

}



