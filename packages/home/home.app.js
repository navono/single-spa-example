import React from 'react';
import ReactDOM from 'react-dom';
import SingleSpaReact from 'single-spa-react';
import Home from './component';

function domElementGetter() {
  return document.getElementById('home');
}

const reactLifecycles = SingleSpaReact({
  React,
  React,
  rootComponent: Home,
  domElementGetter,
});

export const bootstrap = [
  reactLifecycles.bootstrap,
];

export const mount = [
  reactLifecycles.mount,
];

export const unmount = [
  reactLifecycles.unmount,
];