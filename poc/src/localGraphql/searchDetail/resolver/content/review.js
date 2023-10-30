import casual from 'casual';
import{ fillArray, fillArrayWithSize } from '../../../../util/arrayHelper';

export class Review {

    provider() {
        return {
            id: casual.random_element([332, 3038, 27980, 29100, 27999]),
            isDefault: casual.boolean
        };
    }
    cumulative() {
        return {
            score: casual.integer(6, 10),
            reviewCount: casual.integer(100, 50000)
        };
    }
    demographic() {
        return {
            id: casual.random_element(['ALL_GUESTS', 'COUPLE', 'BUSINESS_TRAVELER', 'SOLO_TRAVELER', 'GROUP', 'FAMILY_WITH_OLD_CHILDREN', 'FAMILY_WITH_YOUNG_CHILDREN']),
            reviewCount: casual.integer(100, 50000),
            grades: fillArrayWithSize({
                type: casual.random_element(['OVERALL', 'CLEANLINESS', 'FACILITIES', 'LOCATION', 'ROOM_COMFORT', 'STAFF_PERFORMANCE', 'VALUE_FOR_MONEY']),
                score: casual.integer(6, 10),
            }, 6)
        };
    }
    summary() {
        return {
            recommendedScore: casual.integer(10, 99),
            frequentTravellerScore: casual.integer(10, 99),
            snippets: fillArray({
                snippet: casual.sentence,
                date: casual.date('YYYY-MM-DDTHH:mm:ss'),
                reviewerName: casual.full_name,
                reviewRating: casual.integer(6, 10),
                countryId: casual.integer(1, 100),
                countryName: casual.country,
            })
        };
    }
}
