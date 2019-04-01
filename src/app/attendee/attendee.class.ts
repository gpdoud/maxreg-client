export class Attendee 
{
    id: number;
    guestId: number;
    eventId: number;

    constructor(guestId: number = 0, eventId: number = 0)
    {
        this.id = 0;
        this.guestId = guestId;
        this.eventId = eventId;
    }
}
