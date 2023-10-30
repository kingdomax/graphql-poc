import casual from 'casual';

export class SupplierInformation {

    isAgodaBand() { return casual.boolean; }
    id() { return casual.random_element([27931, 28999]); }
    name() {
        return casual.random_element(['Agoda.com', 'Priceline.com']);
    }
    imageUrls() {
        return [casual.random_element([
            '//cdn6.agoda.net/images/SUPER-3/default/agoda_1.png',
            '//cdn6.agoda.net/images/mvc/default/priceline-logo_v1.png'
        ])];
    }
}
