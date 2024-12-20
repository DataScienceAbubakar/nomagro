import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}

const MONGODB_URI: string = process.env.MONGODB_URI

async function dbConnect() {
  try {
    const { connection } = await mongoose.connect(MONGODB_URI);

    if (connection.readyState === 1) {
      console.log('MongoDB connected');
      return;
    }
  } catch (error) {
    throw new Error('Error connecting to MongoDB');
  }
}

export default dbConnect;