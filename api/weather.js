const axios = require('axios');

export default async function handler(req, res) {
  const location = req.query.location || '101181005';
  const key = '你的和风天气API密钥';

  try {
    const response = await axios.get('https://freeapi.qweather.com/v7/weather/7d', {
      params: { location, key }
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: '请求失败', details: error.message });
  }
}