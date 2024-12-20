import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/dbConnect';
import Farm from '../../../models/Farm';
import { verifyToken } from '../../../lib/auth'; // We'll create this later

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        const { userId } = await verifyToken(req);
        const farms = await Farm.find({ userId });
        res.status(200).json(farms);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching farms' });
      }
      break;

    case 'POST':
      try {
        const { userId } = await verifyToken(req);
        const farm = await Farm.create({
          ...req.body,
          userId
        });
        res.status(201).json(farm);
      } catch (error) {
        res.status(500).json({ message: 'Error creating farm' });
      }
      break;

    default:
      res.status(405).json({ message: 'Method not allowed' });
  }
}