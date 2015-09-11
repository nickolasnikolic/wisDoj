$(document).ready(function(){

  //$('#container').click(function(){ window.location = 'http://example.com'; });

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
  pain.attr({opacity: 0});

  //pill bottle
  var bottle = s.image('images/pillBottle.png', 1920/2, -120, 160, 280);

  //killers text
  var killers = s.image('images/killers.png', 400, -150, 200, 55);

  //prescription text
  var prescription = s.image('images/prescription.png', 300, -200, 356, 85);

  //prescription text
  var deaths = s.image('images/deaths.png', 300, -200, 356, 85);

  var pledge = s.image('images/pledge.png', 20, 25, 212, 40);
  pledge.attr({opacity: 0});

  var reality = s.image('images/reality.png', 300, -250, 250, 60);

  var prevent = s.image('images/prevent.png', 1920/2, 17, 170, 56);

  var painKillers = s.image('images/painKillers.png', 15, 30, 200, 30);
  painKillers.attr({opacity: 0});

  var takePledge = s.image('images/takePledge.png', 513, 0, 118, 36);
  takePledge.attr({opacity: 0});

  //beginning animation
  var phase1 = function(){
    pain.animate({
      opacity: 1
    },3000);
  };

  var phase2 = function(){
    dot1.animate({ y: 34 }, 500, mina.bounce );
    dot2.animate({ y: 34 }, 750, mina.bounce );
    dot3.animate({ y: 34 }, 1000, mina.bounce );
    dot4.animate({ y: 34 }, 1250, mina.bounce );
    dot5.animate({ y: 34 }, 1500, mina.bounce );
    dot6.animate({ y: 34 }, 1600, mina.bounce );
    dot7.animate({ y: 34 }, 1650, mina.bounce );
    dot8.animate({ y: 34 }, 1700, mina.bounce );
  };

  var phase3 = function(){
    killers.animate({ y: 15 },550, mina.easeout);
    bottle.animate({ x: 585 },700, mina.easein);
  };

  var phase4 = function(){
    var bottleMatrix = new Snap.Matrix();
    bottleMatrix.scale( 0.3 );
    bottleMatrix.translate( 240, 126);

    bottle.animate({
      transform: bottleMatrix
    },1500, mina.easeout);

    //set animation of the background image
    var bgMatrix = new Snap.Matrix();
    bgMatrix.scale( 0.3 );
    bgMatrix.translate(-150,150);
    bg.animate({
      transform: bgMatrix
    }, 1500, mina.easeout);

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
    dot7.animate({ x: -3000 }, 3000, mina.easeout );
    dot8.animate({ x: -3000 }, 3000, mina.easeout );

  };
  var phase5 = function(){
    prescription.animate({y:0}, 200, mina.easein);
  };
  var phase6 = function(){
    prescription.animate({y:250}, 300, mina.easeout);
    deaths.animate({y:0}, 200, mina.easein);
  };
  var phase7 = function(){
    deaths.animate({y:250}, 500, mina.easeout);
  };

  var phase8 = function(){
    reality.animate({y:15}, 600, mina.easeout);
    pledge.animate({opacity: 1}, 4000, mina.easeout);
  };

  var phase9 = function(){
    prevent.animate({x:540}, 600, mina.easeout);
  };

  phase1();
  setTimeout(phase2, 2300);
  setTimeout(phase3, 3000);
  setTimeout(phase4, 4500);
  setTimeout(phase5, 6500);
  setTimeout(phase6, 8380);
  setTimeout(phase7, 10300);
  setTimeout(phase8, 10300);
  setTimeout(phase9, 11800);
});
