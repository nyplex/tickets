import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@an-tickets-dev/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
