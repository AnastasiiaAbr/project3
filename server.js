const express = require('express');
const app = express();

function isNatural(n) {
  return Number.isInteger(n) && n > 0;
}

function getGSD(x, y) {
  while (y !== 0) {
    let temp = y;
    y = x % y;
    x = temp;
  }
  return x;
};

function getLCM(x,y) {
    if (!isNatural(x) || !isNatural(y)) {
    return "NaN";
  } 
  
  return String((x * y)/getGSD(x, y));
};

app.get('/zalogova_an_yandex_ru', (req, res) => {
  const x = Number(req.query.x);
  const y = Number(req.query.y);

  res.type('text/plain');
  res.send(getLCM(x,y));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT);