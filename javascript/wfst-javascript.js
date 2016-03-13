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

});