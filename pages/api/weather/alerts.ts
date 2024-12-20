import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/dbConnect';
import Farm from '../../../models/Farm';
import WeatherAlert from '../../../models/WeatherAlert';
import { verifyToken } from '../../../lib/auth';
import { getWeatherByCoordinates } from '../../../lib/weather';
import { checkWeatherAlerts } from '../../../lib/alertService';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        const { userId } = await verifyToken(req);
        const { farmId } = req.query;

        // Get active alerts
        const alerts = await WeatherAlert.find({
          farmId,
          isActive: true,
          expiresAt: { $gt: new Date() }
        }).sort({ createdAt: -1 });

        res.status(200).json(alerts);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching alerts' });
      }
      break;

    case 'POST':
      try {
        const { userId } = await verifyToken(req);
        const { farmId } = req.body;

        // Get farm
        const farm = await Farm.findOne({ _id: farmId, userId });
        if (!farm) {
          return res.status(404).json({ message: 'Farm not found' });
        }

        // Get current weather
        const weather = await getWeatherByCoordinates(
          farm.location.coordinates.latitude,
          farm.location.coordinates.longitude
        );

        // Check for alerts
        const newAlerts = checkWeatherAlerts(weather);

        // Save alerts to database
        const savedAlerts = await Promise.all(
          newAlerts.map(alert => 
            WeatherAlert.create({
              farmId,
              ...alert
            })
          )
        );

        res.status(200).json(savedAlerts);
      } catch (error) {
        res.status(500).json({ message: 'Error generating alerts' });
      }
      break;

    default:
      res.status(405).json({ message: 'Method not allowed' });
  }
}