import casual from 'casual';

export class Benefit {
    id() { return casual.integer(1, 100000); }
}
