import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { EmailSender } from "./sendEmail.js";

const app = express();
app.use(express.json());

// Configure CORS properly
const corsOptions = {
  origin: ["https://www.adjarapeak.ge", "https://adjarapeak.ge"], // Add your frontend domains
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Handle preflight requests explicitly
app.options("/send", cors(corsOptions));

const PORT = process.env.PORT || 5001;

app.post("/send", async (req, res) => {
  try {
    const {
      name,
      phone,
      telegram,
      dateStart,
      dateEnd,
      comments,
      prod,
      desc,
      count,
      price,
    } = req.body;

    // Add await if EmailSender is async
    await EmailSender({
      name,
      phone,
      telegram,
      dateStart,
      dateEnd,
      comments,
      prod,
      desc,
      count,
      price,
    });

    res.json({ msg: "ok" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ msg: "Error sending email", error: error.message });
  }
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
export default app;
