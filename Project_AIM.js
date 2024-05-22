// *********************************************************************************************************************************************************************
// PROJECT AIM 2023-2024
// Author: Jann Rovic Cueto and Jessa Allard
/** University: Rizal Technological University
                Caraga State University
                Adamson University
*/
// This script will automatically classify rice paddies using supervised machine learning.
// Note: Anyone use this codes agree to cite our paper publish in ISPRS Annals.
// *********************************************************************************************************************************************************************

//**********************************************************************************************************************************************************************
//                                                  FEATURE COLLECTION AND IMPORTS
//**********************************************************************************************************************************************************************
// Creation of polygons and training labels for classifications.
{
var rice1 = 
    /* color: #ee250b */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[120.88351095261986, 15.21825555419419],
                  [120.88341439309532, 15.217955328378187],
                  [120.88363969865257, 15.217727570577136],
                  [120.8838435465377, 15.21789321263869],
                  [120.88386500420982, 15.218172733322177]]]),
            {
              "class": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[120.87891901078636, 15.216619835942018],
                  [120.87886536660606, 15.216392076696891],
                  [120.87907994332726, 15.21620572804043],
                  [120.87915504517967, 15.216495603657018]]]),
            {
              "class": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[120.86602294984276, 15.216775126195229],
                  [120.86591566148216, 15.216381723998083],
                  [120.86623752656395, 15.216029731935723],
                  [120.86673105302269, 15.216133259073947],
                  [120.86677396836693, 15.216464545574318]]]),
            {
              "class": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[120.96782831492584, 15.299348771395733],
                  [120.9673347884671, 15.299845504115003],
                  [120.96561817469757, 15.298541578214316],
                  [120.9662189895169, 15.298251815800693]]]),
            {
              "class": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[120.96634773554962, 15.298210421137435],
                  [120.96686271968048, 15.298438091684039],
                  [120.96694855036895, 15.29862436740173],
                  [120.96664814295929, 15.29899691834013]]]),
            {
              "class": 0,
              "system:index": "4"
            })]),
    rice2 = 
    /* color: #ff2407 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[120.98846213493297, 15.290504576339318],
                  [120.98829047355602, 15.29002851961592],
                  [120.98951356086681, 15.29002851961592],
                  [120.98959939155529, 15.290545972525033]]]),
            {
              "class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[121.06579558525036, 15.333076229178035],
                  [121.0647227016444, 15.333841901509418],
                  [121.06476561698864, 15.333221086320778],
                  [121.0650660243983, 15.332641657147303],
                  [121.06592433128307, 15.332765820676876]]]),
            {
              "class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[120.83630676704438, 15.410970025460138],
                  [120.83686466651947, 15.409315126736564],
                  [120.8378946347812, 15.409480617201801],
                  [120.83737965065033, 15.411425120299297]]]),
            {
              "class": 1,
              "system:index": "2"
            })]),
    rice3 = 
    /* color: #ff1302 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[120.86026581174163, 15.41467343233949],
                  [120.86011560803679, 15.414052857920302],
                  [120.8608022535446, 15.41394942867026],
                  [120.86097391492156, 15.414507946008909],
                  [120.86060913449553, 15.415076804718161]]]),
            {
              "class": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[120.89583575615325, 15.404544827010245],
                  [120.89617907890715, 15.403427737294988],
                  [120.8969086397592, 15.403593232446251],
                  [120.8965653170053, 15.405620537360646]]]),
            {
              "class": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[120.91883838066497, 15.396973323681665],
                  [120.91862380394377, 15.396104445016977],
                  [120.9194391954843, 15.395276938153412],
                  [120.91961085686125, 15.396311321218633]]]),
            {
              "class": 2,
              "system:index": "2"
            })]),
    rice4 = 
    /* color: #c21609 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[120.91780841240325, 15.405248176715281],
                  [120.91755092033782, 15.404710321272542],
                  [120.91793715843596, 15.404379332616283],
                  [120.9183233965341, 15.404793068354273]]]),
            {
              "class": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[120.86468372307232, 15.419447130520863],
                  [120.86416873894146, 15.419819465727862],
                  [120.86322460136822, 15.419157536009587]]]),
            {
              "class": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[120.94902041775464, 15.357558028363195],
                  [120.94983580929517, 15.357061432771365],
                  [120.94974997860669, 15.358675364122623]]]),
            {
              "class": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[120.95292571408032, 15.374151917738633],
                  [120.95249656063794, 15.37336570341352],
                  [120.95322612148999, 15.373282943838328],
                  [120.95378402096509, 15.373779500796505],
                  [120.95326903683423, 15.374110538111267]]]),
            {
              "class": 3,
              "system:index": "3"
            })]),
    rice5 = 
    /* color: #ff0000 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[121.0083068106635, 15.387802618803422],
                  [121.00792057256535, 15.386292356061752],
                  [121.00884325246648, 15.38616822439028],
                  [121.00877887945012, 15.387119898646914],
                  [121.00882179479436, 15.38778193034671],
                  [121.00847847204045, 15.38778193034671]]]),
            {
              "class": 4,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[120.99305040578679, 15.387119898646914],
                  [120.99277145604924, 15.386085469901511],
                  [120.99315769414738, 15.386250978846151],
                  [120.99326498250798, 15.386726816329094]]]),
            {
              "class": 4,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[120.94399166914587, 15.332504951471497],
                  [120.94321919294958, 15.332360093832325],
                  [120.94332648131018, 15.3317185802233],
                  [120.94403458449011, 15.3321531541736]]]),
            {
              "class": 4,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[120.99380141319205, 15.456674607138396],
                  [120.99416619361807, 15.455950749995973],
                  [120.99485283912588, 15.455164845092684],
                  [120.99470263542105, 15.455743933205142],
                  [120.99440222801138, 15.456509154300202],
                  [120.99440222801138, 15.456840059844481]]]),
            {
              "class": 4,
              "system:index": "3"
            })]),
    urban = 
    /* color: #00ff00 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[120.67169233974747, 15.073458963637666],
                  [120.67066237148575, 15.07155277192703],
                  [120.67495390590958, 15.070060957806117],
                  [120.67461058315567, 15.072050040976325]]]),
            {
              "class": 5,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[120.65049215969375, 15.064425121191915],
                  [120.6474022549086, 15.06160714692665],
                  [120.651436297267, 15.06260173033825]]]),
            {
              "class": 5,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[120.74782926492796, 14.94669875443436],
                  [120.75010377817259, 14.94611826668865],
                  [120.74971754007444, 14.947942651459801]]]),
            {
              "class": 5,
              "system:index": "2"
            })]),
    water = 
    /* color: #0000ff */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[120.95781020601304, 14.955979121724729],
                  [120.95781020601304, 14.953076792823047],
                  [120.96845321138413, 14.949511020706048],
                  [120.97248725374253, 14.9519987749444]]]),
            {
              "class": 6,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[120.77852293641851, 15.02029921512504],
                  [120.77790066392706, 15.018112763824401],
                  [120.77836200387762, 15.018071314294438],
                  [120.77848002107427, 15.018817404603041],
                  [120.77882334382818, 15.019625666162497]]]),
            {
              "class": 6,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[121.11594288502158, 15.512118251652465],
                  [121.11499874744834, 15.510753627642865],
                  [121.11637203846396, 15.50967846297925],
                  [121.11632912311973, 15.511167151022583]]]),
            {
              "class": 6,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[121.07158655349245, 15.554005562080327],
                  [121.07039565268984, 15.55361279651564],
                  [121.07055658523073, 15.553230366166789]]]),
            {
              "class": 6,
              "system:index": "3"
            })]),
    other = 
    /* color: #999900 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[121.17804427867134, 15.512235870744703],
                  [121.17675681834419, 15.510953952207684],
                  [121.17791553263862, 15.50872091381148],
                  [121.18066211466987, 15.509258499336342]]]),
            {
              "class": 7,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[121.20465179209907, 15.505950258527195],
                  [121.20357890849311, 15.503675812228558],
                  [121.20495219950874, 15.502435194599988],
                  [121.20705505137641, 15.504875068853059]]]),
            {
              "class": 7,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[121.15974014665126, 15.46111870354629],
                  [121.17175644303798, 15.455162445893944],
                  [121.18566101457118, 15.457478788660767],
                  [121.17227142716884, 15.4621113965064]]]),
            {
              "class": 7,
              "system:index": "2"
            })]),
    Rice1 = 
    /* color: #c377d6 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[121.0425833901635, 15.6372760566334],
                  [121.04144613354119, 15.636511506888779],
                  [121.04215423672112, 15.635808945146398],
                  [121.04307691662224, 15.636635488122433]]]),
            {
              "spectra": "Rice",
              "system:index": "0"
            })]),
    Urban = 
    /* color: #0b4a8b */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[120.94124208315186, 15.6539428725646],
                  [120.94104896410279, 15.653550298278764],
                  [120.94175706728272, 15.653157723239213],
                  [120.94190727098756, 15.653426327295072]]]),
            {
              "spectra": "Builtup",
              "system:index": "0"
            })]),
    wetland = 
    /* color: #ffc82d */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[121.16104184117103, 15.840969892917606],
                  [121.16361676182532, 15.827097471624308],
                  [121.18043957676673, 15.82742777843843],
                  [121.17408810581946, 15.836511004250216]]]),
            {
              "spectra": "Water",
              "system:index": "0"
            })]),
    bareland = 
    /* color: #ff0000 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[121.01310214902465, 15.80762456742789],
                  [121.0130216827542, 15.80752649804654],
                  [121.01318797971312, 15.807536821141548]]]),
            {
              "spectra": "Bareland",
              "system:index": "0"
            })]);
          }
//======================================================================================================================================================================
//                                               START OF THE SCRIPT
//**********************************************************************************************************************************************************************
// Boundary Polygon Global
var country = ee.FeatureCollection("FAO/GAUL_SIMPLIFIED_500m/2015/level2");

// Define the region of interest (ROI)
//If you want to change your own region of interest, change it from country or district name. Check the boundary collection.
var areas = country.filter(ee.Filter.eq("ADM2_NAME", "Nueva Ecija"));

// Set ROI as map center and set level 13 zoom
Map.centerObject(areas, 13);

// Visualization for Boundary
/** var visual_bound = {
    color: 'FF0000',
    fillColor: '00000000',  
 };
Map.addLayer(areas.style(visual_bound), {}, "Nueva Ecija Boundary");
*/

