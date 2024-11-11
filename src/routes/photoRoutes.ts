import { Router } from 'express';
import { getPhotos } from '../controllers/photoController';

const router = Router();

router.get('/', getPhotos);

export default router;
