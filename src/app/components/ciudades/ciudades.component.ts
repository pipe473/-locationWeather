import { Component, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad';
import { Clima } from 'src/app/models/clima';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.scss'],
})
export class CiudadesComponent implements OnInit {
  public ciudades: Ciudad[];
  public miCiudad: Ciudad;
  public isHidden: boolean;
  public resultado: string;
  public indice: number;

  constructor() {
    this.indice = 0;
    this.miCiudad = null;
    this.isHidden = false;
    this.ciudades = [
      new Ciudad('Madrid', 'España', 'MAD', new Clima(20, 200, 60)),
      new Ciudad('Cali', 'Colombia', 'CL', new Clima(20, 200, 60)),
      new Ciudad('Florencia', 'Italia', 'FL', new Clima(20, 200, 60)),
    ];
  }

  // FUNCION QUE ME CREA UN NUEVO CLIMA
  dataWeight(
    ciudad: HTMLInputElement,
    pais: HTMLInputElement,
    codigo: HTMLInputElement,
    temperatura: HTMLInputElement,
    viento: HTMLInputElement,
    precipitaciones: HTMLInputElement
  ) {
    console.log(this.ciudades);
    let ciudadNueva = new Ciudad(
      String(ciudad.value),
      String(pais.value),
      String(codigo.value),
      new Clima(
        Number(temperatura.value),
        Number(viento.value),
        Number(precipitaciones.value)
      )
    );
    this.ciudades.push(ciudadNueva);
    return ciudadNueva;
    // console.log(this.ciudades);
  }

  // METODO PARA MOSTRAR TODA LA INFORMACION

  showInfo(index: Number) {
    this.indice = Number(index);
    this.isHidden = true;
    this.resultado = `Ciudad: ${this.ciudades[Number(index)].ciudad} |
                      País: ${this.ciudades[Number(index)].pais} |
                      Código: ${this.ciudades[Number(index)].codigo} |
                      Temperatura: ${this.ciudades[Number(index)].clima.temperatura}Cº |
                      Viento: ${this.ciudades[Number(index)].clima.viento}Km/h |
                      Precipitaciones: ${this.ciudades[Number(index)].clima.precipitraciones}`;

    // console.log (this.ciudades[Number(index)].clima);
    // console.log (this.ciudades[Number(index)].ciudad);

    return this.resultado;
  }

  ngOnInit(): void {}
}
