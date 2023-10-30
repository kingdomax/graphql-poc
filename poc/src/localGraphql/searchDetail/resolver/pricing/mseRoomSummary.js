import casual from 'casual';
import { PriceInfo } from './priceInfo';

export class MseRoomSummary {
    
    price() { return new PriceInfo(); }
    providerId() { 
        return casual.random_element([332, 3038, 27980, 29100, 27999]);
    }
}
