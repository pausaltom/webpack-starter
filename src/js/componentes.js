import "../css/componentes.css";
import webpackLogo from '../assets/img/webpack-logo.png';

export const saludar = ( nombre ) =>{
    console.log('Creando etiqueta h1');

    const h1 = document.createElement("h1");
    h1.innerText= `Hola ${nombre}`;
    document.body.append(h1);

    const img = document.createElement('img');
    img.src= webpackLogo;
    document.querySelector('#app').append(img);
}

export const recibirUser = async()=>{
    const resp = await fetch('https://reqres.in/api/users?page=2');
    return await resp.json();
}

    
