import { Rating } from './rating';
import { Images } from './images';
import { Review } from './review';
import { Distance } from './distance';
import { Highlights } from './highlights';
import { Engagement } from './engagement';
import { fillArray } from '../../../../util/arrayHelper';
import { InformationSummary } from './informationSummary';
import { NonHotelAccommodation } from './nonHotelAccommodation';

export class PropertyContent {
    
    images() { return new Images(); }
    rating() { return new Rating(); }
    reviews() { return [new Review()]; }
    highlights() { return new Highlights(); }
    engagement() { return new Engagement(); }
    summary() { return new InformationSummary(); }
    distance() { return fillArray(new Distance()); }
    nonHotelAccommodation() { return new NonHotelAccommodation(); }
}
