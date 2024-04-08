const express = require("express");
const app = express();
const redis = require("redis");
const publish = redis.createClient();

app.get("/order", (req, res) => {
  const order = [
    {
      productId: 1,
      price: 5000,
    },
    {
      productId: 2,
      price: 10000,
    },
  ];

  //step: send order to payment.js service and sendemail.js service

  publish.publish("orderSystem", JSON.stringify(order));

  res.json({
    status: "success",
    message: "Thanks Thuy",
  });
});

app.listen(3000, () => {
  console.log(`Order service is running at port 3000`);
});
