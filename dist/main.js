/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/dyn.js":
/*!************************!*\
  !*** ./modules/dyn.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DynGrid)\n/* harmony export */ });\n/* harmony import */ var _src_icons_like_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/icons/like.png */ \"./src/icons/like.png\");\n/* harmony import */ var _socialApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socialApi */ \"./modules/socialApi.js\");\n// dyn.js\n\n\n\n\nclass DynGrid {\n  header = document.getElementById('Header');\n\n  footer = document.getElementById('Footer');\n\n  dynamicGrid = document.getElementById('dynamicGrid');\n\n  genCard = (data, i, unqId, imgSrc, foodName) => {\n    const id = i + 1;\n    const cardContainer = document.createElement('div');\n    const cardPic = document.createElement('div');\n    const cardPicImg = document.createElement('img');\n    cardPicImg.src = `${imgSrc}`;\n    const cardMeta = document.createElement('div');\n    const cardInfo = document.createElement('div');\n    const cardTitle = document.createElement('div');\n    cardTitle.innerHTML = `${foodName}`;\n    cardPic.classList.add('card-pic');\n    cardMeta.classList.add('card-meta');\n    cardInfo.classList.add('card-info');\n    cardTitle.classList.add('card-title');\n    const cardSocials = document.createElement('div');\n    cardSocials.classList.add('card-socials');\n    const likeBtn = document.createElement('img');\n    likeBtn.classList.add('like-btn');\n    likeBtn.src = _src_icons_like_png__WEBPACK_IMPORTED_MODULE_0__;\n    likeBtn.alt = 'Like button';\n    const likeCounter = document.createElement('div');\n    likeCounter.classList.add('like-counter');\n    const showLikeQt = async (data, i, unqId) => {\n      likeCounter.innerHTML = `${await Promise.resolve((0,_socialApi__WEBPACK_IMPORTED_MODULE_1__.pullLikes)(unqId))} likes`;\n    };\n    showLikeQt(data, i, unqId);\n    likeBtn.addEventListener('click', async () => {\n      await Promise.resolve((0,_socialApi__WEBPACK_IMPORTED_MODULE_1__.pushLike)(unqId));\n      likeCounter.innerHTML = `${await Promise.resolve((0,_socialApi__WEBPACK_IMPORTED_MODULE_1__.pullLikes)(unqId))} likes`;\n    });\n    const commentBtn = document.createElement('div');\n    commentBtn.id = `${id}`;\n    commentBtn.innerHTML = 'Comments';\n    const reserveBtn = document.createElement('div');\n    reserveBtn.innerHTML = 'Reservations';\n    commentBtn.classList.add('comment-btn');\n    reserveBtn.classList.add('reserve-btn');\n\n    cardContainer.className = 'card-container';\n    cardContainer.id = `${unqId}`;\n    this.dynamicGrid.className = 'dynamic-grid';\n\n    cardPic.appendChild(cardPicImg);\n    cardSocials.appendChild(likeBtn);\n    cardSocials.appendChild(likeCounter);\n    cardInfo.appendChild(cardTitle);\n    cardInfo.appendChild(cardSocials);\n    cardMeta.appendChild(cardInfo);\n    cardMeta.appendChild(commentBtn);\n    cardMeta.appendChild(reserveBtn);\n    cardContainer.appendChild(cardPic);\n    cardContainer.appendChild(cardMeta);\n    this.dynamicGrid.appendChild(cardContainer);\n\n    commentBtn.addEventListener('click', () => {\n      this.showPopup(data, i);\n    });\n  }\n\n  paintComments = (id, commentBoard, newC) => {\n    if (newC) {\n      const tmpCommBoardContent = document.getElementById('commBoardContent');\n      commentBoard.removeChild(tmpCommBoardContent);\n    }\n\n    const commBoardContent = document.createElement('div');\n    commBoardContent.id = 'commBoardContent';\n\n    const cmHeader = document.createElement('h2');\n    const cmCounter = document.createElement('span');\n\n    (0,_socialApi__WEBPACK_IMPORTED_MODULE_1__.pullComments)(id).then((outcome) => {\n      if (outcome.error) {\n        commBoardContent.innerHTML = '<h2>Comments (0)</h2> <span>\\nNo comments</span>';\n      } else {\n        cmCounter.textContent = (0,_socialApi__WEBPACK_IMPORTED_MODULE_1__.pullCommCounter)(outcome);\n        cmHeader.textContent = 'Comments (';\n        cmHeader.appendChild(cmCounter);\n        cmHeader.innerHTML += ')';\n        commBoardContent.append(cmHeader);\n\n        const commList = document.createElement('ul');\n        commList.id = 'commList';\n        outcome.forEach((comment) => {\n          commList.innerHTML += `\n          <li>\n            <span>[${comment.creation_date}]</span>\n            <span class=\"commentator\">${comment.username}: </span>\n            <span> ${comment.comment}</span>\n          </li>\n          `;\n        });\n        commBoardContent.appendChild(commList);\n      }\n    }, () => {\n      commBoardContent.innerHTML = '<span>NO COMMENTS</span>';\n    });\n    commentBoard.appendChild(commBoardContent);\n  };\n\n  genPopupCom = (data, id, unqId, imgSrc, foodName, fCat, fOrig, fTags, fVideo, fInst) => {\n    const dynamicGrid = document.getElementById('dynamicGrid');\n    dynamicGrid.className = 'dynamic-grid-popup';\n    const popupContainer = document.createElement('div');\n    popupContainer.className = 'popup-container';\n    popupContainer.id = 'popupContainer';\n\n    const mealInfo = document.createElement('div');\n    mealInfo.className = 'meal-info';\n\n    const popupHeader = document.createElement('div');\n    popupHeader.className = 'popup-header';\n\n    const empty = document.createElement('div');\n    empty.className = 'empty';\n    empty.innerHTML = ' ';\n\n    const cardPic = document.createElement('div');\n    cardPic.className = 'popup-card-pic';\n\n    const popupImg = document.createElement('img');\n    popupImg.src = `${imgSrc}`;\n    popupImg.alt = `${foodName}`;\n\n    const popupX = document.createElement('div');\n    popupX.className = 'popup-x';\n    popupX.innerHTML = 'X';\n\n    const popupMeta = document.createElement('div');\n    popupMeta.className = 'popup-meta';\n\n    popupMeta.innerHTML = `\n    <div class=\"popup-info\">\n      <h1 class=\"popup-title\">${foodName}</h1>\n      <div class=\"popup-meal-details\">\n        <span>Category: ${fCat}</span> &nbsp; &nbsp; &nbsp; &nbsp;\n        <span>Origin: ${fOrig}</span> &nbsp; &nbsp; &nbsp; &nbsp;\n        <span>Tags: ${fTags}</span></br>\n        <span>Recipe's video: <a href=\"${fVideo}\">${fVideo}</a></span></br>\n        <p>Instructions: ${fInst}</p>\n      </div>\n    </div>\n    `;\n\n    cardPic.appendChild(popupImg);\n    popupHeader.appendChild(empty);\n    popupHeader.appendChild(cardPic);\n    popupHeader.appendChild(popupX);\n    mealInfo.appendChild(popupHeader);\n    mealInfo.appendChild(popupMeta);\n\n    const commentBoard = document.createElement('div');\n    commentBoard.className = 'comment-board';\n\n    const newC = false;\n    this.paintComments(id, commentBoard, newC);\n\n    const commentForm = document.createElement('form');\n    commentForm.className = 'comment-form';\n    commentForm.innerHTML = `\n    <h2 class=\"comment-counter\">Add a comment</h2>\n    `;\n\n    const newName = document.createElement('input');\n    newName.id = 'newName';\n    newName.type = 'text';\n    newName.className = 'new-name';\n    newName.name = 'newName';\n    newName.required = true;\n    newName.minlength = 1;\n    newName.maxlength = 30;\n    newName.placeholder = 'Your name';\n    commentForm.appendChild(newName);\n\n    const newComment = document.createElement('textarea');\n    newComment.id = 'newComment';\n    newComment.className = 'new-comment';\n    newComment.name = 'newComment';\n    newComment.required = true;\n    newComment.minlength = 2;\n    newComment.maxlength = 300;\n    newComment.placeholder = 'Your comment';\n    commentForm.appendChild(newComment);\n\n    const addCommentBtn = document.createElement('button');\n    addCommentBtn.id = `addBtn${id}`;\n    addCommentBtn.type = 'button';\n    addCommentBtn.className = 'btn';\n    addCommentBtn.innerHTML = 'Comment';\n    commentForm.appendChild(addCommentBtn);\n\n    popupContainer.appendChild(mealInfo);\n    popupContainer.appendChild(commentBoard);\n    popupContainer.appendChild(commentForm);\n\n    dynamicGrid.appendChild(popupContainer);\n\n    popupX.addEventListener('click', () => {\n      this.showPage(data);\n    });\n\n    addCommentBtn.addEventListener('click', async () => {\n      // PUSH NEW COMMENT TO API\n      await Promise.resolve((0,_socialApi__WEBPACK_IMPORTED_MODULE_1__.pushComment)(id, newName.value, newComment.value));\n      commentForm.reset();\n      // UPDATES THE COMMENT BOARD WITH THE NEW COMMENT\n      const newC = true;\n      await Promise.resolve(this.paintComments(id, commentBoard, newC));\n    });\n\n    const commBoardContent = document.createElement('div');\n\n    const commList = document.createElement('ul');\n    commList.id = 'commList';\n    commList.innerHTML += `\n    <li>\n      <span class=\"commentator\">${newName.value}: </span>\n      <span> ${newComment.value}</span>\n    </li>\n    `;\n    commentBoard.appendChild(commBoardContent);\n  };\n\n  showPage = async (data) => {\n    const cardQt = 14;\n    const home = document.getElementById('Home');\n    home.innerHTML = `Home (${cardQt})`;\n    this.dynamicGrid.innerHTML = '';\n    this.header.className = 'header';\n    this.footer.className = 'footer';\n    const dataSet = data;\n\n    for (let i = 0; i < cardQt; i += 1) {\n      const cardId = i;\n      const cardUnqId = data[i].idMeal;\n      const picSrc = data[i].strMealThumb;\n      const foodName = data[i].strMeal;\n      this.genCard(dataSet, cardId, cardUnqId, picSrc, foodName);\n    }\n  }\n\n  showPopup = (data, i) => {\n    this.dynamicGrid.innerHTML = '';\n    this.header.className = 'hide';\n    this.footer.className = 'hide';\n    const cardId = i;\n    const cardUnqId = data[i].idMeal;\n    const picSrc = data[i].strMealThumb;\n    const foodName = data[i].strMeal;\n    const fCat = data[i].strCategory;\n    const fOrig = data[i].strArea;\n    const fTags = data[i].strTags;\n    // if(data[i].)\n    const fVideo = data[i].strYoutube;\n    const fInst = data[i].strInstructions;\n    this.genPopupCom(data, cardId, cardUnqId, picSrc, foodName, fCat, fOrig, fTags, fVideo, fInst);\n  }\n\n  hideIt = (item) => {\n    item.innerHTML = '';\n    item.className = 'zeroSpacing';\n    item.classList.add('hide');\n  }\n}\n\n\n//# sourceURL=webpack://capstone/./modules/dyn.js?");

