// api/getData.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = new MongoClient(process.env.MONGODB_URI || '', );


  try {
    await client.connect();
    const db = client.db();
    
    // Perform CRUD operations here

    res.status(200).json({ success: true });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  } finally {
    await client.close();
  }
}