//**********************************************************************************************************************************************************************
//                                         PART 1: DEFINE STUDY AREA AND CREATE TEMPORAL IMAGE COMPOSITE
//**********************************************************************************************************************************************************************

// Define image collection for 5 months with at least 15 days interval per collection.
// You can change the date of transplanting season of rice depending in your country or study area.
{
var sentinel1 = ee.ImageCollection('COPERNICUS/S1_GRD')
                    .filterDate('2021-06-01', '2021-06-15')
                    .filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VH'))
                    .filter(ee.Filter.eq('instrumentMode', 'IW'))
                    .filter(ee.Filter.or((ee.Filter.eq('orbitProperties_pass', 'ASCENDING'), ee.Filter.eq('orbitProperties_pass', 'DESCENDING'))))
                    .filterBounds(areas);
// print(sentinel1,'s1');
var sentinel2 = ee.ImageCollection('COPERNICUS/S1_GRD')
                    .filterDate('2021-06-16', '2021-06-30')
                    .filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VH'))
                    .filter(ee.Filter.eq('instrumentMode', 'IW'))
                    .filter(ee.Filter.or((ee.Filter.eq('orbitProperties_pass', 'ASCENDING'), ee.Filter.eq('orbitProperties_pass', 'DESCENDING'))))
                     .filterBounds(areas);
// print(sentinel2,'s2');                     
var sentinel3 = ee.ImageCollection('COPERNICUS/S1_GRD')
                    .filterDate('2021-07-01', '2021-07-15')
                    .filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VH'))
                    .filter(ee.Filter.eq('instrumentMode', 'IW'))
                    .filter(ee.Filter.or((ee.Filter.eq('orbitProperties_pass', 'ASCENDING'), ee.Filter.eq('orbitProperties_pass', 'DESCENDING'))))
                     .filterBounds(areas);
// print(sentinel3,'s3');                     
var sentinel4 = ee.ImageCollection('COPERNICUS/S1_GRD')
                    .filterDate('2021-07-16', '2021-07-31')
                    .filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VH'))
                    .filter(ee.Filter.eq('instrumentMode', 'IW'))
                    .filter(ee.Filter.or((ee.Filter.eq('orbitProperties_pass', 'ASCENDING'), ee.Filter.eq('orbitProperties_pass', 'DESCENDING'))))
                     .filterBounds(areas);
// print(sentinel4,'s4');                    
var sentinel5 = ee.ImageCollection('COPERNICUS/S1_GRD')
                    .filterDate('2021-08-01', '2021-08-15')
                    .filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VH'))
                    .filter(ee.Filter.eq('instrumentMode', 'IW'))
                    .filter(ee.Filter.or((ee.Filter.eq('orbitProperties_pass', 'ASCENDING'), ee.Filter.eq('orbitProperties_pass', 'DESCENDING'))))
                     .filterBounds(areas);
// print(sentinel5,'s5');                     
var sentinel6 = ee.ImageCollection('COPERNICUS/S1_GRD')
                    .filterDate('2021-08-16', '2021-08-31')
                    .filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VH'))
                    .filter(ee.Filter.eq('instrumentMode', 'IW'))
                    .filter(ee.Filter.or((ee.Filter.eq('orbitProperties_pass', 'ASCENDING'), ee.Filter.eq('orbitProperties_pass', 'DESCENDING'))))
                     .filterBounds(areas);   
// print(sentinel5,'s6');                     
var sentinel7 = ee.ImageCollection('COPERNICUS/S1_GRD')
                    .filterDate('2021-09-01', '2021-09-15')
                    .filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VH'))
                    .filter(ee.Filter.eq('instrumentMode', 'IW'))
                    .filter(ee.Filter.or((ee.Filter.eq('orbitProperties_pass', 'ASCENDING'), ee.Filter.eq('orbitProperties_pass', 'DESCENDING'))))
                     .filterBounds(areas); 
// print(sentinel7,'s7');
var sentinel8 = ee.ImageCollection('COPERNICUS/S1_GRD')
                    .filterDate('2021-09-16', '2021-09-30')
                    .filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VH'))
                    .filter(ee.Filter.eq('instrumentMode', 'IW'))
                    .filter(ee.Filter.or((ee.Filter.eq('orbitProperties_pass', 'ASCENDING'), ee.Filter.eq('orbitProperties_pass', 'DESCENDING'))))
                    .filterBounds(areas);  
// print(sentinel8,'s8');                    
var sentinel9 = ee.ImageCollection('COPERNICUS/S1_GRD')
                    .filterDate('2021-10-01', '2021-10-15')
                    .filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VH'))
                    .filter(ee.Filter.eq('instrumentMode', 'IW'))
                    .filter(ee.Filter.or((ee.Filter.eq('orbitProperties_pass', 'ASCENDING'), ee.Filter.eq('orbitProperties_pass', 'DESCENDING'))))
                    .filterBounds(areas);
// print(sentinel9,'s9');                   
var sentinel10 = ee.ImageCollection('COPERNICUS/S1_GRD')
                    .filterDate('2021-10-16', '2021-10-31')
                    .filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VH'))
                    .filter(ee.Filter.eq('instrumentMode', 'IW'))
                    .filter(ee.Filter.or((ee.Filter.eq('orbitProperties_pass', 'ASCENDING'), ee.Filter.eq('orbitProperties_pass', 'DESCENDING'))))
                    .filterBounds(areas);
// print(sentinel10,'s10');    
}

