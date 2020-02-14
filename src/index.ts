import express from "express"
import * as path from "path"
import cookieParser from "cookie-parser"
import logger from "morgan"

import indexRouter from "./routes/index"
import usersRouter from "./routes/users"

import subscriber from "./libraries/redis/subscriber"

require("dotenv").config()

const app = express()
const { PORT = 8080 } = process.env

app.set("views", "./views")
app.set("view engine", "pug")
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/", indexRouter)
app.use("/users", usersRouter)

const channel = "email"
subscriber.subscribe(channel, (error: string, count: number): void => {
  if (error) throw new Error(error)
  console.log(
    `Subscribed to ${count} channel. Listening for updates on the ${channel} channel.`
  )
})

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
  })
}

export default app
