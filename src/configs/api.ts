const endpoint = 'http://localhost:8080/api';

export default {
  signin: endpoint + '/auth/google',
  addData: endpoint + '/user/info',
  saveGame: endpoint + '/user/saveHistory/',
};
