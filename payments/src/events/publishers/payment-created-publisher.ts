import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from "@an-tickets-dev/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
