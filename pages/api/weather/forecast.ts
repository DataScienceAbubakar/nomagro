import type { NextApiRequest, NextApiResponse } from 'next';
import { getForecast } from '../../../lib/weather';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
      return res.status(400).json({ message: 'Latitude and longitude are required' });
    }

    const latitude = parseFloat(lat as string);
    const longitude = parseFloat(lon as string);

    if (isNaN(latitude) || isNaN(longitude)) {
      return res.status(400).json({ message: 'Invalid coordinates' });
    }

    const forecast = await getForecast(latitude, longitude);
    res.status(200).json(forecast);
  } catch (error) {
    console.error('Forecast error:', error);
    res.status(500).json({ message: 'Error fetching forecast data' });
  }
}