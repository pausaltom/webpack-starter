
import { recibirUser, saludar } from './js/componentes.js';

import'./styles.css';

const nombre = 'Pau';
saludar(nombre)

recibirUser().then(console.log);