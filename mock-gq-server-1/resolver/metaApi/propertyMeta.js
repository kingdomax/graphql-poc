import { PriceDrop } from './priceDrop';
import { BookingHistory } from './bookingHistory';

export class PropertyMeta {
    priceDrop() { return new PriceDrop(); }
    bookingHistory() { return new BookingHistory(); }
}