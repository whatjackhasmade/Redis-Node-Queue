import * as fs from "fs"
import slugify from "slugify"
import Redis from "ioredis"
const subscriber = new Redis()
const write = true

subscriber.on("message", (channel, value) => {
  console.log(`Received the following message from ${channel}: ${value}`)

  const data = JSON.stringify(value, null, 4)
  const dir = `${process.cwd()}/email-logs`
  !fs.existsSync(dir) && fs.mkdirSync(dir)

  const now = new Date().toLocaleTimeString()
  const slugNow = slugify(now, {
    remove: /[*+~.()'"!:@]/g,
  })
  const filePath = dir + `/${value}-${slugNow}.json`

  if (!write) return

  fs.writeFile(filePath, data, { flag: "wx" }, err => {
    if (err) throw err
    console.log(`${value} written to ${filePath}`)
  })
})

export default subscriber
