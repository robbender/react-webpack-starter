import React from 'react';
import reactDom from 'react-dom';
// import './styles/styles.css'
import './styles/styles.scss'

const App = function () {
  return <h1 > Hello World.This a css test < /h1>
}

reactDom.render( < App / > , document.getElementById('root'));