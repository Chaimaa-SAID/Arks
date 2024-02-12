const http = require('http');
const url = require('url');
const fs = require('fs').promises;
const {
  cities,
  selectRandomCity,
  fetchDataTemperatureByCity,
} = require('../day13/inde');
 
const server = http.createServer(async (req, res) => {
  const parseUrl = url.parse(req.url, true);
  const path = parseUrl.pathname;
  const query = parseUrl.query;

  if (path === '/weather') {
   

    const cityName = selectRandomCity(cities);

    if (!cityName) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('City parameter is missing');
      return;
    }

    try {
      const temperature = await fetchDataTemperatureByCity(cityName);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ city: cityName, temperature }));
    } catch (error) {
      if (error.statusCode) {
        res.writeHead(error.statusCode, { 'Content-Type': 'text/plain' });
        res.end(error.message);
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      }
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Endpoint non trouvé');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log('Server created');
});
