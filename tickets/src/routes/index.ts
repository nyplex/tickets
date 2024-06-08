import express, { Request, Response } from "express";
import { Ticket } from "../models/tickets";
import { NotFoundError } from "@an-tickets-dev/common";

const router = express.Router();

router.get("/api/tickets", async (req: Request, res: Response) => {
  const tickets = await Ticket.find({});

  res.send(tickets);
});

export { router as indexTicketRouter };
