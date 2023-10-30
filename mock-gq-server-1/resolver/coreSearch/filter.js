import casual from 'casual';

export class Filter {
    group() { 
        return casual.random_element(['POPULAR', 'FAMILY', 'PERSONALIZED', 'STAR_RATING', 'GUEST_RATING', 'GUEST_REVIEW_BREAKDOWN', 'NEIGHBORHOOD',
        'ROOM_AMENITIES', 'PROPERTY_FACILITIES', 'ROOM_OFFERS', 'PRODUCT_TYPE', 'PROPERTY_TYPE', 'PAYMENT_OPTIONS', 'DEAL_DISCOUNT',
        'ACCOMMODATION_CLASS', 'HOTEL_CHAIN', 'LOCATION_RATING', 'LOCATION_HIGHLIGHT', 'NEARBY_ATTRACTION', 'NEARBY_TRANSPORTATION', 'BEACH_ACESS']);
    }
    item() { 
        return {
            id: casual.integer(1, 10000),
            value: casual.integer(1, 10000),
            name: casual.word,
            type: casual.random_element(['DEALS', 'STAR_RATING', 'GUEST_RATING', 'LOCATION_RATING', 'PROPERTY_AREA_ID', 'PROPERTY_CHAIN_ID',
            'LANDMARK_ID', 'LANDMARK_SUBTYPE_ID', 'BEACH_ACCESS_TYPE', 'ATMOSPHERE_ID', 'ROOM_BENEFIT', 'ROOM_AMENITIES', 'PROPERTY_FACILITIES',
            'PRODUCT_TYPE', 'PAYMENT_OPTION', 'AFFORDABLE_CATEGORY', 'GUEST_STAFF_RATING', 'GUEST_VALUE_RATING', 'GUEST_COMFORT_RATING',
            'GUEST_LOCATION_RATING', 'GUEST_FACILITIES_RATING', 'GUEST_CLEANLINESS_RATING']),
            extraData: {
                price: casual.integer(100, 5000),
                synopsis: casual.description,
                recommendedScore: casual.integer(10, 100)
            }
        };
    }
    items() {
        return [this.item(), this.item(), this.item(), this.item(), this.item()];
    }
}
