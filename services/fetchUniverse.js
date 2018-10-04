const axios = require('axios');

const fetchUniverse = () => {
  let api = 'https://api.iextrading.com/1.0/ref-data/symbols';
  return axios.get(api)
    .then(response => response.data.filter(obj => obj.type === 'cs'))
    .catch(error => console.log(error));
};

exports.fetchUniverse = fetchUniverse;
//      //localStorage.setItem('universe', JSON.stringify(data));