// Get the mean of the image collection then use it as bands following the polarisation Vertical/Horizontal.
{
var image1 = sentinel1.select('VH').mean().rename('VH1');
var image2 = sentinel2.select('VH').mean().rename('VH2');
var image3 = sentinel3.select('VH').mean().rename('VH3');
var image4 = sentinel4.select('VH').mean().rename('VH4');
var image5 = sentinel5.select('VH').mean().rename('VH5');
var image6 = sentinel6.select('VH').mean().rename('VH6');
var image7 = sentinel7.select('VH').mean().rename('VH7');
var image8 = sentinel8.select('VH').mean().rename('VH8');
var image9 = sentinel9.select('VH').mean().rename('VH9');
var image10 = sentinel10.select('VH').mean().rename('VH10');
}
// Call all the images and stacked it into one image variable
var stacked = image1.addBands([image2,image3,image4,image5,image6,image7,image8,image9,image10]).clip(areas);
//print(stacked, 'Total Images Composite Bands');

// Use this to create temporal band combination
// It was thought to be that rice paddies appear magenta in 2nd month up to 5 months while bluewish in 1st month.
var stacked_scaled = stacked.multiply(10).add(350).uint8();
var bands = ['VH2', 'VH4', 'VH9'];
var display = {bands: bands, min: 0, max: 220};
Map.addLayer(stacked_scaled, display, 'Stacked Sentinel 1', false);

