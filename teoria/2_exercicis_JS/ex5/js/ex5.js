// DOMContentLoaded, click, dblclick, keydown, keyup


// 1a forma
document.addEventListener('dblclick', inici);

function inici (){
    console.log('Has pres una tecla');
}
// 2a forma

document.addEventListener('keydown', (tecla)=>{
    console.log('Has pres una tecla');
    document.getElementsByTagName('h1')[0].style.color = 'red';
    document.getElementsByTagName('h1')[0].style.background = 'yellow';

    // console.log(tecla.key);
    // console.log(tecla.keyCode);
    
    if(tecla.key =='ArrowUp'){
        console.log('amunt!')
    }
    if(tecla.key =='ArrowDown'){
        console.log('abaix!')
    }
    if(tecla.key =='ArrowRight'){
        console.log('dreta!')
    }
    if(tecla.key =='ArrowLeft'){
        console.log('esquerra!')
    }
    if(tecla.key ==' '){
        console.log('espai!')
    }
});

document.addEventListener('keyup', ()=>{
    // console.log('Has pres una tecla');
    document.getElementsByTagName('h1')[0].style.color = 'black';
    document.getElementsByTagName('h1')[0].style.background = 'white';
});

  