/***/ }),

/***/ "./modules/loadMeals.js":
/*!******************************!*\
  !*** ./modules/loadMeals.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// creating a function that reloads the page\nconst loadMeals = async () => {\n  const response = await fetch(\n    'https://www.themealdb.com/api/json/v1/1/search.php?s=',\n  );\n  const result = await response.json();\n  return result.meals;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMeals);\n\n\n//# sourceURL=webpack://capstone/./modules/loadMeals.js?");

/***/ }),

/***/ "./modules/socialApi.js":
/*!******************************!*\
  !*** ./modules/socialApi.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pullCommCounter\": () => (/* binding */ pullCommCounter),\n/* harmony export */   \"pullComments\": () => (/* binding */ pullComments),\n/* harmony export */   \"pullLikes\": () => (/* binding */ pullLikes),\n/* harmony export */   \"pushComment\": () => (/* binding */ pushComment),\n/* harmony export */   \"pushLike\": () => (/* binding */ pushLike),\n/* harmony export */   \"unqKey\": () => (/* binding */ unqKey)\n/* harmony export */ });\n// socialApi.js\n\nconst apiAddress = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';\nconst likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4jsLQspdbzdaBFGyapdLoluola/likes';\nconst unqKey = '4jsLQspdbzdaBFGyapdLoluola';\n\nconst pushCommentToApi = async (pushThisToApi) => {\n  const outcome = await fetch(`${apiAddress}/${unqKey}/comments`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(pushThisToApi),\n  });\n  return outcome;\n};\n\nconst pushComment = (id, name, comm) => {\n  const pushThisToApi = {\n    item_id: id,\n    username: name,\n    comment: comm,\n  };\n  const outcome = pushCommentToApi(pushThisToApi);\n  return outcome;\n};\n\nconst pullComments = async (id) => {\n  const commListUrl = `${apiAddress}/${unqKey}/comments?item_id=${id}`;\n  const outcome = await fetch(commListUrl);\n  const commList = await outcome.json();\n  return commList;\n};\n\nconst pullCommCounter = (commList) => commList.length;\nconst pushLikeToApi = async (pushThisToApi) => {\n  const outcome = await fetch(likesUrl, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(pushThisToApi),\n  });\n  return outcome;\n};\n\nconst pushLike = async (unqId) => {\n  const likedItem = {\n    item_id: unqId,\n  };\n  Promise.resolve(await pushLikeToApi(likedItem));\n};\n\nconst getLikesFromApi = async () => {\n  const outcome = await fetch(likesUrl);\n  const likeList = await outcome.json();\n  return likeList;\n};\n\nconst pullLikes = async (unqId) => {\n  const allLikedItems = await Promise.resolve(getLikesFromApi());\n  const likeList = (allLikedItems);\n  let likeCounter = 0;\n  for (let i = 0; i < likeList.length; i += 1) {\n    if (likeList[i].item_id === unqId) {\n      likeCounter = likeList[i].likes;\n    }\n  }\n  return likeCounter;\n};\n\n\n\n\n//# sourceURL=webpack://capstone/./modules/socialApi.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Anton&family=Crete+Round&family=Dosis:wght@300;400&family=Inter:wght@600&family=Lato:wght@700&family=Merriweather:ital@1&family=Montserrat:wght@700&family=Poppins:wght@200;400;600&family=Quicksand:wght@700&family=Roboto:wght@700&family=Space+Mono:ital@1&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  font-family: Merriweather, Arial, Helvetica, sans-serif;\\r\\n  text-decoration: none;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.zeroSpacing {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nul {\\r\\n  -webkit-margin-before: 0;\\r\\n          margin-block-start: 0;\\r\\n  -webkit-margin-after: 0;\\r\\n          margin-block-end: 0;\\r\\n  -webkit-margin-start: 0;\\r\\n          margin-inline-start: 0;\\r\\n  -webkit-margin-end: 0;\\r\\n          margin-inline-end: 0;\\r\\n  -webkit-padding-start: 0;\\r\\n          padding-inline-start: 0;\\r\\n}\\r\\n\\r\\n.grid-container {\\r\\n  display: -ms-grid;\\r\\n  display: grid;\\r\\n  height: 100vh;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  display: -ms-grid;\\r\\n  display: grid;\\r\\n  -ms-grid-columns: auto auto auto auto;\\r\\n      grid-template-columns: auto auto auto auto;\\r\\n  padding: 0.6rem;\\r\\n  margin: 0 1rem;\\r\\n}\\r\\n\\r\\n.header ul {\\r\\n  display: -webkit-box;\\r\\n  display: -ms-flexbox;\\r\\n  display: flex;\\r\\n  -webkit-box-orient: horizontal;\\r\\n  -webkit-box-direction: normal;\\r\\n      -ms-flex-direction: row;\\r\\n          flex-direction: row;\\r\\n  -webkit-box-pack: justify;\\r\\n      -ms-flex-pack: justify;\\r\\n          justify-content: space-between;\\r\\n  -webkit-box-align: center;\\r\\n      -ms-flex-align: center;\\r\\n          align-items: center;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.header ul a {\\r\\n  color: #000;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  font-size: 1.4rem;\\r\\n  font-weight: 900;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-size: 1.2rem;\\r\\n  text-align: center;\\r\\n  color: #222;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  font-size: 0.9rem;\\r\\n  text-align: center;\\r\\n  color: #222;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.dynamic-grid,\\r\\n.card-grid {\\r\\n  display: -ms-grid;\\r\\n  display: grid;\\r\\n  -ms-grid-columns: 1fr;\\r\\n      grid-template-columns: 1fr;\\r\\n  margin: 0 11%;\\r\\n  padding: 0.5rem;\\r\\n  gap: 1.4rem;\\r\\n}\\r\\n\\r\\n.card-container {\\r\\n  display: -webkit-box;\\r\\n  display: -ms-flexbox;\\r\\n  display: flex;\\r\\n  -webkit-box-orient: vertical;\\r\\n  -webkit-box-direction: normal;\\r\\n      -ms-flex-direction: column;\\r\\n          flex-direction: column;\\r\\n  margin-bottom: 0.5rem;\\r\\n  -webkit-box-align: start;\\r\\n      -ms-flex-align: start;\\r\\n          align-items: flex-start;\\r\\n  padding: 0.6rem;\\r\\n}\\r\\n\\r\\n.dynamic-grid-popup {\\r\\n  display: -webkit-box;\\r\\n  display: -ms-flexbox;\\r\\n  display: flex;\\r\\n  -webkit-box-orient: vertical;\\r\\n  -webkit-box-direction: normal;\\r\\n      -ms-flex-direction: column;\\r\\n          flex-direction: column;\\r\\n  -webkit-box-pack: center;\\r\\n      -ms-flex-pack: center;\\r\\n          justify-content: center;\\r\\n  -webkit-box-align: center;\\r\\n      -ms-flex-align: center;\\r\\n          align-items: center;\\r\\n  padding: 0.6rem;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n.card-pic {\\r\\n  display: -webkit-box;\\r\\n  display: -ms-flexbox;\\r\\n  display: flex;\\r\\n  -webkit-box-flex: initial;\\r\\n      -ms-flex-positive: initial;\\r\\n          flex-grow: initial;\\r\\n  text-align: center;\\r\\n  -webkit-box-pack: center;\\r\\n      -ms-flex-pack: center;\\r\\n          justify-content: center;\\r\\n  -ms-flex-line-pack: center;\\r\\n      align-content: center;\\r\\n  height: 25vh;\\r\\n}\\r\\n\\r\\n.card-pic img {\\r\\n  overflow: hidden;\\r\\n  -o-object-fit: cover;\\r\\n     object-fit: cover;\\r\\n  width: 100%;\\r\\n  height: auto;\\r\\n  padding: 0.1rem;\\r\\n}\\r\\n\\r\\n.popup-container {\\r\\n  display: -webkit-box;\\r\\n  display: -ms-flexbox;\\r\\n  display: flex;\\r\\n  -webkit-box-orient: vertical;\\r\\n  -webkit-box-direction: normal;\\r\\n      -ms-flex-direction: column;\\r\\n          flex-direction: column;\\r\\n  -webkit-box-pack: justify;\\r\\n      -ms-flex-pack: justify;\\r\\n          justify-content: space-between;\\r\\n  -webkit-box-align: center;\\r\\n      -ms-flex-align: center;\\r\\n          align-items: center;\\r\\n  width: 95%;\\r\\n  max-width: 100vh;\\r\\n  border: solid 0.2rem black;\\r\\n  margin-bottom: 0.5rem;\\r\\n  padding: 0.6rem;\\r\\n}\\r\\n\\r\\n.empty {\\r\\n  padding: 0.5rem;\\r\\n  margin: 0.5rem;\\r\\n}\\r\\n\\r\\n.popup-x {\\r\\n  font-size: 1.8rem;\\r\\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\\r\\n  font-weight: bolder;\\r\\n  margin-right: 0.2rem;\\r\\n  padding: 0 0.2rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.card-meta {\\r\\n  display: -webkit-box;\\r\\n  display: -ms-flexbox;\\r\\n  display: flex;\\r\\n  -webkit-box-orient: vertical;\\r\\n  -webkit-box-direction: normal;\\r\\n      -ms-flex-direction: column;\\r\\n          flex-direction: column;\\r\\n  -ms-flex-item-align: center;\\r\\n      align-self: center;\\r\\n  width: 100%;\\r\\n  -webkit-box-pack: justify;\\r\\n      -ms-flex-pack: justify;\\r\\n          justify-content: space-between;\\r\\n  margin-bottom: 0.8rem;\\r\\n}\\r\\n\\r\\n.card-meta p {\\r\\n  padding-top: 0;\\r\\n  margin-top: 0;\\r\\n  text-align: end;\\r\\n}\\r\\n\\r\\n.card-info {\\r\\n  display: -webkit-box;\\r\\n  display: -ms-flexbox;\\r\\n  display: flex;\\r\\n  -webkit-box-pack: justify;\\r\\n      -ms-flex-pack: justify;\\r\\n          justify-content: space-between;\\r\\n  padding: 0.2rem 0;\\r\\n  margin: 0.2rem 0;\\r\\n  gap: 0.3rem;\\r\\n}\\r\\n\\r\\n.card-info .card-socials {\\r\\n  text-align: right;\\r\\n  min-width: 2.8rem;\\r\\n  padding: 0;\\r\\n  gap: 0;\\r\\n}\\r\\n\\r\\n.card-info .card-socials .like-btn {\\r\\n  height: 1.6rem;\\r\\n  cursor: pointer;\\r\\n  margin-bottom: 0;\\r\\n  padding-bottom: 0;\\r\\n}\\r\\n\\r\\n.card-info .card-socials .like-counter {\\r\\n  font-size: 0.8rem;\\r\\n  text-align: right;\\r\\n  margin-top: 0;\\r\\n  padding-top: 0;\\r\\n}\\r\\n\\r\\n.meal-info {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.popup-header {\\r\\n  display: -webkit-box;\\r\\n  display: -ms-flexbox;\\r\\n  display: flex;\\r\\n  -webkit-box-orient: horizontal;\\r\\n  -webkit-box-direction: normal;\\r\\n      -ms-flex-direction: row;\\r\\n          flex-direction: row;\\r\\n  -webkit-box-pack: center;\\r\\n      -ms-flex-pack: center;\\r\\n          justify-content: center;\\r\\n  gap: 0.2rem;\\r\\n}\\r\\n\\r\\n.popup-card-pic {\\r\\n  width: 63vw;\\r\\n  max-width: 80vh;\\r\\n  -ms-grid-column-align: center;\\r\\n      justify-self: center;\\r\\n  margin-bottom: 0;\\r\\n  padding-top: 0.2rem;\\r\\n}\\r\\n\\r\\n.popup-card-pic img {\\r\\n  overflow: hidden;\\r\\n  -o-object-fit: cover;\\r\\n     object-fit: cover;\\r\\n  width: 100%;\\r\\n  max-height: 30vh;\\r\\n}\\r\\n\\r\\n.popup-meta {\\r\\n  display: -webkit-box;\\r\\n  display: -ms-flexbox;\\r\\n  display: flex;\\r\\n  -webkit-box-orient: vertical;\\r\\n  -webkit-box-direction: normal;\\r\\n      -ms-flex-direction: column;\\r\\n          flex-direction: column;\\r\\n  -ms-flex-item-align: center;\\r\\n      align-self: center;\\r\\n  width: 100%;\\r\\n  -webkit-box-pack: center;\\r\\n      -ms-flex-pack: center;\\r\\n          justify-content: center;\\r\\n}\\r\\n\\r\\n.popup-meta .popup-info {\\r\\n  padding: 0.5rem;\\r\\n  margin-bottom: 0.8rem;\\r\\n  -webkit-box-flex: 2;\\r\\n      -ms-flex-positive: 2;\\r\\n          flex-grow: 2;\\r\\n  display: -webkit-box;\\r\\n  display: -ms-flexbox;\\r\\n  display: flex;\\r\\n  -webkit-box-orient: vertical;\\r\\n  -webkit-box-direction: normal;\\r\\n      -ms-flex-direction: column;\\r\\n          flex-direction: column;\\r\\n  -webkit-box-pack: center;\\r\\n      -ms-flex-pack: center;\\r\\n          justify-content: center;\\r\\n  width: 60vw;\\r\\n  max-width: 80vh;\\r\\n  -ms-flex-item-align: center;\\r\\n      align-self: center;\\r\\n  justify-self: center;\\r\\n}\\r\\n\\r\\n.popup-meta .popup-info .popup-title {\\r\\n  font-style: normal;\\r\\n}\\r\\n\\r\\n.popup-meta .popup-info .popup-meal-details {\\r\\n  margin: 0;\\r\\n  font-size: 0.7rem;\\r\\n}\\r\\n\\r\\n.comment-board {\\r\\n  padding: 0.5rem;\\r\\n  margin-bottom: 0.8rem;\\r\\n  -webkit-box-flex: 2;\\r\\n      -ms-flex-positive: 2;\\r\\n          flex-grow: 2;\\r\\n  width: 60vw;\\r\\n  max-width: 80vh;\\r\\n}\\r\\n\\r\\n.comment-board span {\\r\\n  font-size: 0.7rem;\\r\\n}\\r\\n\\r\\n.comment-board ul li {\\r\\n  font-size: 0.7rem;\\r\\n}\\r\\n\\r\\n.comment-board ul li .commentator {\\r\\n  font-weight: bolder;\\r\\n}\\r\\n\\r\\n#grid .gridPoint {\\r\\n  display: -webkit-box;\\r\\n  display: -ms-flexbox;\\r\\n  display: flex;\\r\\n  -webkit-box-orient: vertical;\\r\\n  -webkit-box-direction: normal;\\r\\n      -ms-flex-direction: column;\\r\\n          flex-direction: column;\\r\\n  gap: 0.2rem;\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n#grid .imgClass {\\r\\n  display: -webkit-box;\\r\\n  display: -ms-flexbox;\\r\\n  display: flex;\\r\\n  -webkit-box-orient: vertical;\\r\\n  -webkit-box-direction: normal;\\r\\n      -ms-flex-direction: column;\\r\\n          flex-direction: column;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n#grid .count {\\r\\n  display: -webkit-box;\\r\\n  display: -ms-flexbox;\\r\\n  display: flex;\\r\\n  -webkit-box-orient: vertical;\\r\\n  -webkit-box-direction: normal;\\r\\n      -ms-flex-direction: column;\\r\\n          flex-direction: column;\\r\\n  text-align: end;\\r\\n}\\r\\n\\r\\n#grid .like {\\r\\n  width: 6%;\\r\\n  height: 1.5rem;\\r\\n  margin-top: -4rem;\\r\\n  margin-left: 23rem;\\r\\n  background: #7c7878;\\r\\n}\\r\\n\\r\\n.comment-counter {\\r\\n  padding: 0.2rem;\\r\\n}\\r\\n\\r\\n.comment-form {\\r\\n  display: -webkit-box;\\r\\n  display: -ms-flexbox;\\r\\n  display: flex;\\r\\n  -webkit-box-orient: vertical;\\r\\n  -webkit-box-direction: normal;\\r\\n      -ms-flex-direction: column;\\r\\n          flex-direction: column;\\r\\n  padding: 0.5rem;\\r\\n  width: 60vw;\\r\\n  max-width: 80vh;\\r\\n  margin-bottom: 0.8rem;\\r\\n}\\r\\n\\r\\ninput,\\r\\ntextarea {\\r\\n  font-size: 0.8rem;\\r\\n  border: solid 2px black;\\r\\n  background-color: #fff;\\r\\n  margin: 0.2rem 0;\\r\\n}\\r\\n\\r\\n.new-name {\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n.new-comment {\\r\\n  height: 2rem;\\r\\n  resize: none;\\r\\n}\\r\\n\\r\\n.btn,\\r\\n.comment-btn,\\r\\n.commentsBtn,\\r\\n.reserve-btn {\\r\\n  font-size: 0.8rem;\\r\\n  font-weight: bold;\\r\\n  text-align: center;\\r\\n  -ms-flex-item-align: center;\\r\\n      -ms-grid-row-align: center;\\r\\n      align-self: center;\\r\\n  width: -webkit-fit-content;\\r\\n  width: -moz-fit-content;\\r\\n  width: fit-content;\\r\\n  border: solid 0.2rem black;\\r\\n  background-color: #fff;\\r\\n  -webkit-box-shadow: 2px 3px 1px rgba(0, 0, 0, 0.9);\\r\\n          box-shadow: 2px 3px 1px rgba(0, 0, 0, 0.9);\\r\\n  margin: 0.3rem;\\r\\n  padding: 0.2rem 0.4rem;\\r\\n  cursor: pointer;\\r\\n  user-select: none;\\r\\n  /* supported by Chrome and Opera */\\r\\n  -webkit-user-select: none;\\r\\n  /* Safari */\\r\\n  -khtml-user-select: none;\\r\\n  /* Konqueror HTML */\\r\\n  -moz-user-select: none;\\r\\n  /* Firefox */\\r\\n  -ms-user-select: none;\\r\\n  /* Internet Explorer/Edge */\\r\\n}\\r\\n\\r\\n.btn:hover,\\r\\n.comment-btn:hover,\\r\\n.reserve-btn:hover,\\r\\n.commentsBtn:hover {\\r\\n  color: #fff;\\r\\n  background-color: #000;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  margin-bottom: 0.4rem;\\r\\n  margin-left: 0;\\r\\n  margin-right: 0;\\r\\n  text-align: center;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nfooter .copyrights {\\r\\n  padding: 0.4rem;\\r\\n  margin: 0 1rem;\\r\\n  text-align: left;\\r\\n}\\r\\n\\r\\nfooter hr {\\r\\n  margin: 0;\\r\\n  margin-bottom: 0.5rem;\\r\\n  margin-top: 0.5rem;\\r\\n  border: solid 1px #000;\\r\\n}\\r\\n\\r\\n/* #### MEDIUM PHONE DESIGN #### */\\r\\n@media screen and (min-width: 390px) {\\r\\n  .card-grid,\\r\\n  .dynamic-grid {\\r\\n    display: -ms-grid;\\r\\n    display: grid;\\r\\n    -ms-grid-columns: 1fr 1fr;\\r\\n        grid-template-columns: 1fr 1fr;\\r\\n    margin: 0 1.2rem;\\r\\n    padding: 0.5rem;\\r\\n    gap: 1rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n/* #### TABLET DESIGN #### */\\r\\n@media screen and (min-width: 590px) {\\r\\n  .header {\\r\\n    margin: 0 1.7rem;\\r\\n  }\\r\\n  .card-grid,\\r\\n  .dynamic-grid {\\r\\n    display: -ms-grid;\\r\\n    display: grid;\\r\\n    -ms-grid-columns: 1fr 1fr 1fr;\\r\\n        grid-template-columns: 1fr 1fr 1fr;\\r\\n    margin: 0 1.7rem;\\r\\n    padding: 0.5rem;\\r\\n    gap: 1.6rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n/* #### DESKTOP DESIGN #### */\\r\\n@media screen and (min-width: 768px) {\\r\\n  .header {\\r\\n    margin: 0 2.2rem;\\r\\n  }\\r\\n  .card-grid,\\r\\n  .dynamic-grid {\\r\\n    display: -ms-grid;\\r\\n    display: grid;\\r\\n    -ms-grid-columns: 1fr 1fr 1fr 1fr;\\r\\n        grid-template-columns: 1fr 1fr 1fr 1fr;\\r\\n    margin: 0 2.2rem;\\r\\n    padding: 0.5rem;\\r\\n    gap: 1rem;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstone/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dyn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/dyn */ \"./modules/dyn.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _modules_loadMeals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/loadMeals */ \"./modules/loadMeals.js\");\n/* eslint-disable import/no-unresolved */\n// index.js\n\n\n\n\n\nconst myDynGrid = new _modules_dyn__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nwindow.addEventListener('load', async () => {\n  myDynGrid.showPage(await (0,_modules_loadMeals__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n});\n\n\n//# sourceURL=webpack://capstone/./src/index.js?");

/***/ }),

/***/ "./src/icons/like.png":
/*!****************************!*\
  !*** ./src/icons/like.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"05f7231e3025e5fa9429.png\";\n\n//# sourceURL=webpack://capstone/./src/icons/like.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;