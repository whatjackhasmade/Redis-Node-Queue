import * as express from "express"
import { Request, Response } from "express"
const router = express.Router({ mergeParams: true })

/* GET users listing. */
router.get("/:id", async (req: Request, res: Response, next) => {
  const id = req.params.id
  if (!id) res.send("No ID recieved in request")
  if (id) res.send(`Recieved user ID ${id}`)
})

export default router
