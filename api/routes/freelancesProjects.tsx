// pages/api/freelanceProjects.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { FreelanceProject } from '../freelanceProjects/index';

const url = "mongodb://localhost:27017/worldwebsolutions";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection<FreelanceProject>('freelanceProjects');

    if (req.method === 'GET') {
      const projects = await collection.find().toArray();
      res.status(200).json({ projects });
    } else if (req.method === 'POST') {
      const project = req.body as FreelanceProject;
      const result = await collection.insertOne(project);
      res.status(201).json({ project: { ...project, _id: result.insertedId } });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  } finally {
    await client.close();
  }
}
