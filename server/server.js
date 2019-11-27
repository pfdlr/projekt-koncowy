const express = require("express");
const cors = require("cors");
const config = require("./config");
const helmet = require("helmet");
const path = require("path");
const fetch = require("node-fetch");

const app = express();

//const postRoutes = require('./routes/post.routes');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());

//app.use('/api', postRoutes);

/* app.use(express.static(path.join(__dirname, '/../client/build'))); // Serve static files from the React app */

/* fetch */
// API for product list
app.get("/api/products", function(req, res) {
  const url = new URL("https://asos2.p.rapidapi.com/products/v2/list"),
    params = {
      country: "US",
      currency: "USD",
      sort: "freshness",
      lang: "en-US",
      sizeSchema: "US",
      offset: "0",
      categoryId: "8799",
      limit: 50,
      store: "US"
    };

  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  fetch(url, config.HEADERS)
    .then(res => res.json())
    .then(data => {
      res.send({ data });
    })
    .catch(err => {
      res.send(err);
    });
});
// API for single product
app.get("/api/product:id", function(req, res) {
  const url1 = new URL("https://asos2.p.rapidapi.com/products/v3/detail"),
    params = {
      store: "US",
      sizeSchema: "US",
      lang: "en-US",
      currency: "USD",
      id: req.params.id.replace(':', '')
    };

  Object.keys(params).forEach(key => url1.searchParams.append(key, params[key]));

  fetch(url1, config.HEADERS)
    .then(res => res.json())
    .then(data => {
      res.send({ data });
    })
    .catch(err => {
      res.send(err);
    });
});



app.listen(config.PORT, function() {
  console.log("Server is running on port:", config.PORT);
});
