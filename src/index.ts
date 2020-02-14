import * as express from "express";
import * as path from "path";
import * as cookieParser from "cookie-parser";
import * as logger from "morgan";

import indexRouter from "./routes/index";
import usersRouter from "./routes/users";

const app = express();
const { PORT = 8080 } = process.env;

app.set("view engine", "jade");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

if (require.main === module) {
	app.listen(PORT, () => {
		console.log(`Listening at  http://localhost:${PORT}`);
	});
}

export default app;
