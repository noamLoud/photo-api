// src/controllers/photoController.ts
import { Request, Response } from 'express';
import { fetchPhotos } from '../services/pixabayService';

export const getPhotos = async (req: Request, res: Response): Promise<any> => {
  try {
    const countParam = req.query.count as string;

    // Validate 'count' parameter
    if (!countParam) {
      return res.status(400).json({ error: "'count' query parameter is required." });
    }

    const count = parseInt(countParam, 10);

    if (isNaN(count) || count <= 0) {
      return res.status(400).json({ error: "'count' must be a positive integer." });
    }

    const photos = await fetchPhotos(count);
    res.json(photos);
  } catch (error) {
    console.error('Error fetching photos:', error);
    res.status(500).json({ error: 'An error occurred while fetching photos.' });
  }
};
