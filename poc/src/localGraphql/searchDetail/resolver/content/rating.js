import casual from 'casual';

export class Rating {
    value() { return casual.integer(1, 5); }
    type() { return casual.random_element(['NORMAL_PROPERTY', 'NHA_PROPERTY']); }
}
