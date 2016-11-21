// Fixed stage size
var SCENE_BASE_WIDTH = 1600;
var SCENE_BASE_HEIGHT = 1200;

// Max upscale
var SCENE_MAX_WIDTH = 1920;
var SCENE_MAX_HEIGHT = 1200;

var stage = new Konva.Stage({
    container: 'constellationContainer',
    width: SCENE_BASE_WIDTH,
    height: SCENE_BASE_HEIGHT
});


// Resize handler
function resizeStage() {

    if ($('#constellationContainer').css('display') == 'none') {
        $('#indexNavbar').removeClass('indexNavbar');
    }
    else {
        $('#indexNavbar').addClass('indexNavbar');
    }

    // Get kinetic stage container div
    var container = stage.container();

    // Get container size
    var containerSize = {
        width: container.clientWidth,
        height: container.clientHeight
    };

    // Odd size can cause blurry picture due to subpixel rendering
    if (containerSize.width % 2 !== 0) containerSize.width--;
    if (containerSize.height % 2 !== 0) containerSize.height--;

    // Resize stage
    stage.size(containerSize);

    // Scale stage
    var scaleX = Math.min(containerSize.width, SCENE_MAX_WIDTH) / SCENE_BASE_WIDTH;
    var scaleY = Math.min(containerSize.height, SCENE_MAX_HEIGHT) / SCENE_BASE_HEIGHT;

    var minRatio = Math.min(scaleX, scaleY);
    var scale = {
        x: minRatio,
        y: minRatio
    };

    stage.scale(scale);

    // Center stage
    var stagePos = {
        x: (containerSize.width - SCENE_BASE_WIDTH * minRatio) * 0.5,
        y: (containerSize.height - SCENE_BASE_HEIGHT * minRatio) * 0.5
    };

    stage.position(stagePos);

    // Redraw stage
    stage.batchDraw();
}


var layer = new Konva.Layer();


/*************/
/* Polygones */
/*************/

/* Polygones teco */
/* De haut en bas */

var poly = new Konva.Line({
    points: [-1000, -300, -1000, -100, 2000, 650, 2000, -300],
    stroke: 'rgb(50,50,50)',
    strokeWidth: 1.5,
    closed: true
});


layer.add(poly);

var poly2 = new Konva.Line({
    points: [-1000, -100, -1000, 200, 2000, 1200, 2000, 650],
    stroke: 'rgb(50,50,50)',
    strokeWidth: 1.5,
    closed: true
});


layer.add(poly2);


var poly3 = new Konva.Line({
    points: [-1000, 200, -1000, 600, 2000, 1300, 2000, 1200],
    stroke: 'rgb(50,50,50)',
    strokeWidth: 1.5,
    closed: true
});


layer.add(poly3);

/* Polygones bas vers haut droite */
/* De gauche à droite */

var poly4 = new Konva.Line({
    points: [-1000, 800, -500, 1600, 1500, -300, 1300, -300],
    stroke: 'rgb(50,50,50)',
    strokeWidth: 1.5,
    closed: true
});


layer.add(poly4);

var poly5 = new Konva.Line({
    points: [-500, 1600, 500, 1600, 1900, -300, 1500, -300],
    stroke: 'rgb(50,50,50)',
    strokeWidth: 1.5,
    closed: true
});


layer.add(poly5);

/* Polygones bas vers haut gauche */
/* De droite à gauche */

var poly6 = new Konva.Line({
    points: [140, -300, 500, 1600, 1200, 1600, 370, -300],
    stroke: 'rgb(50,50,50)',
    strokeWidth: 1.5,
    closed: true
});


layer.add(poly6);

var poly7 = new Konva.Line({
    points: [370, -300, 1200, 1600, 2000, 1600, 2000, 800, 500, -300],
    stroke: 'rgb(50,50,50)',
    strokeWidth: 1.5,
    closed: true
});


layer.add(poly7);


stage.add(layer);



/********************/
/* Polygones images */
/********************/

var image = new Image();

image.onload = function () {

    var polyTe = new Konva.Line({
        points: [238, 210, 318, 638, 460, 686, 700, 458, 634, 310],
        fillPatternImage: image,
        fillPatternOffset: {
            x: 300,
            y: -210
        },
        closed: true,
        opacity: 0
    });

    layer.add(polyTe);

    // add the layer to the stage
    stage.add(layer);

    var tween = new Konva.Tween({
        node: polyTe,
        duration: 0.2,
        opacity: 1
    });

    polyTe.on('mouseover', function () {
        tween.play();
    });

    polyTe.on('mouseout', function () {
        tween.reverse();
    });

}

