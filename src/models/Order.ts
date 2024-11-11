import mongoose, { Schema, Document } from 'mongoose';

export interface IOrder extends Document {
  email: string;
  fullName: string;
  fullAddress: string;
  imageUrls: string[];
  frameColor: string;
  user: string;
  createdAt: Date;
}

const OrderSchema: Schema = new Schema(
  {
    email: { type: String, required: true },
    fullName: { type: String, required: true },
    fullAddress: { type: String, required: true },
    imageUrls: { type: [String], required: true },
    frameColor: { type: String, required: true },
    user: { type: String, required: true },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

export default mongoose.model<IOrder>('Order', OrderSchema);
