const axios = require('axios');

const universe = () => {
  let api = 'https://api.iextrading.com/1.0/ref-data/symbols';
  return axios.get(api)
    .then(response => response.data.filter(obj => obj.type === 'cs'))
    .catch(error => console.log(error));
};

exports.universe = universe;
//      //localStorage.setItem('universe', JSON.stringify(data));
