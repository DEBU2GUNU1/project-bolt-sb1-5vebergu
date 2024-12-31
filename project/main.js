import { initializeCard, createCardHTML } from './src/js/card.js';
import './src/styles/base.css';
import './src/styles/card.css';
import './src/styles/message.css';
import './src/styles/animations.css';

document.querySelector('#app').innerHTML = createCardHTML();
initializeCard();