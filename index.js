const express = require("express");
const md5 = require("md5");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

router.get("/sms.php", (req, res) => {
    if (!req.query.destination) {
        res.send("Error: Parameter destination must be set");
        return false;
    }

    if (!req.query.username) {
        res.send("Error: Parameter username must be set");
        return false;
    }

    if (!req.query.password) {
        res.send("Error: Parameter password must be set");
        return false;
    }

    if (!req.query.text) {
        res.send("Error: Parameter text must be set");
        return false;
    }

    res.send("OK: "+md5(Math.random()));
});

app.use(bodyParser.json());
app.use(router);

const PORT = process.env.PORT || 3001;

app.listen(PORT, hostname => {
    console.log(`Running on: http://localhost:${PORT}`);
});
