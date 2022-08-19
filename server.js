'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Trabalho SO');  
});

const fs = require('fs');

const content = "Me da 3"+" ,por favor";

fs.writeFile('./Volume/soma.txt', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});

app.listen(PORT, HOST);
console.log(`Atualizou --- Running on http://${HOST}:${PORT}`);