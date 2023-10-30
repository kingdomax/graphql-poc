import casual from 'casual';

export class BookingHistory {
    
    timeSpan() { return casual.integer(1, 10); }
    numberOfBooking() { return casual.integer(1, 10); }
}