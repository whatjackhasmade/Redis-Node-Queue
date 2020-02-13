const password = process.env.REDIS_AUTH || `z6S3dEWg7nkN8LAwx4dC2PA6p0KRGUDj`;
const host =
  process.env.REDIS_HOST ||
  `redis-14488.c15.us-east-1-4.ec2.cloud.redislabs.com`;
const port = process.env.REDIS_PORT || 14488;

module.exports = {
  password,
  host,
  port
};
