import { registerApplication, start } from 'single-spa';

registerApplication(
  // Name of our single-spa application
  'home',
  // Our loading function
  () => import('./packages/home/home.app.js'),
  // activityFunction
  (location) => location.pathname === '' ||
    location.pathname === '/' ||
    location.pathname.startWith('/home')
);

start();
