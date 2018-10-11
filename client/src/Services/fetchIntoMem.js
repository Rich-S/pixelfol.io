import fetchByCapSize from './fetchByCapSize';

function fetchIntoMem() {
  let caps = ['nano', 'micro', 'small', 'mid', 'large', 'mega'];
  caps.forEach( cap => {
    fetchByCapSize(cap, (err, res) => {
      err ? console.log(err) : localStorage.setItem(cap, JSON.stringify(res.Items));
    })
  })
}

export default fetchIntoMem;
