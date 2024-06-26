import express from "express";
import "express-async-errors";
import cookieSession from "cookie-session";
import { json } from "body-parser";
import {
  NotFoundError,
  errorHandler,
  currentUser,
} from "@an-tickets-dev/common";
import { newOrderRouter } from "./routes/new";
import { showOrderRouter } from "./routes/show";
import { indexOrderRouter } from "./routes";
import { deleteOrderRouter } from "./routes/delete";

const app = express();

app.set("trust proxy", true);

app.use(json());

app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);

app.use(currentUser);

app.use(deleteOrderRouter);
app.use(indexOrderRouter);
app.use(newOrderRouter);
app.use(showOrderRouter);

app.all("*", async (req, res, next) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
