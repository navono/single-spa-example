
import { registerApplication, start } from 'single-spa';

registerApplication(
  // Name of our single-spa application
  'home',
  // Loading function
  () => import('./packages/home/index.js'),
  // Activity function
  (location) => location.pathname === "" || 
    location.pathname === "/" || 
    location.pathname.startsWith('/home')
);

registerApplication(
  'navBar',
  () => import('./packages/navBar/index.js').then(mod => mod.navBar),
  () => true
);

registerApplication(
  'angularJS',
  () => import ('./packages/angularJS/angularJS.app.js'),
  pathPrefix('/angularJS'),
);


// `loadingFunction` must be a function that returns a Promise (or an async function). 
// The function will be called with no arguments when loading the application for the first time. 
// The returned promise must resolve with the application code.

// `activityFunction` must be a function that returns a truthy value that represents whether the application should be active, 
// and must be a pure function. The function is provided window.location as the first argument. 
// The most common scenario is to determine if an application is active by looking at window.location, 
// but not always. In this case, home will be our root application so it will be shown at the root url paths as well as 
// and url pathname that begins with /home.

// call `start` in order for applications be mounted. Before start is called, applications will be loaded into the browser 
// but not bootstrapped/mounted/unmounted.
start();

function pathPrefix(prefix) {
  return function (location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}
