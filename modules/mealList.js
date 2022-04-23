/* eslint-disable */
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

    const likesText = document.createElement('div');
    likesText.classList.add('count');

    const like = document.createElement('div');
    const icon = document.createElement('i');
    icon.classList.add('fa', 'fa-heart-o');
    like.classList.add('like');
    like.appendChild(icon);

    const likesCount = document.createElement('p');
    likesCount.classList.add('likes-count');
    likesCount.innerHTML = `${await Promise.resolve(
      // eslint-disable-next-line comma-dangle
      updatelike(data[i].idMeal)
    )} likes`;
    likesText.appendChild(likesCount);

    like.addEventListener('click', async () => {
      await Promise.resolve(sendLike(data[i].idMeal));
      likesCount.innerHTML = `${await Promise.resolve(
        // eslint-disable-next-line comma-dangle
        updatelike(data[i].idMeal)
      )} likes`;
    });

    listItem.appendChild(image);
    listItem.appendChild(mealName);
    listItem.appendChild(likesText);
    listItem.appendChild(comBtn);
    main.appendChild(listItem);
  }
};

export default mealList;
