import casual from 'casual';

export class AlternateDate {
    checkIn() { return casual.date('YYYY-MM-DDTHH:mm:ss'); }
    los() { return casual.integer(1, 3); }
    price() { return casual.double(10, 1000); }
}
