import casual from 'casual';

export class TopSellingPoint {
    
    type() {
        return casual.random_element(['DEAL_OF_DAY', 'BEST_SELLER', 'TOP_VALUE_FOR_MONEY', 'CHEAPEST_THAN_SIMILAR', 'TOP_LOCATION_FOR_MONEY']);
    }
    value() { return casual.integer(6, 10); }
}