// Create the annotated label classes
var gt1 =  rice1.merge(rice2).merge(rice3).merge(rice4).merge(rice5).merge(urban).merge(water).merge(other);

//Set train
var training = stacked_scaled.sampleRegions({
  collection: gt1,
  properties: ['class'],
  scale: 10
});

//**********************************************************************************************************************************************************************
//                                              PART 2: SUPERVISED MACHINE LEARNING MODEL 
//**********************************************************************************************************************************************************************
// Model 1
// Make a Random Forest classifier and set hyperparameter.
/**
var classifier = ee.Classifier.smileRandomForest({
  numberOfTrees: 100, 
  seed: 42
}).train({
      features: training,
      classProperty: 'class',
});
 */
 
// Model 2
// Make a Classification and Regression Trees classifier and set hyperparameter.
var classifier = ee.Classifier.smileCart({
  //maxNodes: 100,  not use this
  //minLeafSize: 10, not use this
}).train({
  features: training,
  classProperty: 'class',
});

// Model 3
// Make a Gradient Trees Boosting classifier and set hyperparameter.
/**
var classifier = ee.Classifier.smileGradientTreeBoost({
  numberOfTrees: 100,
  shrinkage: 0.1,
  samplingRate: 0.8,
  maxNodes: 6,
  loss: 'deviance',
  seed: 42
}).train({
  features: training,
  classProperty: 'class',
});
 */

//Create stacked of classified layer
var classified = stacked_scaled.classify(classifier);

