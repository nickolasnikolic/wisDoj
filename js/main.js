$(document).ready(function(){
  //set the stage
  var s = Snap('#doj');
  //layout elements
  //img
  var bg = s.image('images/overdose.jpg', 0,-500,1920,1285);
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
  //killers text
  var killers = s.image('images/killers.png', 400, -150, 200, 55);
  //pill bottle
  var bottle = s.image('images/pillBottle.png', 1920, -250, 300, 500);

  //beginning animation
  var phase1 = function(){
    pain.attr({opacity: 0});

    pain.animate({
      opacity: 1
    },1000);
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

  //everything in the first 5 seconds
  var phase4 = function(){
    //set animation of the background image
    var bgMatrix = new Snap.Matrix();
    bgMatrix.scale( 0.3 );
    bgMatrix.translate(-500,-300);
    bg.animate({
      transform: bgMatrix
    }, 3000);
  };
  var phase5 = function(){
    var bottleMatrix = new Snap.Matrix();
    bottleMatrix.scale( 0.15 );
    bottleMatrix.translate( 600, 275 );

    bottle.animate({
      transform: bottleMatrix
    },3000);
  };
  var phase6 = function(){};

  phase1();
  setTimeout(phase2, 5000);
  setTimeout(phase3, 10000);
  setTimeout(phase4, 12000);
  setTimeout(phase5, 15000);
});
