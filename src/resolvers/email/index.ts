import * as fs from "fs"
import slugify from "slugify"
const publisher = require("../libraries/redis/publisher")

const emulateSend = (value: any) => {
  if (!value) return
  publisher.publish("email", value)
  const data = JSON.stringify(value, null, 4)

  const dir = `${process.cwd()}/email-logs`
  !fs.existsSync(dir) && fs.mkdirSync(dir)

  const now = new Date().toLocaleTimeString()
  const slugNow = slugify(now, {
    remove: /[*+~.()'"!:@]/g,
  })
  const filePath = dir + `/${value}-${slugNow}.json`

  const write = false
  if (!write) return

  fs.writeFile(filePath, data, { flag: "wx" }, err => {
    if (err) throw err
    console.log(`${value} written to ${filePath}`)
  })
}
