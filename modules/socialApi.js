// socialApi.js

const apiAddress = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/paul4jsLQspdbzdaBFGyapdLOluyemi/likes';
const unqKey = 'paul4jsLQspdbzdaBFGyapdLOluyemi';

const pushCommentToApi = async (pushThisToApi) => {
  const outcome = await fetch(`${apiAddress}/${unqKey}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pushThisToApi),
  });
  return outcome;
};

const pushComment = (id, name, comm) => {
  const pushThisToApi = {
    item_id: id,
    username: name,
    comment: comm,
  };
  const outcome = pushCommentToApi(pushThisToApi);
  return outcome;
};

const pullComments = async (id) => {
  const commListUrl = `${apiAddress}/${unqKey}/comments?item_id=${id}`;
  const outcome = await fetch(commListUrl);
  const commList = await outcome.json();
  return commList;
};

const pullCommCounter = (commList) => commList.length;

const pushLikeToApi = async (pushThisToApi) => {
  const outcome = await fetch(likesUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pushThisToApi),
  });
  return outcome;
};

const pushLike = async (unqId) => {
  const likedItem = {
    item_id: unqId,
  };
  Promise.resolve(await pushLikeToApi(likedItem));
};

const getLikesFromApi = async () => {
  const outcome = await fetch(likesUrl);
  const likeList = await outcome.json();
  return likeList;
};

const pullLikes = async (unqId) => {
  const allLikedItems = await Promise.resolve(getLikesFromApi());
  const likeList = (allLikedItems);
  let likeCounter = 0;
  for (let i = 0; i < likeList.length; i += 1) {
    if (likeList[i].item_id === unqId) {
      likeCounter = likeList[i].likes;
    }
  }
  return likeCounter;
};

export {
  pushLike, pullLikes, pushComment, pullComments, pullCommCounter, unqKey,
};