// Setting threshold value at 6 meaning less than 6 are true and greater than 6 is maskout.
var masked = classified.updateMask(classified.lt(6)); 
//print(masked);
Map.addLayer(masked,
             {min: 1, max:8 , palette: ['yellow','yellow','yellow','yellow','yellow']},
             'classification');
             
var areaImage = ee.Image.pixelArea().addBands(masked);
var areasum = areaImage.reduceRegion({
  reducer: ee.Reducer.sum().group({
    groupField: 1,
    groupName: 'class',
  }),
  geometry: areas,
  scale: 10,
  maxPixels: 1e13,
  //tileScale: 8
});

//**********************************************************************************************************************************************************************
//                                                 PART 3:MODEL ACCURACY ASSESSMENT
//**********************************************************************************************************************************************************************

// Print the area calculations.
print('############### CLASS AREA SQ. METERS ###############');
print('Estimated Area Each Label:', areasum);

print('############### ACCURACY ASSESSMENT ###############');
// Sample the input with a different random seed to get validation data.
var validation = stacked_scaled.sampleRegions({
  collection: gt1,
  properties: ['class'],
  scale: 10
});

// Classify the validation data.
var validated = validation.classify(classifier);

// Get a confusion matrix representing expected accuracy.
var testAccuracy = validated.errorMatrix('class', 'classification');
print('Validation error matrix: ', testAccuracy);
print('Validation overall accuracy: ', testAccuracy.accuracy());

// Calculate Kappa coefficient
var fscore = testAccuracy.fscore();
print('fscore(beta):', fscore);

// Calculate Kappa coefficient
var kappa = testAccuracy.kappa();
print('Kappa Coefficient:', kappa);

//**********************************************************************************************************************************************************************
//                                                 PART 4: CHART OF TEMPORAL SIGNATURE
//**********************************************************************************************************************************************************************
// print('##### CHART OF TEMPORAL SIGNATURE #####');

{
var bandInfo = {
  'VH1': {v: 1, f: 'June_1FN'},
  'VH2': {v: 2, f: 'June_2FN'},
  'VH3': {v: 3, f: 'July_1FN'},
  'VH4': {v: 4, f: 'July_2FN'},
  'VH5': {v: 5, f: 'Aug_1FN'},
  'VH6': {v: 6, f: 'Aug_2FN'},
  'VH7': {v: 7, f: 'Sep_1FN'},
  'VH8': {v: 8, f: 'Sep_2FN'},
  'VH9': {v: 9, f: 'Oct_1FN'},
  'VH10': {v: 10, f: 'Oct_2FN'}

};

var xPropVals = [];    // List to codify x-axis band names as values.
var xPropLabels = [];  // Holds dictionaries that label codified x-axis values.
for (var key in bandInfo) {
  xPropVals.push(bandInfo[key].v);
  xPropLabels.push(bandInfo[key]);
}
var regionsBand =
    gt1
        .reduceToImage({properties: ['class'], reducer: ee.Reducer.first()})
         .rename('class');

var sentinelSrClass = stacked_scaled.addBands(regionsBand);
        // print(sentinelSrClass);
var chart = ui.Chart.image
                .byClass({
                  image: sentinelSrClass,
                  classBand: 'class',
                  region: gt1,
                  reducer: ee.Reducer.mean(),
                  scale: 10,
                // classLabels: ['paddy1', 'paddy2', 'paddy3', 'paddy4', 'paddy5', 'urban', 'water', 'others'],
                  xLabels: xPropVals
                })
                .setChartType('ScatterChart')
                .setOptions({
                  title: 'Temporal Signatures - Backscatter',
                  hAxis: {
                    title: 'Dates',
                    titleTextStyle: {italic: false, bold: true},
                    viewWindow: {min: bands[0], max: bands[9]},
                    ticks: xPropLabels
                  },
                  vAxis: {
                    title: 'Backscatter(Scaled)',
                    titleTextStyle: {italic: false, bold: true},
                    viewWindow: {min: 0, max: 250},
                  },
                  colors: ['red', 'blue', 'grey', 'green', 'yellow', 'magenta', 'cyan', 'green'],
                  pointSize: 2,
                  lineSize: 2,
                  curveType: 'function'
                });
}
//**********************************************************************************************************************************************************************
//                               PART 5: SENTINEL 2 TRUE IMAGE FOR VALIDATION ASSISTANCE AND INDICES
//**********************************************************************************************************************************************************************

// Create cloud mask for Sentinel-2
/**
 * Function to mask clouds using the Sentinel-2 SCL band
 * @param {ee.Image} image Sentinel-2 image
 * @return {ee.Image} cloud masked Sentinel-2 image
 */
 