var image2 = new Image();

image2.onload = function () {

    var polyTe = new Konva.Line({
        points: [1064, 116, 814, 353, 1324, 480, 1408, 366],
        fillPatternImage: image2,
        fillPatternOffset: {
            x: 340,
            y: 100
        },
        fillPatternScale: {
            x: 1.5,
            y: 1.5
        },
        closed: true,
        opacity: 0
    });

    layer.add(polyTe);

    // add the layer to the stage
    stage.add(layer);

    var tween = new Konva.Tween({
        node: polyTe,
        duration: 0.2,
        opacity: 1
    });

    polyTe.on('mouseover', function () {
        tween.play();
    });

    polyTe.on('mouseout', function () {
        tween.reverse();
    });

}

var image3 = new Image();

image3.onload = function () {

    var polyTe = new Konva.Line({
        points: [812, 354, 702, 458, 860, 818, 1032, 876, 1322, 482],
        fillPatternImage: image3,
        fillPatternOffset: {
            x: 130,
            y: 210
        },
        fillPatternScale: {
            x: 1.2,
            y: 1.2
        },
        closed: true,
        opacity: 0
    });

    layer.add(polyTe);

    // add the layer to the stage
    stage.add(layer);

    var tween = new Konva.Tween({
        node: polyTe,
        duration: 0.2,
        opacity: 1
    });

    polyTe.on('mouseover', function () {
        tween.play();
    });

    polyTe.on('mouseout', function () {
        tween.reverse();
    });

}

var image4 = new Image();

image4.onload = function () {

    var polyTe = new Konva.Line({
        points: [460, 688, 348, 794, 372, 920, 907, 1044, 938, 1004, 858, 820],
        fillPatternImage: image4,
        fillPatternOffset: {
            x: 330,
            y: -100
        },
        fillPatternScale: {
            x: 1,
            y: 1
        },
        closed: true,
        opacity: 0
    });

    layer.add(polyTe);

    // add the layer to the stage
    stage.add(layer);

    var tween = new Konva.Tween({
        node: polyTe,
        duration: 0.2,
        opacity: 1
    });

    polyTe.on('mouseover', function () {
        tween.play();
    });

    polyTe.on('mouseout', function () {
        tween.reverse();
    });

}

var image5 = new Image();

image5.onload = function () {

    var polyTe = new Konva.Line({
        points: [701, 462, 464, 686, 856, 816],
        fillPatternImage: image5,
        fillPatternOffset: {
            x: -50,
            y: 150
        },
        fillPatternScale: {
            x: 0.8,
            y: 0.8
        },
        closed: true,
        opacity: 0
    });

    layer.add(polyTe);

    // add the layer to the stage
    stage.add(layer);

    var tween = new Konva.Tween({
        node: polyTe,
        duration: 0.2,
        opacity: 1
    });

    polyTe.on('mouseover', function () {
        tween.play();
    });

    polyTe.on('mouseout', function () {
        tween.reverse();
    });

}

var image6 = new Image();

image6.onload = function () {

    var polyTe = new Konva.Line({
        points: [812, 350, 1062, 114, 908, 0, 676, 0, 533, 68, 636, 308],
        fillPatternImage: image6,
        fillPatternOffset: {
            x: 115,
            y: 70
        },
        fillPatternScale: {
            x: 1.2,
            y: 1.2
        },
        closed: true,
        opacity: 0
    });

    layer.add(polyTe);

    // add the layer to the stage
    stage.add(layer);

    var tween = new Konva.Tween({
        node: polyTe,
        duration: 0.2,
        opacity: 1
    });

    polyTe.on('mouseover', function () {
        tween.play();
    });

    polyTe.on('mouseout', function () {
        tween.reverse();
    });

}

/**********************/
/* Sources des images */
/**********************/

image.src = 'images/bowie1.jpg';

image2.src = 'images/bowie4.jpg';

image3.src = 'images/bowie5.jpg';

image4.src = 'images/bowie6.jpg';

image5.src = 'images/bowie2.jpg';

image6.src = 'images/bowie3.jpg';


// Initially resize stage
resizeStage();

// Add event listeners to resize stage
window.addEventListener('resize', resizeStage);
window.addEventListener('orientationchange', resizeStage);