import express from "express";
import shortest from "./bootcamp/shortest.js";
import worldlengths from "./bootcamp/wordlengths.js";
import longestword from "./bootcamp/longestword.js";
import enoughAirtime from "./bootcamp/EnoughAirtime.js";
import totalPhoneBill from "./bootcamp/Phonebill.js";

const app = express();
app.use(express.static("public"));
app.use(express.json()); // Add this line to parse JSON request bodies

app.use(express.urlencoded({ extended: true }));

let callPrice = 2.75;
let smsPrice = 0.75;

app.get("/api/wordgame", function (req, res) {
    const sentence = req.query.sentence;

    if (!sentence) {
        res.json({ error: "No sentence specified" });
        return;
    }

    res.json({
        longest: longestword(sentence),
        shortest: shortest(sentence),
        sum: worldlengths(sentence),
    });
});

app.post("/api/phonebill/total", function (req, res) {
    try {
        const { bill } = req.body;

        if (!bill) {
            res.status(400).json({ error: "No bill specified" });
            return;
        }

        const total = totalPhoneBill(bill);
        res.json({ total });
    } catch (error) {
        console.error("Error processing phone bill:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get("/api/phonebill/prices", function (req, res) {
    res.json({
        call: callPrice,
        sms: smsPrice,
    });
});

app.post("/api/phonebill/price", function (req, res) {
    const { type, price } = req.body;

    if (type === "call") {
        callPrice = price;
    } else if (type === "sms") {
        smsPrice = price;
    }

    res.json({
        status: "success",
        message: `The ${type} was set to ${price}`,
    });
});
app.post("/api/enough", function (req, res) {
    try {
        const { usage, available } = req.body;

        if (!usage || !available) {
            res.status(400).json({
                error: "Please provide usage and available airtime.",
            });
            return;
        }

        const result = enoughAirtime(usage, available);
        res.json({ result });
    } catch (error) {
        console.error("Error calculating enough airtime:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

const PORT = process.env.PORT || 3007;

app.listen(PORT, function () {
    console.log("App starting on port:", PORT);
});