// Sentinel-2 cloud masking
function cloudMask(image){
  var scl = image.select('SCL');
  var mask = scl.eq(3).or(scl.gte(7).and(scl.lte(10)));
  return image.updateMask(mask.eq(0));
}

// Apply cloud mask to Sentinel-2 Collection
var collection = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED') 
                   .filterDate('2021-06-01', '2021-10-30')
                   .filterBounds(areas)
                   .map(cloudMask);
var im = collection.mean().clip(areas);
var S2_bands = ['B8', 'B4', 'B3'];
var S2_display = {bands: S2_bands, min: 0, max: 4000};
// Map.addLayer(im, S2_display, 'Sentinel 2', false);
// print(collection, ' Total Images Available for Sentinel-2 ')
// print(im,'Sentinel -2 Total Images for Overlay')      
 
// Spectral Indices Nueva Ecija Province
//NDVI
{
var ndviS2 = im.normalizedDifference(['B8', 'B4']).rename('NDVI');
Map.addLayer(ndviS2);
}

//NDMI
{
var ndmiS2 = im.normalizedDifference(['B8', 'B11']).rename('NDMI');
Map.addLayer(ndmiS2);
}      

//NDWI     
var ndwiS2 = im.normalizedDifference(['B3', 'B8']).rename('NDwI');      
Map.addLayer(ndwiS2);      

//**********************************************************************************************************************************************************************
//                                             PART 6: SENTINEL 2 SPECTRAL SIGNATURE 
//**********************************************************************************************************************************************************************
// Create the Spectral signature 
{
var addNDVI = function(image) {
  var ndvi = image.normalizedDifference(['B8', 'B4']).rename('NDVI');
  return image.addBands(ndvi);
};
}

var withNDVI = collection.map(addNDVI);

var sen_img = withNDVI.qualityMosaic('NDVI').select(['B2','B3','B4','B5','B6','B7','B8','B8A','B9']).clip(areas);

Map.addLayer(sen_img,{bands:['B8','B4','B3'], min:0,max:4000},'FCC');

// Create the annotated label classes
var gt2 =  Rice1.merge(Urban).merge(wetland).merge(bareland);

//Create chart
var chart1 = ui.Chart.image.regions({
  image: sen_img, 
  regions:gt2, 
  reducer: ee.Reducer.mean(), 
  scale:10, 
  seriesProperty: 'spectra', 
})
  .setChartType('ScatterChart')
                .setOptions({
                  title: 'Bands Signature - Reflectance',
                  hAxis: {
                    title: 'Bands',
                    titleTextStyle: {italic: false, bold: true},
                    viewWindow: {min: bands[0], max: bands[9]},
                  },
                  vAxis: {
                    title: 'Surface Reflectance',
                    titleTextStyle: {italic: false, bold: true},
                    viewWindow: {min: 0, max: 6000},
                  },
                  colors: ['red', 'blue', 'green', 'brown'],
                  pointSize: 0,
                  lineSize: 2,
                  curveType: 'function'
                });
//**********************************************************************************************************************************************************************
//                                                  PART 7: IMAGE EXTRACTION
//**********************************************************************************************************************************************************************

{  
// Export the classified image as GeoTIFF to Google Drive.
Export.image.toDrive({
  image: masked,
  description: 'Classifed Rice Paddies',
  folder: 'Mapping_raw_image', 
  fileNamePrefix: 'classified_image',
  scale: 10, 
  region: areas, 
  maxPixels: 1e13, 
  fileFormat: 'GeoTIFF',
});

// Export the Raw Radar 'stacked' image to Google Drive
Export.image.toDrive({
  image: stacked_scaled,
  description: 'Stacked Radar Image',  
  folder: 'Mapping_raw_image',  
  fileNamePrefix: 'Radar_Composite',
  region: areas,
  scale: 10,
  maxPixels: 1e13,  
  fileFormat: 'GeoTIFF',  
});

// Export the Sentinel 2 False image to Google Drive
Export.image.toDrive({
  image: im,
  description: 'S2-False Color Image',  
  folder: 'Mapping_raw_image',  
  region: areas,
  fileNamePrefix: 'False_Composite',
  scale: 10,
  maxPixels: 1e13,  
  fileFormat: 'GeoTIFF',  
});


// Export the Sentinel 2 NDVI to Google Drive
Export.image.toDrive({
  image: ndviS2,
  description: 'S2-NDVI',  
  folder: 'Mapping_raw_image',  
  region: areas,
  fileNamePrefix: 'S2-NDVI',
  scale: 10,
  maxPixels: 1e13,  
  fileFormat: 'GeoTIFF',  
});

// Export the Sentinel 2 NDMI to Google Drive
Export.image.toDrive({
  image: ndmiS2,
  description: 'S2-NDMI',  
  folder: 'Mapping_raw_image',  
  region: areas,
  fileNamePrefix: 'S2-NDMI',
  scale: 10,
  maxPixels: 1e13,  
  fileFormat: 'GeoTIFF',  
});

// Export the Sentinel 2 NDWI to Google Drive
Export.image.toDrive({
  image: ndwiS2,
  description: 'S2-NDWI',  
  folder: 'Mapping_raw_image',  
  region: areas,
  fileNamePrefix: 'S2-NDWI',
  scale: 10,
  maxPixels: 1e13,  
  fileFormat: 'GeoTIFF',  
});
}

