$(document).ready(function(){

  //$('#container').click(function(){ window.location = 'http://example.com'; });

  //set the stage
  var s = Snap('#doj');
  //layout elements
  //img
  var bg = s.image('images/overdose.jpg', -450,0,1920/2.14,1285/2.14);
  //dots
  var dot1 = s.image('images/dot.png', 160/15 - 12, -150, 32, 32);
  var dot2 = s.image('images/dot.png', 160/15 * 3.5 - 12, -150, 32, 32);
  var dot3 = s.image('images/dot.png', 160/15 * 6 - 12, -150, 32, 32);
  var dot4 = s.image('images/dot.png', 160/15 * 8.5 - 12, -150, 32, 32);
  var dot5 = s.image('images/dot.png', 160/15 * 11 - 12, -150, 32, 32);
  var dot6 = s.image('images/dot.png', 160/15 * 13.5 - 12, -150, 32, 32);

  //pain text
  var pain = s.image('images/pain.png', 15, 55, 130, 55);
  pain.attr({opacity: 0});

  //pill bottle
  var bottle = s.image('images/pillBottle.png', 18, 600, 200 * 0.6, 400 * 0.6 );

  //killers text
  var killers = s.image('images/killers.png', 0, -150, 200/1.256, 55/1.256);

  //prescription text
  var prescription = s.image('images/prescription.png', 200, 310, 157, 75);

  //deaths text
  var deaths = s.image('images/deaths.png', 200, 310, 157, 75);

  var pledge = s.image('images/pledge.png', 20, 75, 115, 102);
  pledge.attr({opacity: 0});

  var reality = s.image('images/reality.png', 200, 495, 108, 98);

  var prevent = s.image('images/prevent.png', 200, 330, 140, 121);

  //beginning animation
  var phase1 = function(){
    pain.animate({
      opacity: 1
    },3000);
  };

  var phase2 = function(){
    dot1.animate({ y: 324 }, 500, mina.bounce );
    dot2.animate({ y: 324 }, 750, mina.bounce );
    dot3.animate({ y: 324 }, 1000, mina.bounce );
    dot4.animate({ y: 324 }, 1250, mina.bounce );
    dot5.animate({ y: 324 }, 1500, mina.bounce );
    dot6.animate({ y: 324 }, 1600, mina.bounce );
  };

  var phase3 = function(){
    killers.animate({ y: 290 },250, mina.easeout);
  };
  var phase4 = function(){
    bottle.animate({ y: 355 },1000, mina.easein);
  };
  var phase5 = function(){

    //set animation of the background image
    var bgMatrix = new Snap.Matrix();
    bgMatrix.scale( 0.5 );
    bgMatrix.translate(140,-50);
    bg.animate({
      transform: bgMatrix
    }, 1500, mina.easeout);


    var bottleMatrix = new Snap.Matrix();
    bottleMatrix.scale( 0.75 );
    bottleMatrix.translate( 30, 195);

    bottle.animate({
      transform: bottleMatrix
    },1500, mina.easeout);

    pain.animate({
      x: -3000
    },3000, mina.easeout);

    killers.animate({ x: -3000 }, 3000, mina.easeout );

    dot1.animate({ x: -3000 }, 3000, mina.easeout );
    dot2.animate({ x: -3000 }, 3000, mina.easeout );
    dot3.animate({ x: -3000 }, 3000, mina.easeout );
    dot4.animate({ x: -3000 }, 3000, mina.easeout );
    dot5.animate({ x: -3000 }, 3000, mina.easeout );
    dot6.animate({ x: -3000 }, 3000, mina.easeout );
  };
  var phase6 = function(){
    prescription.animate({x:0}, 200, mina.easein);
  };
  var phase7 = function(){
    prescription.animate({x:200}, 200, mina.easeout);
    deaths.animate({x:0}, 200, mina.easein);
  };
  var phase8 = function(){
    deaths.animate({x:200}, 200, mina.easeout);
  };

  var phase9 = function(){

    var bottleMatrix = new Snap.Matrix();
    bottleMatrix.scale( 0.375 );
    bottleMatrix.translate( -9, 979);

    bottle.animate({
      transform: bottleMatrix
    },500, mina.easeout);

    reality.animate({x:50}, 900, mina.easeout);
  };

  var phase10 = function(){
    prevent.animate({x:10}, 250, mina.easein);
    pledge.animate({opacity: 1}, 4000, mina.easeout);
  };

  phase1();
  setTimeout(phase2, 3000);
  setTimeout(phase3, 4000);
  setTimeout(phase4, 5000);
  setTimeout(phase5, 6500);
  setTimeout(phase6, 9000);
  setTimeout(phase7, 12000);
  setTimeout(phase8, 16000);
  setTimeout(phase9, 17000);
  setTimeout(phase10, 18000);
});
