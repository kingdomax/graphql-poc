import { Property } from './property';
import { fillArrayWithSize } from '../util/arrayHelper';
import { Filter } from './coreSearch/filter';
import { MapInformation } from './npc/mapInformation';
import { SearchInformation } from './coreSearch/searchInformation';
import { ObjectInformation } from './coreSearch/objectInformation';
import { SupplierInformation } from './pricing/supplierInformation';

const makeCpuBusy = () => {
    const hugeArray = fillArrayWithSize(new Property(), 100000);
    const hugeArrayAsString = JSON.stringify(hugeArray);
    const hugeArrayAsObject = JSON.parse(hugeArrayAsString);
};

export const mockResolver = {
  
  Query: {   
    mockServer1: (parent, args, context, info) => {
      makeCpuBusy();
      return {
        properties: (parent, args, context, info) => {
          return [new Property()];
        },
        recommendedProperty: (parent, args, context, info) => {
          return [new Property()];
        }
      };
    }
  }
};

/*
highlyRatedAgodaHome: (parent, args, context, info) => {
  return [new Property()];
},
featureAgodaHomesResult: (parent, args, context, info) => {
  return [new Property()];
},
extraAgodaHomes: (parent, args, context, info) => {
  return [new Property()];
}
*/
/*return new Promise(resolve => {
  setTimeout(() => { resolve([new Property()]); }, 185);
});*/