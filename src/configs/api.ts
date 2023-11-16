const endpoint = 'https://game-demo-be.vercel.app/api';
// const endpoint = 'http://localhost:8080/api';
export default {
  register: endpoint + '/user/register',
  ranking: endpoint + '/user/ranking',
  download: endpoint + '/user/download',
  saveGame: endpoint + '/user/saveHistory/',
  myRanking: endpoint + '/user/myRanking/',
  major: endpoint + '/user/major/',
  gift: endpoint + '/gift',
  addOwnerGift: endpoint + '/gift/addOwner',
  getGiftUpdate: endpoint + '/gift/getGiftUpdate',
  updateGift: endpoint + '/gift/update',
};
