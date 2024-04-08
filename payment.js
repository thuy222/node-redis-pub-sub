const express = require("express");
const app = express();
const redis = require("redis");
const subscribe = redis.createClient();

subscribe.subscribe("orderSystem");
subscribe.on("message", (channel, message) => {
  console.log("channel payment", channel);
  console.log("message payment", JSON.parse(message));
});

app.listen(3001, () => {
  console.log(`Payment service is running at port 3001`);
});
