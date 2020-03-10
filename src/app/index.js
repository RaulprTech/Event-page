import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import {Evento} from  './evento.json';

ReactDOM.render(<Nav title={Evento}/>, document.getElementById('app'));
