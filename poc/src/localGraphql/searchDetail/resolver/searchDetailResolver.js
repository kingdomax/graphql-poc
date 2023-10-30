import { Property } from './property';
import { Filter } from './coreSearch/filter';
import { MapInformation } from './npc/mapInformation';
import { fillArrayWithSize } from '../../../util/arrayHelper';
import { SearchInformation } from './coreSearch/searchInformation';
import { ObjectInformation } from './coreSearch/objectInformation';
import { SupplierInformation } from './pricing/supplierInformation';

export const searchDetailResolver = {
    
  Query: {     
    filters: () => {
      return fillArrayWithSize(new Filter(), 10);
    },
    searchInfo: () => {
      return new SearchInformation();
    },
    objectInfo: () => {
      return new ObjectInformation();
    },
    mapInfo: () => {
      return new MapInformation();
    },
    supplierInfo: () => {
      return [new SupplierInformation()];
    },

    properties: () => {
      return fillArrayWithSize(new Property(), 45);
    },
    highlyRatedAgodaHome: () => {
      return fillArrayWithSize(new Property(), 3);
    },
    recommendedProperty: () => {
      return [new Property()];
    },
    featureAgodaHomesResult: () => {
      return [new Property()];
    },
    extraAgodaHomes: () => {
      return [new Property()];
    }
  }
};
