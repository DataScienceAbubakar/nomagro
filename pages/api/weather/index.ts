import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/dbConnect';
import WeatherData from '../../../models/WeatherData';
import { verifyToken } from '../../../lib/auth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        const { farmId } = req.query;
        const weatherData = await WeatherData.find({ farmId })
          .sort({ timestamp: -1 })
          .limit(10);
        res.status(200).json(weatherData);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching weather data' });
      }
      break;

    case 'POST':
      try {
        await verifyToken(req);
        const weatherData = await WeatherData.create(req.body);
        res.status(201).json(weatherData);
      } catch (error) {
        res.status(500).json({ message: 'Error creating weather data' });
      }
      break;

    default:
      res.status(405).json({ message: 'Method not allowed' });
  }
}