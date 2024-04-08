const express = require("express");
const app = express();

const redis = require("redis");
const subscribe = redis.createClient();

subscribe.subscribe("orderSystem");
subscribe.on("message", (channel, message) => {
  console.log("channel sendEmail", channel);
  console.log("message sendEmail", JSON.parse(message));
});

app.listen(3002, () => {
  console.log(`Send email service is running at port 3002`);
});
