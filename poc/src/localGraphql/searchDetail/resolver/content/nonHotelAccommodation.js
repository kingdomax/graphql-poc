import casual from 'casual';

export class NonHotelAccommodation {

    hostLevel() { 
        return casual.random_element(['REGULAR', 'VERIFIED', 'TRUSTED_HOST', 'TOP_HOST']);
    }
    room() {
        return {
            noOfBed: casual.integer(1, 6),
            roomSize: casual.integer(25, 100),
            noOfBedrooms: casual.integer(1, 3),
            noOfBathrooms: casual.integer(1, 3)
        };
    }
}
