import express from "express";

import createError from "http-errors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import router from "./routes/test";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ルーティング
app.use("/v1", router);

// catch 404 and forward to error handler
app.use(function (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  next(createError(404));
});

// error handler
app.use(function (
  err: any,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const port: string | number = process.env.PORT || 3000;
app.listen(port);
console.log("Express WebApi listening on port " + port);
