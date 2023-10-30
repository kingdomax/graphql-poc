import casual from 'casual';
import { Benefit } from './benefit';
import { Payment } from './payment';
import { Pointmax } from './pointmax';
import { fillArray } from '../../../../util/arrayHelper';
import { CheapestRoomOffer } from './cheapestRoomOffer';
import { AdvanceGuaranteeProgram } from './advanceGuaranteeProgram';

export class PropertyPricing {

    payment() { return new Payment(); }
    isReady() { return casual.boolean; }
    pointMax() { return new Pointmax(); }
    isAvailable() { return casual.boolean; }
    benefits() { return fillArray(new Benefit()); }
    cheapestRoomOffer() { return new CheapestRoomOffer(); }
    advanceGuaranteeProgram() { return new AdvanceGuaranteeProgram(); }
    pricingMessage() {
        return casual.random_element(['Mid-Year Sake - Special Price!', 'Chinese-New-Year - Special Discount!']);
    }
}
