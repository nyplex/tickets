import { OrderCreatedEvent, Publisher, Subjects } from "@an-tickets-dev/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
