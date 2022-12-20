const pantallaLineaResultat = document.getElementById('linea-resultat');
const pantallaLineaUsuari = document.getElementById('linea-usuari');
const botonsNumeros = document.querySelectorAll('.numero');
const botonsOperadors = document.querySelectorAll('.operador');

const pantalla = new Pantalla(pantallaLineaResultat, pantallaLineaUsuari);

botonsNumeros.forEach(boto => {
    boto.addEventListener('click', () => pantalla.agregarNumero(boto.innerHTML));
});

botonsOperadors.forEach(boto => {
    boto.addEventListener('click', () => pantalla.computar(boto.value))
});