import casual from 'casual';

export class PriceInfo {

    perBook() { return this.priceView(); }
    perNight() { return this.priceView(); }
    perRoomPerNight() { return this.priceView(); }

    priceView() {
        return {
            exclusive: this.price(),
            inclusive: this.price()
        };
    }
    price() {
        return {
            display: casual.integer(10, 5000),
            chargeTotal: casual.integer(10, 5000),
            originalPrice: casual.integer(10, 5000),
            crossedOutPrice: casual.integer(10, 5000)
        };
    }
}
