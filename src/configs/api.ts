const endpoint = 'https://game-demo-be.vercel.app/api';

export default {
  register: endpoint + '/auth/register',
  ranking: endpoint + '/user/ranking',
  download: endpoint + '/user/download',
  saveGame: endpoint + '/user/saveHistory/',
};
