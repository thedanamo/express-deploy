let express = require("express");
let app = express();
app.get("/", (req, res) => {
  res.send(
    `<div>“I love scotch. Scotchy scotch scotch. Here it goes down, down into my belly. mm mm mm” — Ron Burgundy</div>
    <div> another quote: </div>
    <div>[talking to Baxter, his dog] Come again? You know I don't speak Spanish. In English, please. What? You pooped in the refrigerator? And you ate the whole... wheel of cheese? How'd you do that? I'm not even mad, that's amazing.  — also Ron Burgundy</div>`
  );
});

app.listen(9001);
