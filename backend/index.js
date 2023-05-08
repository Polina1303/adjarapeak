import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { EmailSender } from "./sendEmail.js";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

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
      count,
      price,
    } = req.body;

    EmailSender({
      name,
      phone,
      telegram,
      dateStart,
      dateEnd,
      comments,
      prod,
      count,
      price,
    });
    res.json({ msg: "ok" });
  } catch (error) {
    res.status(404).json({ msg: "Error" });
  }
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/api", (req, res) => {
  request(
    {
      url: "https://script.google.com/macros/s/AKfycbwftACfpQ6dyJK79r_WSrzaRZvQP0X6-mwkbjGHhycTxOpgjyNOyOmrGaXi59oEArOktA/exec",
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get("/api", (req, res) => {
  res.json({
    message: "Helloo",
  });
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
