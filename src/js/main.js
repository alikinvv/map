ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.017383, 82.934751],
            zoom: 12
        }, {
            searchControlProvider: 'yandex#search'
        }),

        point1 = new ymaps.Placemark([54.987387, 82.882909], {}, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/p1.png',
            iconImageSize: [48, 48],
            iconImageOffset: [-24, -24],
            iconContentOffset: [15, 15]
        }),

        point2 = new ymaps.Placemark([55.033359, 82.959813], {}, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/p2.png',
            iconImageSize: [48, 48],
            iconImageOffset: [-24, -24],
            iconContentOffset: [15, 15]
        }),

        point3 = new ymaps.Placemark([54.997849, 83.014058], {}, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/p3.png',
            iconImageSize: [48, 48],
            iconImageOffset: [-24, -24],
            iconContentOffset: [15, 15]
        }),

        point4 = new ymaps.Placemark([55.091489, 82.935094], {}, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/p6.png',
            iconImageSize: [48, 48],
            iconImageOffset: [-24, -24],
            iconContentOffset: [15, 15]
        }),

        point5 = new ymaps.Placemark([55.023498, 82.915525], {}, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/p10.png',
            iconImageSize: [48, 48],
            iconImageOffset: [-24, -24],
            iconContentOffset: [15, 15]
        });

    myMap.geoObjects
        .add(point1)
        .add(point2)
        .add(point3)
        .add(point4)
        .add(point5)
});