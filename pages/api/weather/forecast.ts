import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/dbConnect';
import Farm from '../../../models/Farm';
import { getForecast } from '../../../lib/weather';
import { verifyToken } from '../../../lib/auth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await dbConnect();
    const { userId } = await verifyToken(req);
    const { farmId } = req.query;

    // Get farm coordinates
    const farm = await Farm.findOne({ _id: farmId, userId });
    if (!farm) {
      return res.status(404).json({ message: 'Farm not found' });
    }

    // Get forecast data
    const forecast = await getForecast(
      farm.location.coordinates.latitude,
      farm.location.coordinates.longitude
    );

    res.status(200).json(forecast);
  } catch (error) {
    console.error('Forecast error:', error);
    res.status(500).json({ message: 'Error fetching forecast data' });
  }
}