require([
  "esri/Map",
  "esri/views/SceneView",
  "esri/layers/PointCloudLayer"
], function(
  Map, SceneView, PointCloudLayer
) {

  // Create Point Cloud Layer
  var layer = new PointCloudLayer({
    portalItem: { // autocasts as new PortalItem()
      id: "fc3f4a4919394808830cd11df4631a54"
    }
  });

  // Create Map and View
  var map = new Map({
    basemap: "satellite",
    ground: "world-elevation",
    layers: [layer]
  });

  var view = new SceneView({
    container: "viewDiv",
    map: map,
    camera: {
      heading: 210,
      tilt: 78,
      position: {
        x: -8249335,
        y: 4832005,
        z: 50.7,
        spatialReference: {
          wkid: 3857
        }
      }
    }
  });

});