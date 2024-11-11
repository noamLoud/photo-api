import { Router } from 'express';
import { createOrder, getUserOrders } from '../controllers/orderController';

const router = Router();

// Route to create a new order
router.post('/', createOrder);

// Route to get all orders for a specific user
router.get('/:user', getUserOrders);

export default router;
