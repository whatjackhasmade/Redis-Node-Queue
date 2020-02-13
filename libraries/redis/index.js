//configure redis client on port 6379
const redis = require("redis");
const config = require("./config");
console.log(config);
// const client = redis.createClient(config);

if (config.auth) {
  // client.auth(config.redisAuth, (err, response) => {
  //   if (err) console.log("fuck");
  //   if (err) throw err;
  // });
}

// client.publish("email", '{"message":"Hello world from Lucian!"}', () => {
//   process.exit(0);
// });

const client = {};

module.exports = client;
