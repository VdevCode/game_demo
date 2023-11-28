const endpoint = 'http://167.71.196.197/api';

export default {
  sendOTP: endpoint + '/user/sendOTP',
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
