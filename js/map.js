let myMap;


const init = () => {
    myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom:12,
        controls:[]
    });

    const coords = [
        [55.750469, 37.603047],
    ];

    const myCollection = new ymaps.GeoObjectCollection ({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref:"./img/map/marker.svg",
        iconImageSize: [58, 73],
        iconImageOffset: [-35, -52]
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');

}
ymaps.ready(init);

