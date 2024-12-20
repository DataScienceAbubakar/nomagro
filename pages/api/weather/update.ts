import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/dbConnect';
import Farm from '../../../models/Farm';
import WeatherData from '../../../models/WeatherData';
import { getWeatherByCoordinates } from '../../../lib/weather';
import { verifyToken } from '../../../lib/auth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await dbConnect();
    const { userId } = await verifyToken(req);
    const { farmId } = req.body;

    // Get farm coordinates
    const farm = await Farm.findOne({ _id: farmId, userId });
    if (!farm) {
      return res.status(404).json({ message: 'Farm not found' });
    }

    // Get weather data
    const weather = await getWeatherByCoordinates(
      farm.location.coordinates.latitude,
      farm.location.coordinates.longitude
    );

    // Save weather data
    const weatherData = await WeatherData.create({
      farmId,
      ...weather,
      timestamp: new Date()
    });

    res.status(200).json(weatherData);
  } catch (error) {
    console.error('Weather update error:', error);
    res.status(500).json({ message: 'Error updating weather data' });
  }
}