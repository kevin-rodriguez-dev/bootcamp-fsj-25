export class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: string;

    constructor(titulo: string, color: string, fuente: string) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = 'izquierda'; // Valor por defecto
    }

    obtenerPropiedades(): { titulo: string, color: string, fuente: string } {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente
        };
    }

    establecerAlineacion(alineacion: 'centrado' | 'derecha' | 'izquierda'): void {
        this.alineacion = alineacion;
    }

    imprimirPropiedades(): void {
        console.log(`Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}, Alineación: ${this.alineacion}`);
    }
}
