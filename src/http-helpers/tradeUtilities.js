import axios from 'axios';

export const getHoldings = async () => {
  try {
    const response = await axios.get(
      `/api/holdings/${JSON.parse(localStorage.getItem('data')).id}`
    );
    return response.data;
  } catch (err) {
    console.error('Error in get holdings', err.message);
  }
};

export const buyStock = async (holding, shares) => {
  try {
    const response = await axios.post(`/api/holdings/buy/`, {
      user_id: JSON.parse(localStorage.getItem('data')).id,
      holding,
      shares,
    });
  } catch (err) {
    console.log(err);
  }
};

export const sellStock = async (holding, shares) => {
  try {
    const response = await axios.post(`/api/holdings/sell/`, {
      user_id: JSON.parse(localStorage.getItem('data')).id,
      holding,
      shares,
    });
  } catch (err) {
    console.log(err);
  }
};

export const searchForHolding = async symbol => {
  // debugger;
  try {
    console.log(symbol)
    const response = await axios.get(`/api/stocks/search/?symbol=${symbol}`);
    console.log(response.data)
    return response.data;
  } catch (err) {
    console.error('error in search for holding', err.message);
  }
};

export const searchForStockData = async symbol => {
  // debugger;
  try {
    console.log(symbol)
    const response = await axios.get(`/api/stocks/daily-info/?symbol=${symbol}`);
    console.log(response.data)
    return response.data;
  } catch (err) {
    console.error('error in search for holding', err.message);
  }
};

export const searchForWeeklyData = async symbol => {
  // debugger;
  try {
    console.log(symbol)
    const response = await axios.get(`/api/stocks/weekly-info/?symbol=${symbol}`);
    console.log(response.data)
    return response.data;
  } catch (err) {
    console.error('error in search for holding', err.message);
  }
};

export const searchForEarningsData = async symbol => {
  // debugger;
  try {
    console.log(symbol)
    const response = await axios.get(`/api/stocks/earnings/?symbol=${symbol}`);
    console.log(response.data)
    return response.data;
  } catch (err) {
    console.error('error in search for holding', err.message);
  }
};