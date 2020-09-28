import { Component, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.scss']
})
export class CiudadesComponent implements OnInit {

  ciudades: Ciudad[]; 

  constructor(){
    this.ciudades = [
      new Ciudad ('Madrid', 'España', 'MAD'),
      new Ciudad ('Cali', 'Colombia', 'CL'),
      new Ciudad ('Barcelona', 'España', 'BCN'),
      new Ciudad ('Florencia', 'Italia', 'FL')
    ]
  }
  ngOnInit(): void {
  }

}
