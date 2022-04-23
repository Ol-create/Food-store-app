const apiAddress = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const headersList = {};
fetch(apiAddress, {
  method: 'POST',
  headers: headersList,
}).then((response) => response.text()).then((data) => data);
