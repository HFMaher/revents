import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './app/layout/styles.css';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

const rootEL=document.getElementById('root');

function render() {
  ReactDOM.render(
  
  <BrowserRouter>
 
  <App/>
  </BrowserRouter>,
  rootEL
  );
}
if(module.hot){
  module.hot.accept('./app/layout/App',function(){

    setTimeout(render);
  })
}
render();

//ReactDOM.render(
 
 //   <App />
//  ,
 // document.getElementById('root')
//);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
