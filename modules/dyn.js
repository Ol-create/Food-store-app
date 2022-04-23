// dyn.js
import image from '../src/icons/like.png';

import {
  pullComments, pullCommCounter, pushComment, pushLike, pullLikes,
} from './socialApi';

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
  }
}
