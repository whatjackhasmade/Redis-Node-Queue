const express = require("express");
const fs = require("fs");
const slugify = require("slugify");
const client = require("../libraries/redis/index");
let router = express.Router();
router = express.Router({ mergeParams: true });

const emulateSend = value => {
  if (!value) return;
  console.log(`Setting mail value: '${value}'`);
  client.setex("latestEmail", 3600, JSON.stringify(value));

  const data = JSON.stringify(value, null, 4);
  const dir = `${process.cwd()}/email-logs`;
  !fs.existsSync(dir) && fs.mkdirSync(dir);
  const now = new Date().toLocaleTimeString();
  const slugNow = slugify(now, { remove: /[*+~.()'"!:@]/g });
  const filePath = dir + `/${value}-${slugNow}.json`;

  fs.writeFile(filePath, data, { flag: "wx" }, err => {
    console.log(`${value} written to ${filePath}`);
    if (err) throw err;
  });
};

/* GET users listing. */
router.get("/:id", function(req, res, next) {
  console.log(req.params.id);
  emulateSend(req.params.id);
  res.send("respond with a resource");
});

module.exports = router;
