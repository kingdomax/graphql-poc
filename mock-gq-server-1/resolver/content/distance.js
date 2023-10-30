import casual from 'casual';

export class Distance {
    // if resolver return incorrect type of enum, it will break at run time
    objectType() { 
        return casual.random_element(['CITYCENTER', 'TRANSPORTATION', 'LANDMARK', 'BEACH']);
     }
    objectName() { return casual.street; }
    objectId() { return casual.integer(1, 10000); }
    distance() { return casual.integer(100, 1000); }
}
