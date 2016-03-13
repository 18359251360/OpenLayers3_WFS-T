$(document).ready(function () {
/** Map width and height - window resize */
    var mapDiv = $('#map');
    mapDiv.height($(window).height());
    mapDiv.width($(window).width());

    $(window).resize(function () {
        mapDiv.height($(window).height());
        mapDiv.width($(window).width());
    });
/** -------------------------------------------- */

/** Initial map settings */
    var map = new ol.Map({
       target: 'map',
       layers: [new ol.layer.Tile({
           source: new ol.source.Stamen({
               layer: 'toner-lite'
           })
       })],
       controls: ol.control.defaults().extend([
           new ol.control.ScaleLine(),
           new ol.control.MousePosition({
               coordinateFormat: ol.coordinate.createStringXY(2),
               className: 'mouse-position'
           })
       ]),
       view: new ol.View({
           zoom: 15,
           center: ol.proj.transform([20.457680, 44.817154], 'EPSG:4326','EPSG:3857')  //Belgrade, Serbia
       })
   });
/** -------------------------------------------- */

/** Defining WFS sources and adding new layers to the map */
    var polygonSource = new ol.source.Vector({
        url: 'http://localhost:8080/geoserver/wfs?' +
             'service=WFS&' +
             'version=1.1.0&' +
             'request=GetFeature&' +
             'typeNames=wfst-test:polygon&' +
             'outputFormat=json&' +
             'srsname=EPSG:3857',
        format: new ol.format.GeoJSON()
    });

    var lineSource = new ol.source.Vector({
        url: 'http://localhost:8080/geoserver/wfs?' +
        'service=WFS&' +
        'version=1.1.0&' +
        'request=GetFeature&' +
        'typeNames=wfst-test:line&' +
        'outputFormat=json&' +
        'srsname=EPSG:3857',
        format: new ol.format.GeoJSON()
    });

    var pointSource = new ol.source.Vector({
        url: 'http://localhost:8080/geoserver/wfs?' +
        'service=WFS&' +
        'version=1.1.0&' +
        'request=GetFeature&' +
        'typeNames=wfst-test:point&' +
        'outputFormat=json&' +
        'srsname=EPSG:3857',
        format: new ol.format.GeoJSON()
    });

    var polygon = new ol.layer.Vector({
        preload: Infinity,
        source: polygonSource
    });

    var line = new ol.layer.Vector({
        preload: Infinity,
        source: lineSource
    });

    var point = new ol.layer.Vector({
        preload: Infinity,
        source: pointSource
    });

    map.addLayer(polygon);
    map.addLayer(line);
    map.addLayer(point);
/** -------------------------------------------- */
});