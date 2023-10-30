import casual from 'casual';

export class Discount {


    deals() { 
        function randomDeal() {
            return casual.random_element(['SEASONAL_DEAL', 'EARLY_BIRD', 'CHINA_SEASONAL', 'LAST_MINUTE_DEAL', 'WEEKEND_DEAL', 'LONG_DEAL']);
        }
        return [randomDeal(), randomDeal(), randomDeal()];
    }
    psuedoCoupon() {
        return {
            value: casual.integer(100, 1000),
            code: 'FUH8647'
        };
    }
    channelDiscount() {
        return casual.random_element(['MOBILE_DEAL', 'INSIDE_DEAL', 'SECRET_DEAL', 'RETAIL_DEAL']);
    }   
}
