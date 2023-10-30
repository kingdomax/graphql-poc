import casual from 'casual';
import { fillArray } from '../../../util/arrayHelper';
import { PropertyMeta } from './metaApi/propertyMeta';
import { AlternateDate } from './searchClay/alternateDate';
import { PropertyContent } from './content/propertyContent';
import { PropertyPricing } from './pricing/propertyPricing';
import { TopSellingPoint } from './searchClay/topSellingPoint';
import { PropertyCoreSearch } from './coreSearch/propertyCoreSearch';
import { UniqueSellingPoint } from './searchClay/uniqueSellingPoint';

export class Property {
    
    meta() { return new PropertyMeta(); }
    content() { return new PropertyContent(); }
    pricing() { return new PropertyPricing(); }
    coreSearch() { return new PropertyCoreSearch(); }

    propertyId() { return casual.integer(1, 100000); }
    isRecommended() { return casual.boolean; }
    alternateDate() { return fillArray(new AlternateDate()); }
    topSellingPoints() { return new fillArray(new TopSellingPoint()); }
    uniqueSellingPoints() { return new fillArray(new UniqueSellingPoint()); }
}
