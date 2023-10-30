import casual from 'casual';
import { Benefit } from './benefit';
import { Payment } from './payment';
import { Discount } from './discount';
import { PriceInfo } from './priceInfo';
import { MseRoomSummary } from './mseRoomSummary';
import { fillArray } from '../../../../util/arrayHelper';

export class CheapestRoomOffer {
    payment() { return new Payment(); }
    benefits() { fillArray(new Benefit()); }
    supplierId() { return casual.integer(100,1000); }
    availableRooms() { return casual.integer(1, 10); }
    uid() { return '6ec126b6-21df-7b9d-729d-db8fb896aa81'; }
    isMseProperty() { return casual.boolean; }
    isPromoEligible() { return casual.boolean; }
    occupancy() { return casual.integer(1, 10); }
    saveUpTo() { return casual.integer(100, 1000); }
    agodaCash() { return casual.integer(100, 1000); }  
    price() { return new PriceInfo(); }
    discount() { return new Discount(); }
    mseRoomSumaries() { return fillArray(new MseRoomSummary()) }
}
