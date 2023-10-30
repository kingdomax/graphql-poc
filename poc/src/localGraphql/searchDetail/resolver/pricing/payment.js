import casual from 'casual';

export class Payment {

    noCreditCard() { return { isEligible: casual.boolean }; }
    payAtHotel() { return { isEligible: casual.boolean }; }
    payAtCheckIn() { return { isEligible: casual.boolean }; }
    paylater() {
        return {
            isEligible: casual.boolean,
            authDate: casual.date('YYYY-MM-DDTHH:mm:ss'),
            chargeDate: casual.date('YYYY-MM-DDTHH:mm:ss'),
        };
    }
    taxReceipt() {
        return {
            isEligible: casual.boolean,
            isDomestic: casual.boolean,
            type: casual.random_element(['TYPE1', 'TYPE2'])
        };
    }
    cancellation() {
        return {
            code: casual.random_element(['308D100P_100P', '365D100P_100P', '']),
            type: casual.random_element(['FREE_CANCELLATION', 'SPECIAL_CONDITIONS', 'NON_REFUNDABLE']),
            freeCancellationDate: casual.date('YYYY-MM-DDTHH:mm:ss'),
            policies: casual.random_element(['This booking is Non-Refundable and cannot be amended or modified.', 'Any cancellation received within 308 days prior to the arrival date will be charged for the entire stay']),
            noShowPolicy: 'If you fail to arrive or cancel the booking, no refund will be given'
        };
    }
}
