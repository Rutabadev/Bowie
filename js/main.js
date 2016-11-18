var w = window.innerWidth;
var h = window.innerHeight;

var stage = new Konva.Stage({
    container: 'container',
    width: w,
    height: h
});
var layer = new Konva.Layer();


/*************/
/* Polygones */
/*************/

/* Polygones teco */

var poly = new Konva.Line({
    points: [-1, -1, -1, 48, 2300, 800, 2300, -1],
    stroke: 'rgb(50,50,50)',
    strokeWidth: 1.5,
    closed: true
});


layer.add(poly);

var poly2 = new Konva.Line({
    points: [-1, 48, -1, 300, 1200, 1000, 2300, 800],
    stroke: 'rgb(50,50,50)',
    strokeWidth: 1.5,
    closed: true
});

layer.add(poly2);

var poly3 = new Konva.Line({
    points: [-1, 300, -1, 600, 1200, 1000, 1200, 1000],
    stroke: 'rgb(50,50,50)',
    strokeWidth: 1.5,
    closed: true
});

layer.add(poly3);

/* Polygons verti */

var poly4 = new Konva.Line({
    points: [-1, -1, -1, 1080, 600, 1080, 400, -1],
    stroke: 'rgb(50,50,50)',
    strokeWidth: 1.5,
    closed: true
});

layer.add(poly4);

var poly5 = new Konva.Line({
    points: [400, -1, 600, 1080, 1200, 1080, 600, -1],
    stroke: 'rgb(50,50,50)',
    strokeWidth: 1.5,
    closed: true
});

layer.add(poly5);

var poly6 = new Konva.Line({
    points: [600, -1, 1200, 1080, 1200, 1080, 1500, -1],
    stroke: 'rgb(50,50,50)',
    strokeWidth: 1.5,
    closed: true
});

layer.add(poly6);

var poly7 = new Konva.Line({
    points: [-1, -1, -1, 1080, 150, 1080, 300, -1],
    stroke: 'rgb(50,50,50)',
    strokeWidth: 1.5,
    closed: true
});

layer.add(poly7);

var poly8 = new Konva.Line({
    points: [-1, -1, -1, 1080, 400, 1080, 1000, -1],
    stroke: 'rgb(50,50,50)',
    strokeWidth: 1.5,
    closed: true
});

layer.add(poly8);

var poly9 = new Konva.Line({
    points: [-1, -1, -1, 1080, 500, 1080, 1500, -1],
    stroke: 'rgb(50,50,50)',
    strokeWidth: 1.5,
    closed: true
});

layer.add(poly9);

/********************/
/* Polygones images */
/********************/

var image = new Image();

image.onload = function () {

    var polyTe = new Konva.Line({
        points: [436, 191, 511, 597, 629, 667, 799, 359, 765, 298],
        fillPatternImage: image,
        fillPatternOffset: {
            x: 150,
            y: -180
        },
        closed: true,
        opacity: 0
    });

    layer.add(polyTe);

    // add the layer to the stage
    stage.add(layer);

    var tween = new Konva.Tween({
        node: polyTe,
        duration: 0.5,
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
        points: [823, 318, 801, 359, 937, 605, 1115, 413],
        fillPatternImage: image2,
        fillPatternOffset: {
            x: -60,
            y: -300
        },
        fillPatternScale: {
            x: 0.7,
            y: 0.7
        },
        closed: true,
        opacity: 0
    });

    layer.add(polyTe);

    // add the layer to the stage
    stage.add(layer);

    var tween = new Konva.Tween({
        node: polyTe,
        duration: 0.5,
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

/*image3.onload = function () {

    var polyTe = new Konva.Line({
        points: [1117, 415, 938, 606, 1049, 805, 1275, 805, 1362, 494],
        fillPatternImage: image3,
        fillPatternOffset: {
            x: -60,
            y: -300
        },
        fillPatternScale: {
            x: 0.7,
            y: 0.7
        },
        closed: true,
        opacity: 0
    });

    layer.add(polyTe);

    // add the layer to the stage
    stage.add(layer);

    var tween = new Konva.Tween({
        node: polyTe,
        duration: 0.5,
        opacity: 1
    });

    polyTe.on('mouseover', function () {
        tween.play();
    });

    polyTe.on('mouseout', function () {
        tween.reverse();
    });

}*/


image.src = '../images/bowie1.jpg';

image2.src = '../images/bowie2.jpg';

image3.src = '../images/bowie3.jpg'

/*image.src = 'http://static.wamiz.fr/images/animaux/chiens/large/teckel.jpg';*/