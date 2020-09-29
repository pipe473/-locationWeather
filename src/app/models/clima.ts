export class Clima {
    public temperatura: number;
    public viento: number;
    public precipitraciones: number;

    constructor(temperatura: number, viento: number, precipitraciones: number ){
        this.temperatura = temperatura;
        this.viento = viento;
        this.precipitraciones = precipitraciones;
    }
}
