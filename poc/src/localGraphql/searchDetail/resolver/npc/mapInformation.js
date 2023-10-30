import casual from 'casual';

export class MapInformation {

    zoomLevel() { return casual.integer(1, 10); }
    centerLatitude() { return casual.latitude; }
    centerLongtitude() { return casual.longitude; }
    landmark() {
        return {
            id: casual.integer(100, 10000),
            type: casual.integer(1, 10),
            name: casual.title,
            shortName: casual.state_abbr,
            latitude: casual.latitude,
            longitude: casual.longitude,
            imageUrls: ['images1', 'images2', 'images3']
        };
    }
    landmarks() { return [this.landmark(), this.landmark(), this.landmark()]; }
}
