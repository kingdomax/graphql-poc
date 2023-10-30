import casual from 'casual';

export class Sponsor {
    trackingData() { return casual.string; }
    type() {
        return casual.random_element(['NO_SPONSOR', 'COST_PER_TIME', 'COST_PER_CLICK']);
    }
}
