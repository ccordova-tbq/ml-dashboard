export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization,Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const path = req.url.replace('/api/ml', '');
  const url = 'https://api.mercadolibre.com' + path;

  const response = await fetch(url, {
    headers: { Authorization: req.headers.authorization || '' }
  });
  const data = await response.json();
  res.status(response.status).json(data);
}
