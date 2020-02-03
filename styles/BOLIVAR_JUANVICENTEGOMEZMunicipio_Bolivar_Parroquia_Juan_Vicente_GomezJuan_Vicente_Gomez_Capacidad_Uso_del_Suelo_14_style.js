var size = 0;
var placement = 'point';
function categories_BOLIVAR_JUANVICENTEGOMEZMunicipio_Bolivar_Parroquia_Juan_Vicente_GomezJuan_Vicente_Gomez_Capacidad_Uso_del_Suelo_14(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'Clase V':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(127,239,172,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Clase VI':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(204,89,12,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_BOLIVAR_JUANVICENTEGOMEZMunicipio_Bolivar_Parroquia_Juan_Vicente_GomezJuan_Vicente_Gomez_Capacidad_Uso_del_Suelo_14 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("clase_suel");
    var labelText = "";
    size = 0;
    var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_BOLIVAR_JUANVICENTEGOMEZMunicipio_Bolivar_Parroquia_Juan_Vicente_GomezJuan_Vicente_Gomez_Capacidad_Uso_del_Suelo_14(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
