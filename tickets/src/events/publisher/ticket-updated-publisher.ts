import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@an-tickets-dev/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
