import { Clima } from './clima';

export class Ciudad {
    public ciudad: string;
    public pais: string;
    public codigo: string;
    public clima: Clima;
  
    constructor(ciudad: string, pais: string, codigo: string, clima: Clima) {
      this.ciudad = ciudad;
      this.pais = pais;
      this.codigo = codigo;
      this.clima = clima;
    }
  
  }
