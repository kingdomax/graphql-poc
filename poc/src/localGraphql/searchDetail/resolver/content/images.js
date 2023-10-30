import casual from 'casual';
import { fillArrayWithSize } from '../../../../util/arrayHelper';

export class Images {

    propertyImages() {
        return fillArrayWithSize({
            id: casual.integer(1,1000),
            url: casual.random_element([
                '//pix6.agoda.net/hotelImages/4870796/0/806acf3c53ab68cfe80668019bab2b82.jpg', '//pix5.agoda.net/hotelImages/126/1266532/1266532_16102615330048146833.jpg', '//photos.hotelbeds.com/giata/bigger/54/544264/544264a_hb_ro_011.jpg'
            ]),
            caption: casual.word,
            imageType: casual.integer(1,1000),
            categoryId: casual.random_element(['ALL', 'ROOMS', 'FACILITY', 'PROPERTY_VIEW', 'DINING', 'OTHER'])
        }, 6);
    }
}
