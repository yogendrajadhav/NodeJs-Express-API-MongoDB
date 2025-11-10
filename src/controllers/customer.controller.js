import Customer from "../models/customer.model.js";
import Order from "../models/order.model.js";

export const getCustomers = async (req, res, next) => {
  try {
    const data = await Customer.aggregate([
      {
        $lookup: {
          from: "orders",
          localField: "_id",
          foreignField: "customerId",
          as: "orders"
        }
      }
    ]);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const createCustomer = async (req, res, next) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).json(customer);
  } catch (err) {
    next(err);
  }
};
