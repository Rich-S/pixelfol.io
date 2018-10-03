const axios = require('axios');

const fetchUniverse = () => {
  let api = 'https://api.iextrading.com/1.0/ref-data/symbols';
  axios.get(api)
    .then(response => {
      let data = response.data.filter(obj => obj.type === 'cs');
      localStorage.setItem('universe', JSON.stringify(data));
    })
    .catch(error => {
      console.log(error);
    });
}

export default fetchUniverse;
