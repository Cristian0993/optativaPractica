

// 1a forma
document.getElementById('resultat').textContent = 'Hola';

// 2a forma
let resultat = document.getElementById('resultat');
resultat.innerHTML += '<p>Adeu</p>';


console.log(resultat);



