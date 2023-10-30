import casual from 'casual';

export class SearchInformation {

    token() { return null; }
    isComplete() { return true; }
    percentageBooked() { return casual.integer(10, 80); }
    totalProperties() { return casual.integer(100, 6000); }
    checkIn() { return casual.date('YYYY-MM-DDTHH:mm:ss'); }
    filteredProperties() { return casual.integer(100, 1500); }
    availableProperties() { return casual.integer(100, 4500); }

    suggestPrice() {
        return casual.random_element(['INCLUSIVE', 'EXCLUSIVE']);
    }
    searchStatus() {
        return casual.random_element(['NORMAL', 'CHECKIN_CHANGED']);
    }
}
