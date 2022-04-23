// dyn.js
import image from '../src/icons/like.png';

import { pushLike, pullLikes } from './socialApi';

export default class DynGrid {
  header = document.getElementById('Header');

  footer = document.getElementById('Footer');

  dynamicGrid = document.getElementById('dynamicGrid');

  genCard = (data, i, unqId, imgSrc, foodName) => {
    const id = i + 1;
    const cardContainer = document.createElement('div');
    const cardPic = document.createElement('div');
    const cardPicImg = document.createElement('img');
    cardPicImg.src = `${imgSrc}`;
    const cardMeta = document.createElement('div');
    const cardInfo = document.createElement('div');
    const cardTitle = document.createElement('div');
    cardTitle.innerHTML = `${foodName}`;
    cardPic.classList.add('card-pic');
    cardMeta.classList.add('card-meta');
    cardInfo.classList.add('card-info');
    cardTitle.classList.add('card-title');
    const cardSocials = document.createElement('div');
    cardSocials.classList.add('card-socials');
    const likeBtn = document.createElement('img');
    likeBtn.classList.add('like-btn');
    likeBtn.src = image;
    likeBtn.alt = 'Like button';
    const likeCounter = document.createElement('div');
    likeCounter.classList.add('like-counter');
    const showLikeQt = async (data, i, unqId) => {
      likeCounter.innerHTML = `${await Promise.resolve(pullLikes(unqId))} likes`;
    };
    showLikeQt(data, i, unqId);
    likeBtn.addEventListener('click', async () => {
      await Promise.resolve(pushLike(unqId));
      likeCounter.innerHTML = `${await Promise.resolve(pullLikes(unqId))} likes`;
    });
    const commentBtn = document.createElement('div');
    commentBtn.id = `${id}`;
    commentBtn.innerHTML = 'Comments';
    const reserveBtn = document.createElement('div');
    reserveBtn.innerHTML = 'Reservations';
    commentBtn.classList.add('comment-btn');
    reserveBtn.classList.add('reserve-btn');

    cardContainer.className = 'card-container';
    cardContainer.id = `${unqId}`;
    this.dynamicGrid.className = 'dynamic-grid';

    cardPic.appendChild(cardPicImg);
    cardSocials.appendChild(likeBtn);
    cardSocials.appendChild(likeCounter);
    cardInfo.appendChild(cardTitle);
    cardInfo.appendChild(cardSocials);
    cardMeta.appendChild(cardInfo);
    cardMeta.appendChild(commentBtn);
    cardMeta.appendChild(reserveBtn);
    cardContainer.appendChild(cardPic);
    cardContainer.appendChild(cardMeta);
    this.dynamicGrid.appendChild(cardContainer);

    commentBtn.addEventListener('click', () => {
      this.showPopup(data, i);
    });
  }

  genPopupCom = (id) => {
    const dynamicGrid = document.getElementById('dynamicGrid');
    dynamicGrid.className = 'dynamic-grid-popup';
    const popupContainer = document.createElement('div');
    popupContainer.className = 'popup-container';
    popupContainer.id = 'popupContainer';

    const mealInfo = document.createElement('div');
    mealInfo.className = 'meal-info';

    const popupHeader = document.createElement('div');
    popupHeader.className = 'popup-header';

    const empty = document.createElement('div');
    empty.className = 'empty';
    empty.innerHTML = ' ';

    const cardPic = document.createElement('div');
    cardPic.className = 'popup-card-pic';

    const commentBoard = document.createElement('div');
    commentBoard.className = 'comment-board';

    const newC = false;
    this.paintComments(id, commentBoard, newC);

    const commentForm = document.createElement('form');
    commentForm.className = 'comment-form';
    commentForm.innerHTML = `
    <h2 class="comment-counter">Add a comment</h2>
    `;

    const newName = document.createElement('input');
    newName.id = 'newName';
    newName.type = 'text';
    newName.className = 'new-name';
    newName.name = 'newName';
    newName.required = true;
    newName.minlength = 1;
    newName.maxlength = 30;
    newName.placeholder = 'Your name';
    commentForm.appendChild(newName);

    const newComment = document.createElement('textarea');
    newComment.id = 'newComment';
    newComment.className = 'new-comment';
    newComment.name = 'newComment';
    newComment.required = true;
    newComment.minlength = 2;
    newComment.maxlength = 300;
    newComment.placeholder = 'Your comment';
    commentForm.appendChild(newComment);

    const addCommentBtn = document.createElement('button');
    addCommentBtn.id = `addBtn${id}`;
    addCommentBtn.type = 'button';
    addCommentBtn.className = 'btn';
    addCommentBtn.innerHTML = 'Comment';

    popupContainer.appendChild(mealInfo);
  };

  showPage = async (data) => {
    const cardQt = 14;
    const home = document.getElementById('Home');
    home.innerHTML = `Home (${cardQt})`;
    this.dynamicGrid.innerHTML = '';
    this.header.className = 'header';
    this.footer.className = 'footer';
    const dataSet = data;

    for (let i = 0; i < cardQt; i += 1) {
      const cardId = i;
      const cardUnqId = data[i].idMeal;
      const picSrc = data[i].strMealThumb;
      const foodName = data[i].strMeal;
      this.genCard(dataSet, cardId, cardUnqId, picSrc, foodName);
    }
  }

  hideIt = (item) => {
    item.innerHTML = '';
    item.className = 'zeroSpacing';
    item.classList.add('hide');
  }
}
