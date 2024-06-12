import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@an-tickets-dev/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
