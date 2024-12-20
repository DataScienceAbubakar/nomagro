import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../../lib/dbConnect';
import WeatherAlert from '../../../../models/WeatherAlert';
import { verifyToken } from '../../../../lib/auth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'PATCH') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await dbConnect();
    const { userId } = await verifyToken(req);
    const { id } = req.query;

    const alert = await WeatherAlert.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    );

    if (!alert) {
      return res.status(404).json({ message: 'Alert not found' });
    }

    res.status(200).json(alert);
  } catch (error) {
    res.status(500).json({ message: 'Error updating alert' });
  }
}