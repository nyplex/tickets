import { Listener, OrderCreatedEvent, Subjects } from "@an-tickets-dev/common";
import { queueGroupName } from "./queue-group-name";
import { Message } from "node-nats-streaming";
import { Order } from "../../models/orders";

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
  queueGroupName = queueGroupName;

  async onMessage(
    data: OrderCreatedEvent["data"],
    msg: Message
  ): Promise<void> {
    const order = Order.build({
      id: data.id,
      version: data.version,
      userId: data.userId,
      price: data.ticket.price,
      status: data.status,
    });
    await order.save();

    msg.ack();
  }
}
