import * as express from "express"
import { Request, Response } from "express"
const router = express.Router()

/* GET home page. */
router.get("/", (req: Request, res: Response, next) => {
  console.log("Loading index route")
  res.render("index", { title: "Express" })
})

export default router
