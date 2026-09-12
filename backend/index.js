import * as dotenv from "dotenv";
import cors from "cors";
import express from "express";
import { EmailSender } from "./sendEmail.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json({ limit: "100kb" }));

async function submitOrder(req, res) {
  try {
    const order = req.body || {};
    if (!order.customer?.name || !order.customer?.phone) {
      return res.status(400).json({ msg: "Укажите имя и телефон" });
    }
    if (!Array.isArray(order.items) || order.items.length === 0) {
      return res.status(400).json({ msg: "Корзина пуста" });
    }

    await EmailSender(order);
    return res.json({ msg: "ok" });
  } catch (error) {
    console.error("Order email error:", error);
    return res.status(500).json({ msg: "Не удалось отправить заказ" });
  }
}

app.post("/api/order", submitOrder);
app.post("/send", submitOrder);

app.listen(PORT, () => console.log(`listening on ${PORT}`));

export default app;
