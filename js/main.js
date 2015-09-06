$(document).ready(function(){
  //set the stage
  var s = Snap('#doj');
  //layout elements
  //img
  var bg = s.image('images/overdose.jpg', 0,-300,1920/2,1285/2);
  //dots
  var dot1 = s.image('images/dot.png', 150, -150, 35, 35);
  var dot2 = s.image('images/dot.png', 180, -150, 35, 35);
  var dot3 = s.image('images/dot.png', 210, -150, 35, 35);
  var dot4 = s.image('images/dot.png', 240, -150, 35, 35);
  var dot5 = s.image('images/dot.png', 270, -150, 35, 35);
  var dot6 = s.image('images/dot.png', 300, -150, 35, 35);
  var dot7 = s.image('images/dot.png', 330, -150, 35, 35);
  var dot8 = s.image('images/dot.png', 360, -150, 35, 35);
  //pain text
  var pain = s.image('images/pain.png', 15, 15, 130, 55);

  //pill bottle
  var bottle = s.image('images/pillBottle.png', 1920/2, -250, 300, 500);

  //killers text
  var killers = s.image('images/killers.png', 400, -150, 200, 55);

  //prescription text
  var prescription = s.image('images/prescription.png', 1920/2, 0, 356, 85);

  //prescription text
  var deaths = s.image('images/deaths.png', 1920/2, 0, 356, 85);

  //beginning animation
  var phase1 = function(){
    pain.attr({opacity: 0});

    pain.animate({
      opacity: 1
    },3000);
  };

  var phase2 = function(){
    dot1.animate({ y: 30 }, 2000, mina.elastic );
    dot2.animate({ y: 30 }, 5000, mina.elastic );
    dot3.animate({ y: 30 }, 4000, mina.elastic );
    dot4.animate({ y: 30 }, 5000, mina.elastic );
    dot5.animate({ y: 30 }, 3000, mina.elastic );
    dot6.animate({ y: 30 }, 1000, mina.elastic );
    dot7.animate({ y: 30 }, 3000, mina.elastic );
    dot8.animate({ y: 30 }, 1000, mina.elastic );
  };

  var phase3 = function(){
    killers.animate({
      y: 15
    },1000);
  };

  var phase4 = function(){
    //set animation of the background image
    var bgMatrix = new Snap.Matrix();
    bgMatrix.scale( 0.3 );
    bgMatrix.translate(-150,150);
    bg.animate({
      transform: bgMatrix
    }, 3000);

    pain.animate({
      x: -3000
    },3000);

    killers.animate({ x: -3000 }, 3000 );

    dot1.animate({ x: -3000 }, 3000 );
    dot2.animate({ x: -3000 }, 3000 );
    dot3.animate({ x: -3000 }, 3000 );
    dot4.animate({ x: -3000 }, 3000 );
    dot5.animate({ x: -3000 }, 3000 );
    dot6.animate({ x: -3000 }, 3000 );
    dot7.animate({ x: -3000 }, 3000 );
    dot8.animate({ x: -3000 }, 3000 );

    var bottleMatrix = new Snap.Matrix();
    bottleMatrix.scale( 0.175 );
    bottleMatrix.translate( 425, 270 );

    bottle.animate({
      transform: bottleMatrix
    },3000);
  };
  var phase5 = function(){
    prescription.animate({x:300}, 2000);
  };
  var phase6 = function(){
    prescription.animate({x:3000}, 2000);
    deaths.animate({x:300}, 3000);
  };

  phase1();
  setTimeout(phase2, 5000);
  setTimeout(phase3, 10000);
  setTimeout(phase4, 12000);
  setTimeout(phase5, 15000);
  setTimeout(phase6, 18000);
});
