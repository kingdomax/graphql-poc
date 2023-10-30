import casual from 'casual';

export class UniqueSellingPoint {

    rank() { return casual.integer(1, 16); }
    value() { return casual.integer(7, 10); }
    type() {
        return casual.random_element(['SEGMENT_REVIEW', 'GUEST_RATE', 'NATIONALITY', 'ROOM_SIZE', 'FAMILY_RICH']);
    }
    segment() {
        return casual.random_element(['SOLO', 'COUPLE', 'BUSINESS_TRAVELER', 'FAMILY']);
    }
    propertyType() {
        return casual.random_element(['FIVE_STAR_HOTEL', 'FOUR_STAR_HOTEL', 'THREE_STAR_HOTEL', 'SERVICED_APARTMENT', 'GUEST_HOUSE', 'RESORT', 'HOSTEL']);
    }
}
