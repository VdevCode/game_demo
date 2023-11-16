const endpoint = 'https://game-demo-be.vercel.app/api';
// const endpoint = 'http://localhost:8080/api';
export default {
  register: endpoint + '/auth/register',
  ranking: endpoint + '/user/ranking',
  download: endpoint + '/user/download',
  saveGame: endpoint + '/user/saveHistory/',
  myRanking: endpoint + '/user/myRanking/',
};
