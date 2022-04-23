/* eslint-disable import/no-unresolved */
// index.js

import DynGrid from '../modules/dyn';
import './index.scss';
import loadMeals from '../modules/loadMeals';

const myDynGrid = new DynGrid();
window.addEventListener('load', async () => {
  myDynGrid.showPage(await loadMeals());
});
