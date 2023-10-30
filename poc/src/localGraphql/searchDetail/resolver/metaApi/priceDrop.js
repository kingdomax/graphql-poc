import casual from 'casual';

export class PriceDrop {
    timeSpan() { return casual.integer(1, 10); }
    percentage() { return casual.integer(10, 100); }
}