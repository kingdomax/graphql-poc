import casual from 'casual';

export class ObjectInformation {

    id() { return casual.integer(100, 100000); }
    cityId() { return casual.integer(100, 100000); }
    countryId() { return casual.integer(100, 100000); }
    name() { return casual.state; }
    cityName() { return casual.city; }
    countryName() { return casual.country; }
}
