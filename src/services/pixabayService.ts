// src/services/pixabayService.ts
import axios from 'axios';
import NodeCache from 'node-cache';
import dotenv from 'dotenv';

dotenv.config();

const cacheTTL = Number(process.env.CACHE_TTL) || 3600; // Default to 1 hour
const cache = new NodeCache({ stdTTL: cacheTTL });

const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY;
const PIXABAY_API_URL = 'https://pixabay.com/api/';

interface PixabayResponse {
  hits: Array<{
    webformatURL: string;
  }>;
}

export const fetchPhotos = async (count: number): Promise<string[]> => {
  const cacheKey = `photos_${count}`;
  const cachedPhotos = cache.get<string[]>(cacheKey);

  if (cachedPhotos) {
    console.log('Returning photos from cache.');
    return cachedPhotos;
  }

  try {
    const params = {
      key: PIXABAY_API_KEY,
      per_page: count,
    };

    const response = await axios.get<PixabayResponse>(PIXABAY_API_URL, { params });
    const photos = response.data.hits.map((hit) => hit.webformatURL);

    // Cache the result
    cache.set(cacheKey, photos);

    return photos;
  } catch (error) {
    console.error('Error fetching data from Pixabay API:', error);
    throw new Error('Failed to fetch photos from Pixabay API.');
  }
};
