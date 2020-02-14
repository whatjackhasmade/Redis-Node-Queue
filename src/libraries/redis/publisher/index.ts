import redis from "redis"
import config from "../config"
const publisher = redis.createClient(config)

export default publisher
