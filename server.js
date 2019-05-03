let express = require("express");
let app = express();
app.get("/", (req, res) => {
  res.send(
    "“I love scotch. Scotchy scotch scotch. Here it goes down, down into my belly. mm mm mm” — Ron Burgundy"
  );
});

app.listen(9001);
