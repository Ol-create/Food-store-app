/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-await-in-loop */
import { updatelike, sendLike } from '../src/likesApi.';

import loadMeals from './loadMeals';

const mealList = async (data) => {
  const main = document.querySelector('#grid');

  const meals = await loadMeals();
  meals.splice(6);
  const listCount = meals.length;
  document.getElementById('counter').innerText = `(${listCount})`;

  for (let i = 0; i < meals.length; i += 1) {
    const image = document.createElement('img');
    image.classList = 'imgClass';
    const mealName = document.createElement('h3');
    const comBtn = document.createElement('button');

    comBtn.innerHTML = 'Comments';
    comBtn.classList = 'commentsBtn';

    const listItem = document.createElement('div');
    listItem.classList = 'gridPoint';
    listItem.id = data[i].idMeal;

    image.src = data[i].strMealThumb;
    mealName.innerHTML = data[i].strMeal;
	listItem.appendChild(image);
    listItem.appendChild(mealName);
    listItem.appendChild(likesText);
    listItem.appendChild(comBtn);
    main.appendChild(listItem);
  }
};

export default mealList;
