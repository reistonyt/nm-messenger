const express = require('express');
const router = express.Router();
const axios = require('axios');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const IEX_PKEY  = 'pk_6ea87eb2cdc540dd8d7b96e1950d7f49'

router.get('/search', (req, res) => {
  const symbol = req.query.symbol;
  axios
    .get(
      `https://cloud.iexapis.com/stable/stock/market/batch?symbols=${symbol}&types=quote&token=${IEX_PKEY}`
    )
    .then(response => {
      res.json(response.data[Object.keys(response.data)[0]].quote);
      
    })
    .catch(err => {
      if (symbol !== '') {
        res.send('error');
      } else {
        res.status(500).json({
          errorMessage: 'Something went wrong on the server. Please try again.',
        });
      }
    });
});

router.get('/recommendation', (req, res) => {
  const holdings = [];
  axios
    .get(
      `https://cloud.iexapis.com/stable/stock/market/batch?symbols=msft,nflx,googl&types=quote&token=${IEX_PKEY}`
    )
    .then(function (response) {
      Object.keys(response.data).forEach(function (key) {
        holdings.push(response.data[key].quote);
      });
      res.json(holdings);
    })
    .catch(function (err) {
      console.log('error from server- API routes', err);
      res.status(500).json({
        errorMessage: 'Something went wrong on the server. Please try again.',
      });
    });
});

router.get('/mostactive', (req, res) => {
  axios
    .get(
      `https://cloud.iexapis.com/stable/stock/market/collection/list?collectionName=mostactive&token=${IEX_PKEY}`
    )
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (err) {
      console.log('error from server- API routes', err);
      res.status(500).json({
        errorMessage: 'Something went wrong on the server. Please try again.',
      });
    });
});

router.get('/chart', (req, res) => {
  const symbol = req.query.symbol;
  axios
    .get(
      `https://cloud.iexapis.com/stable/stock/${symbol}/chart/10d?token=${IEX_PKEY}`
    )
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log('error from server- API routes', error);
      res.status(500).json({
        errorMessage: 'Something went wrong on the server. Please try again.',
      });
    });
});

router.get('/daily-info', (req, res) => {
  const symbol = req.query.symbol;
  axios
    .get(
      `https://nm-hackathon-api.atreis.dev/daily-info?ticker=${symbol}`
    )
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log('error from server- API routes', error);
      res.status(500).json({
        errorMessage: 'Something went wrong on the server. Please try again.',
      });
    });
});

router.get('/weekly-info', (req, res) => {
  const symbol = req.query.symbol;
  axios
    .get(
      `https://nm-hackathon-api.atreis.dev/weekly-info?ticker=${symbol}`
    )
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log('error from server- API routes', error);
      res.status(500).json({
        errorMessage: 'Something went wrong on the server. Please try again.',
      });
    });
});

router.get('/earnings', (req, res) => {
  const symbol = req.query.symbol;
  axios
    .get(
      `https://nm-hackathon-api.atreis.dev/earnings?ticker=${symbol}`
    )
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log('error from server- API routes', error);
      res.status(500).json({
        errorMessage: 'Something went wrong on the server. Please try again.',
      });
    });
});

module.exports = router;
