import publisher from "libraries/redis/publisher"
const channel = "email"

const emulateSend = async (value: any) => {
  if (!value) return
  publisher.publish(channel, value)
}

export default emulateSend
