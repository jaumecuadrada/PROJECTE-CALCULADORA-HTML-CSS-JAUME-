class Pantalla {
    constructor(pantallalineaUsuari, pantallalineaResultat) {
        this.pantallalineaResultat = pantallalineaResultat;
        this.pantallalineaUsuari = pantallalineaUsuari;
        this.calculador = new Calculadora();
        this.tipusOperacio = undefined;
        this.contador=0;
        this.lineaResultat = '';
        this.lineaUsuari = '';
        this.simbols = {
            C: '+',
            dividir: '/',
            multiplicar: 'x',
            restar: '-', 
        }
    }

    borrar() {
        if (this.contador>0){
            this.contador--;
        }
        this.lineaResultat = this.lineaResultat.toString().slice(0,-1);
        this.imprimirValors();
    }

    reset() {
        this.lineaResultat = '';
        this.lineaUsuari = '';
        this.tipusOperacio = undefined;
        this.imprimirValors();
        this.contador = 0;
    }

    count() {
        this.contador=0;
    }

    count2() {
        if (!this.lineaResultat.includes('.')){
            this.contador--; 
        } 
    }

    computar(tipo) {
        this.tipusOperacio !== 'igual' && this.calcular();
        this.tipusOperacio = tipo;
        this.lineaUsuari = this.lineaResultat.toString() || this.lineaUsuari;
        this.lineaResultat = '';
        this.imprimirValors();
    }

    agregarNumero(numero) {
        if (this.contador>14) return
        if(numero === '.' && this.lineaResultat.includes('.')) return
        this.contador++;
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