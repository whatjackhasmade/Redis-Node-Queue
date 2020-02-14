import redis from "redis";
const config = require("./config");
const client = redis.createClient(config);

if (config.auth) {
	client.auth(config.auth, (err, response) => {
		if (err) console.log("Could not auth");
		if (err) throw err;
	});
}

module.exports = client;
