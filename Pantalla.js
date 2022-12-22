class Pantalla {
    constructor(pantallalineaUsuari, pantallalineaResultat) {
        this.pantallalineaResultat = pantallalineaResultat;
        this.pantallalineaUsuari = pantallalineaUsuari;
        this.calculador = new Calculadora();
        this.tipusOperacio = undefined;
        this.lineaResultat = '';
        this.lineaUsuari = '';
        this.simbols = {
            sumar: '+',
            dividir: '/',
            multiplicar: 'x',
            restar: '-', 
        }
    }

    borrar() {
        this.lineaResultat = this.lineaResultat.toString().slice(0,-1);
        this.imprimirValors();
    }

    reset() {
        this.lineaResultat = '';
        this.lineaUsuari = '';
        this.tipusOperacio = undefined;
        this.imprimirValors();
    }

    computar(tipo) {
        this.tipusOperacio !== 'igual' && this.calcular();
        this.tipusOperacio = tipo;
        this.lineaUsuari = this.lineaResultat.toString() || this.lineaUsuari;
        this.lineaResultat = '';
        this.imprimirValors();
    }

    agregarNumero(numero) {
        if(numero === '.' && this.lineaResultat.includes('.')) return
        this.lineaResultat = this.lineaResultat.toString() + numero.toString();
        this.imprimirValors();
    }

    imprimirValors() {
        this.pantallalineaResultat.textContent = (this.lineaResultat);
        this.pantallalineaUsuari.textContent = `${this.lineaUsuari} ${this.simbols[this.tipusOperacio] || ''}`;
    }

    calcular() {
        const lineaUsuari = parseFloat(this.lineaUsuari);
        const lineaResultat = parseFloat(this.lineaResultat);

        if( isNaN(lineaResultat)  || isNaN(lineaUsuari) ) return
        this.lineaResultat = this.calculador[this.tipusOperacio](lineaUsuari, lineaResultat);
    }
}