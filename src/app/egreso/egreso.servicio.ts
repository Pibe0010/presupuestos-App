import { Egreso } from "./egreso.model";

export class EgresoSrevicio{
    egreso:Egreso[] = [
        new Egreso("Renta Depto",900 ),
        new Egreso("Ropa",200)
    ];

    eliminar(egreso:Egreso){
        const indice: number = this.egreso.indexOf(egreso);
        this.egreso.splice(indice,1);
    }
}