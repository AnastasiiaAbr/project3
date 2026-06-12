const express = require('express');
const app = express();

function isNatural(n) {
  return n > 0n;
}

function getGCD(x, y) {
  while (y !== 0n) {
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
  
  return String((x * y)/getGCD(x, y));
};

app.get('/zalogova_an_yandex_ru', (req, res) => {
  try {
    const x = BigInt(req.query.x);
    const y = BigInt(req.query.y);

    res.type('text/plain');
    res.send(getLCM(x, y));
  } catch {
    res.type('text/plain');
    res.send('NaN');
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT);