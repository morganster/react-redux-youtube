import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css'
import { HomePage } from './Containers';
import registerServiceWorker from './registerServiceWorker';
import { store } from './Helpers';


ReactDOM.render( 
<Provider store={store}>
            <HomePage />
</Provider>,
 document.getElementById('root'));
registerServiceWorker();
