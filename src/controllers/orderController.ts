import { Request, Response } from 'express';
import Order, { IOrder } from '../models/Order';

export const createOrder = async (req: Request, res: Response): Promise<any>  => {
  try {
    const { email, fullName, fullAddress, imageUrls, frameColor, user } = req.body;

    // Validate required fields
    if (!email || !fullName || !fullAddress || !imageUrls || !frameColor || !user) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Create a new order
    const orderData: Partial<IOrder> = {
      email,
      fullName,
      fullAddress,
      imageUrls,
      frameColor,
      user,
    };

    const newOrder = new Order(orderData);
    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'An error occurred while creating the order.' });
  }
};

export const getUserOrders = async (req: Request, res: Response): Promise<any>  => {
  try {
    const { user } = req.params;

    if (!user) {
      return res.status(400).json({ error: 'User parameter is required.' });
    }

    const orders = await Order.find({ user });

    res.json(orders);
  } catch (error) {
    console.error('Error fetching user orders:', error);
    res.status(500).json({ error: 'An error occurred while fetching user orders.' });
  }
};
