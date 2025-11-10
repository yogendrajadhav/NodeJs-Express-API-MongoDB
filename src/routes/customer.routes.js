import express from "express";
import { getCustomers, createCustomer } from "../controllers/customer.controller.js";
import { protect, adminOnly } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", protect, getCustomers);       // any logged-in user
router.post("/", protect, adminOnly, createCustomer);  // admin only

export default router;