//**********************************************************************************************************************************************************************
//                                            PART 8: WEB DESIGN OF USER INTERFACE
//**********************************************************************************************************************************************************************

{
//Add Title and Legends
 //Title //
Map.add(ui.Label(
    'Monitoring of Rice Paddy Crops',  {
      fontWeight: 'bold', BackgroundColor: 'FBF9F5',fontSize: '14px'}));

//create the title lable below.
var title = ui.Label('Rice Transplanting of 2021', {
      fontWeight: 'bold', BackgroundColor: 'FBF9F5',fontSize: '14px'});
title.style().set('position', 'bottom-right');
Map.add(title);
}  
  
  
//Create a panel next to the map
{
var panel = ui.Panel({style:{width: '450px'}});
ui.root.add(panel);

 var label1 = ui.Label({
  value: 'SENTINEL-1 and 2: Rice Paddy Mapping using Machine Learning Classification',
   style: {
   // fontSize: '20px',
    color: 'white',
    backgroundColor :'green',
   // border: '1px solid black',
   // fontWeight: 'bold',
   // padding: '5px',
   margin: '12px 0px 0px 8px', fontWeight: 'bold', fontSize: '15px', border: '2px solid black', 
   padding: '5px 5px 5px 5px',
  }
//  style: {
 //   fontSize: '16px',
 //   color: 'red',
   // fontWeight: 'bold',
  //  padding: '5px',
 // }
});  
  
 var label2 = ui.Label({
  value: 'Developed by Jann Rovic Cueto and Jessah Mei Allard',
  style: {
    fontSize: '14px',
    color: 'black',
    // fontWeight: 'bold',
    //padding: '5px',
  }
});  

 var affiliationLabel = ui.Label({
  value: 'In partnership with:',
  style: {
    fontSize: '15px',
    color: 'black',
    fontWeight: 'bold',
    //padding: '5px',
  }
});

// var affiliationLabel= ui.Label('In coordination with',{fontWeight: 'bold',fontSize: '14px', padding: '1px',});
var affiliation= ui.Label(
  "Rizal Technological, Adamson & Caraga State Universities, Philippines\n"+
  "Program of Project AIM\n"+
  "Funded by: AdU StaRLab\n"+
  "In coordination with PhilRice Institute and Municipality of Guimba\n"+
  "Email: abm11c.cueto.jannrovic@gmail.com\n"
  , {whiteSpace:'pre',padding: '1px',fontSize: '13px',
    color: 'black',
    //fontWeight: 'bold',
    }
  
);  
  
//********
// Panel
var affiliationPanel = ui.Panel([affiliationLabel,affiliation]);
// var affiliationPanel = ui.Panel([affiliation]);

// Label names
panel.add(label1);
panel.add(label2);
panel.add(affiliationPanel);

// Charts 
panel.add(chart);
panel.add(chart1);


}  

// Visibility Looks
{
// Set the default map's cursor to a 'crosshair'.

Map.style().set('cursor', 'crosshair');

// Set visibility options to remove geometry creator, map type controller,
// and layer list.
Map.setControlVisibility({
    all: true,
    layerList: true,
    zoomControl: false,
    scaleControl: false,
    mapTypeControl: false,
    fullscreenControl: true,
    drawingToolsControl: false
});

Map.setOptions('HYBRID');
}

// Pallete Color
{
var ndvicolor = ['blue', 'white', 'green']; 

var ndwicolor = ['red', 'yellow', 'green', 'cyan', 'blue'];
                 
var ndmicolor = ['040274', '040281', '0502a3', '0502b8', '0502ce', '0502e6',
                 '0602ff', '235cb1', '307ef3', '269db1', '30c8e2', '32d3ef',
                 '3ba285', '3ff38f', '86e26f', '3ae237', 'b5e22e', '05021f',
                 'fff705', 'ffd611', 'ffb613', 'ff8b13', 'ff6e08', 'ff500d',
                 'ff0000', 'de0101', 'c21301', 'a71001', '911003'];
                 
var rfpallete = ['yellow', 'yellow', 'yellow', 'yellow','yellow'];
}      
     
