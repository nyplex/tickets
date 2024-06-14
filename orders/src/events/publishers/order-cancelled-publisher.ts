import {
  OrderCancelledEvent,
  Publisher,
  Subjects,
} from "@an-tickets-dev/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
