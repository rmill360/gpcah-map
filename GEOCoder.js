var countyDataMap_GEOCoder = (function($){
  return function(){

    var getStateBoxData = function(){
      return {"type":"FeatureCollection","features":[
        {"type":"Feature","id":"42","properties":{"name":"Pennsylvania"},"geometry":{"type":"Polygon","coordinates":[
          [
            [-80.518598, 42.269079],
            [-80.518598, 39.722302],
            [-74.69661, 39.722302],
            [-74.69661, 42.269079]
          ]
        ]}}
      ]};
    }

      var GEOData = countyDataMap_CountyGEOData;
    var hungerColorKeys = countyDataMap_Data.colorKeys;
    var hungerFields = countyDataMap_Data.fields;
      var hungerData = countyDataMap_Data.data;

    var getColorKeys = function(){
      return hungerColorKeys;
    };

    var getCountyFields = function(){
      return hungerFields;
    };

      var getCountyData = function(){
      var temp = [];
      var idx = 0;
      for(idx = 0; idx<hungerData.length; idx++){
        temp[hungerData[idx].county_name] = hungerData[idx];
      }

      for(idx = 0; idx<GEOData.features.length; idx++){
        var center = GEOData.features[idx].properties.center;
        var name = GEOData.features[idx].properties.name;
        GEOData.features[idx].properties = temp[name];
        GEOData.features[idx].name = name;
      }

      return GEOData;
    }

    return {
      "getStateBoxData": getStateBoxData,
      "getColorKeys": getColorKeys,
      "getCountyFields": getCountyFields,
      "getCountyData": getCountyData
    };
  };
})(jQuery);

//    {"type":"FeatureCollection","features":[
//      {"type":"Feature","id":"42","properties":{"name":"Pennsylvania","density":284.3},"geometry":{"type":"Polygon","coordinates":[
//        [
//          [-79.76278,42.252649],
//          [-79.76278,42.000709],
//          [-75.35932,42.000709],
//          [-75.249781,41.863786],
//          [-75.173104,41.869263],
//          [-75.052611,41.754247],
//          [-75.074519,41.60637],
//          [-74.89378,41.436584],
//          [-74.740426,41.431108],
//          [-74.69661,41.359907],
//          [-74.828057,41.288707],
//          [-74.882826,41.179168],
//          [-75.134765,40.971045],
//          [-75.052611,40.866983],
//          [-75.205966,40.691721],
//          [-75.195012,40.576705],
//          [-75.069042,40.543843],
//          [-75.058088,40.417874],
//          [-74.773287,40.215227],
//          [-74.82258,40.127596],
//          [-75.129289,39.963288],
//          [-75.145719,39.88661],
//          [-75.414089,39.804456],
//          [-75.616736,39.831841],
//          [-75.786521,39.722302],
//          [-79.477979,39.722302],
//          [-80.518598,39.722302],
//          [-80.518598,40.636951],
//          [-80.518598,41.978802],
//          [-80.518598,41.978802],
//          [-80.332382,42.033571],
//          [-79.76278,42.269079],
//          [-79.76278,42.252649]
//        ]
//      ]}}
//    ]};

