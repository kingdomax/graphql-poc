import casual from 'casual';

export class Pointmax {
    id() { return casual.integer(1, 1000); }
    earnPoint() { return casual.integer(1, 1000); }
}
