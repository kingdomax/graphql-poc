import casual from 'casual';

export class InformationSummary {

    propertyType() { 
        return casual.random_element(['NORMAL_PROPERTY', 'NHA_PROPERTY', 'NHA_SINGLEROOM_PROPERTY']);
    }
    accommodationType() { 
        return casual.random_element(['HOTEL', 'HOSTEL', 'BANGALORE', 'VILLA', 'ENTIRE_APARTMENT', 'ENTIRE_HOUSE']);
    }
    url() { 
        return casual.random_element([
            '/modena-by-fraser-bangkok/hotel/bangkok-th.html', '/solitaire-bangkok-sukhumvit-11/hotel/bangkok-th.html', '/red-planet-bangkok-surawong/hotel/bangkok-th.html'
        ]);
    }
    awardYear() { return casual.integer(2015, 2019); }
    spokenLanguage() { return [{ id: casual.integer(1, 20) }];}
    name() { 
        return { 
            default: casual.random_element(['Cantara Grand at Central World Hotel', 'Modena by Fraser Bangkok', 'Novotel Bangkok Sukhumvit 4']),
            locale: casual.random_element(['โรงแรมเซ็นทาราแกรนด์ แอท เซ็นทรัลเวิลด์', 'โมเดน่า บาย เฟรเซอร์ แบงค็อก', 'โนโวเทล สุขุมวิท 4 กรุงเทพ'])
        }; 
    }
    address() { 
        return { 
            cityId: casual.integer(1, 100000),
            cityName: casual.city,
            areaId: casual.integer(1, 100000),
            areaName: casual.street,
            countryId: casual.integer(1, 100000),
            countryName: casual.country
        };
    }
    coordinate() {
        return { latitude: casual.latitude, longitude: casual.longitude };
    }
    renovation() {
        return { 
            type: casual.random_element(['NEWLY_BUILT', 'NEWLY_RENOVATE']),
            year: casual.integer(2015, 2019)
        };
    }
    hasHostExperience() { return casual.boolean; }
}
