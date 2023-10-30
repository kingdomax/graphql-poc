import casual from 'casual';

export class Highlights {
    favouriteFeature() {
        return {
            id: casual.integer(1,100),
            category: casual.random_element(['AIRPORT', 'TRANSPORT', 'FACILITY', 'TOP_LANDMARK'])
        };
    }
}