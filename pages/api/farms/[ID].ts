import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/dbConnect';
import Farm from '../../../models/Farm';
import { verifyToken } from '../../../lib/auth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        const farm = await Farm.findById(id);
        if (!farm) {
          return res.status(404).json({ message: 'Farm not found' });
        }
        res.status(200).json(farm);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching farm' });
      }
      break;

    case 'PUT':
      try {
        const { userId } = await verifyToken(req);
        const farm = await Farm.findOneAndUpdate(
          { _id: id, userId },
          req.body,
          { new: true }
        );
        if (!farm) {
          return res.status(404).json({ message: 'Farm not found' });
        }
        res.status(200).json(farm);
      } catch (error) {
        res.status(500).json({ message: 'Error updating farm' });
      }
      break;

    case 'DELETE':
      try {
        const { userId } = await verifyToken(req);
        const farm = await Farm.findOneAndDelete({ _id: id, userId });
        if (!farm) {
          return res.status(404).json({ message: 'Farm not found' });
        }
        res.status(200).json({ message: 'Farm deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: 'Error deleting farm' });
      }
      break;

    default:
      res.status(405).json({ message: 'Method not allowed' });
  }
}