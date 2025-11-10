import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
  amount: { type: Number, required: true },
  items: [{ product: String, qty: Number }]
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