//Panel Display
// Define information about each layer that will be used to visualize it and
// describe it in a selector widget and legend.
var dataInfo = {
      'rfc': {
          name: 'Machine Learning Classification',
          desc: 'Random Forest Trees',
          img: masked,
          vis: {
              min: 1,
              max: 5,
              palette: rfpallete,
              opacity: 0.85
        }
    },
        'dmi': {
        name: 'Normalized Difference Moisture Index - S2',
        desc: 'Moisture Index of Nueva Ecija',
        img: ndmiS2,
        vis: {
            min: -1,
            max: 1,
            palette: ndmicolor,
            opacity: 0.85
        }
    },
        'dvi': {
        name: 'Normalized Difference Vegetation Index - S2',
        desc: 'Vegetation Health Index of Nueva Ecija',
        img: ndviS2,
        vis: {
            min: -1,
            max: 1,
            palette: ndvicolor,
            opacity: 0.85
        }
    },
        'dwi': {
            name: 'Normalized Difference Water Index - S2',
            desc: 'Water Health Index of Nueva Ecija',
            img: ndwiS2,
            vis: {
                min: -1,
                max: 1,
                palette: ndwicolor,
                opacity: 0.85
            }
    },
};      

     
// Create a layer selector that dictates which layer is visible on the map.
// The list of possible layers are generated from the data info provided above.
var items = [];
Object.keys(dataInfo).forEach(function(key) {
    items.push({value: key, label: dataInfo[key].name});
});
items.push({value: 'none', label: 'Remove all'});

var select = ui.Select({
    items: items,
    value: items[0].value,
    style: {margin: '8px 0px'}
});


var legend = ui.Panel({
    style: {
        position: 'bottom-left',
        width: '25%',
        //padding: '8px 15px'
    }
});


// Redraw function is called when the user changes the selected layer.
function redraw(layer) {
    // Fetch the info that corresponds to the selected layer.
    var info = dataInfo[layer];

    // Reset the layers and the legend.
    Map.layers().reset();
    legend.clear();

    // Construct the layer selection widgets.
    legend
    .add(
        ui.Label({
            value: 'Choose display layer:',
            style: {
                fontSize: '14px',
                fontWeight: 'bold',
                textAlign: 'left',
                margin: '4px 0px'
            },
        })
    )
    .add(select);

    // Construct the legend widgets.
    function makeLegend(vis) {
        // Creates a color bar thumbnail image for use in legend from the given
        // color palette.
        function makeColorBarParams(palette) {
            return {
            // Bounding box for color bar.
                bbox: [0, 0, 1, 0.1],
                // Dimensions of color bar.
                dimensions: '100x10',
                // Format of color bar.
                format: 'png',
                // Min value for color bar.
                min: -1,
                // Max value for color bar.
                max: 1,
                // Color palette for color bar.
                palette: palette
            };
        }

        // Create the color bar for the legend.
        var colorBar = ui.Thumbnail({
        // Image to use for color bar.
            image: ee.Image.pixelLonLat().select(0),
            // Parameters for color bar.
            params: makeColorBarParams(vis.palette),
            style: {
                // Stretch color bar horizontally.
                stretch: 'horizontal',
                // No margin for color bar.
                margin: '0px 0px',
                // Max height of color bar.
                maxHeight: '10%',
                // Width of color bar.
                width: '100%'
            },
        });

        // Create a panel with three numbers for the legend.
        var legendLabels = ui.Panel({
            widgets: [
                ui.Label(vis.min, {
                    margin: '0px 0px'
                }),
                ui.Label((vis.min + vis.max) / 2, {
                    margin: '0px 0px',
                    textAlign: 'center',
                    stretch: 'horizontal',
                }),
                ui.Label(vis.max, {
                    margin: '0px 0px'
                }),
            ],
            layout: ui.Panel.Layout.flow('horizontal')
        });

        // Add label to legend.
        legend.add(
            ui.Label({
                value: info.desc,
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold',
                    textAlign: 'left',
                    padding: '0px 0px 4px 0px',
                    margin: '8px 0px'
                },
            })
        );

        // Add colorbar to legend.
        legend.add(colorBar);

        // Add labels to legend.
        legend.add(legendLabels);
    }

    // If layer is none, reset layers on map.
    if (layer == 'none') {
        Map.layers().reset();
    } else {
        // Check which layer is selected and create the corresponding legend.
        makeLegend(info.vis);

        // Add layer to map.
        var visImg = info.img.visualize(info.vis);
        Map.addLayer(visImg, {}, layer);
    }
}

// Register the `redraw` function to the layer selector.
select.onChange(redraw);

// Invoke the redraw function at start up to initialize the temperature map.
redraw('rfc');

// Add legend to map.
Map.add(legend);


//**********************************************************************************************************************************************************************
//                                                                        END OF THE SCRIPT
//**********************************************************************************************************************************************************************







