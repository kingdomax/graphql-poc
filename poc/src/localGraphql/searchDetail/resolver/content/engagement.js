import casual from 'casual';

export class Engagement {
    todayBooking() { return casual.integer(1, 10); }
    peopleLooking() { return casual.integer(1, 10); }
    lastBookedHour() { return casual.integer(1, 10); }
}
