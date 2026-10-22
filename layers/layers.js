var wms_layers = [];


        var lyr_GoogleSatelit_0 = new ol.layer.Tile({
            'title': 'Google Satelit',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_DesaBonang_1 = new ol.format.GeoJSON();
var features_DesaBonang_1 = format_DesaBonang_1.readFeatures(json_DesaBonang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaBonang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaBonang_1.addFeatures(features_DesaBonang_1);
var lyr_DesaBonang_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaBonang_1, 
                style: style_DesaBonang_1,
                popuplayertitle: 'Desa Bonang',
                interactive: true,
    title: 'Desa Bonang<br />\
    <img src="styles/legend/DesaBonang_1_0.png" /> <br />\
    <img src="styles/legend/DesaBonang_1_1.png" /> Betahwalang<br />\
    <img src="styles/legend/DesaBonang_1_2.png" /> Bonangrejo<br />\
    <img src="styles/legend/DesaBonang_1_3.png" /> Gebang<br />\
    <img src="styles/legend/DesaBonang_1_4.png" /> Gebangarum<br />\
    <img src="styles/legend/DesaBonang_1_5.png" /> Jali<br />\
    <img src="styles/legend/DesaBonang_1_6.png" /> Jatimulyo<br />\
    <img src="styles/legend/DesaBonang_1_7.png" /> Jatirogo<br />\
    <img src="styles/legend/DesaBonang_1_8.png" /> Karangrejo<br />\
    <img src="styles/legend/DesaBonang_1_9.png" /> Kembangan<br />\
    <img src="styles/legend/DesaBonang_1_10.png" /> Krajanbogo<br />\
    <img src="styles/legend/DesaBonang_1_11.png" /> Margolinduk<br />\
    <img src="styles/legend/DesaBonang_1_12.png" /> Morodemak<br />\
    <img src="styles/legend/DesaBonang_1_13.png" /> Poncoharjo<br />\
    <img src="styles/legend/DesaBonang_1_14.png" /> Purworejo<br />\
    <img src="styles/legend/DesaBonang_1_15.png" /> Serangan<br />\
    <img src="styles/legend/DesaBonang_1_16.png" /> Sukodono<br />\
    <img src="styles/legend/DesaBonang_1_17.png" /> Sumberejo<br />\
    <img src="styles/legend/DesaBonang_1_18.png" /> Tlogoboyo<br />\
    <img src="styles/legend/DesaBonang_1_19.png" /> Tridonorejo<br />\
    <img src="styles/legend/DesaBonang_1_20.png" /> Weding<br />\
    <img src="styles/legend/DesaBonang_1_21.png" /> Wonosari<br />' });

lyr_GoogleSatelit_0.setVisible(true);lyr_DesaBonang_1.setVisible(true);
var layersList = [lyr_GoogleSatelit_0,lyr_DesaBonang_1];
lyr_DesaBonang_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_DesaBonang_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_DesaBonang_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_DesaBonang_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});