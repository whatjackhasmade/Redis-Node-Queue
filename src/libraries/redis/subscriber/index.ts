import redis from "redis"
import config from "../config"
const subscriber = redis.createClient(config)

subscriber.on("email", (channel: string, content: any) => {
  console.log("Recieved email")
  console.log(channel)
  console.log(content)
})

subscriber.subscribe("email")

export default subscriber
