$(document).ready(function(){

  $('#container').click(function(){
    window.location = 'http://example.com';
  });

  //set the stage
  var s = Snap('#doj');
  //layout elements
  //img
  var bg = s.image('images/overdose.jpg', -200,-100,1920/3.2,1285/3.2);

  //white background mask
  var rectangle = s.rect( 300, 0, 300, 250);
  rectangle.attr({fill: '#fff'});

  //pill bottle
  var bottle = s.image('images/pillBottle.png', 300, 20, 150, 275);

  //dots
  var dot1 = s.image('images/dot.png', 150, -150, 25, 25);
  var dot2 = s.image('images/dot.png', 180, -150, 25, 25);
  var dot3 = s.image('images/dot.png', 210, -150, 25, 25);
  var dot4 = s.image('images/dot.png', 240, -150, 25, 25);

  //pain text
  var pain = s.image('images/pain.png', 15, 75, 130, 55);
  pain.attr({opacity: 0});

  //killers text
  var killers = s.image('images/killers.png', 15, 350, 200, 55);

  //prescription text
  var prescription = s.image('images/prescription.png', 103, -200, 193, 89);

  //prescription text
  var deaths = s.image('images/deaths.png', 103, -200, 191, 124);

  var pledge = s.image('images/pledge.png', 15, 165, 74, 65);
  pledge.attr({opacity: 0});

  var reality = s.image('images/reality.png', 160, -250, 140, 127);

  var prevent = s.image('images/prevent.png', 1920/2, 17, 199, 64);

  //beginning animation
  var phase1 = function(){
    pain.animate({
      opacity: 1
    },3000);
  };

  var phase2 = function(){
    dot1.animate({ y: 103 }, 500, mina.bounce );
    dot2.animate({ y: 103 }, 750, mina.bounce );
    dot3.animate({ y: 103 }, 1000, mina.bounce );
    dot4.animate({ y: 103 }, 1250, mina.bounce );
  };

  var phase3 = function(){
    killers.animate({ y: 150 },550, mina.easeout);
    bottle.animate({ x: 200 },1300, mina.easein);
  };

  var phase4 = function(){
    rectangle.animate({x: 200}, 1000);

    var bottleMatrix2 = new Snap.Matrix();
    bottleMatrix2.scale( 0.45 );
    bottleMatrix2.translate( 280, 230);

    bottle.animate({
      transform: bottleMatrix2
    },1500, mina.easeout);

    //set animation of the background image
    var bgMatrix = new Snap.Matrix();
    //bgMatrix.scale( 0.8 );
    bgMatrix.translate(-10,80);
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
    rectangle.animate({x: 100}, 1000, mina.easein );
    bg.animate({ x: -300 }, 1500, mina.easeout);

    prescription.animate({y:35}, 400, mina.easein);
  };
  var phase6 = function(){
    prescription.animate({y:-250}, 500, mina.easeout);
    deaths.animate({y:35}, 400, mina.easein);
  };
  var phase7 = function(){
    deaths.animate({y:-250}, 350, mina.easeout);
    bottle.animate({x: -63}, 500);
  };

  var phase8 = function(){
    reality.animate({y:120}, 600, mina.easeout);
    prevent.animate({x:99}, 800, mina.easeout);
    pledge.animate({opacity: 1}, 4000, mina.easeout);
  };

  var phase9 = function(){
    pledge.animate({opacity:0},3250, mina.easeinout);
  };

  phase1();
  setTimeout(phase2, 3000);
  setTimeout(phase3, 4000);
  setTimeout(phase4, 5000);
  setTimeout(phase5, 5500);
  setTimeout(phase6, 13000);
  setTimeout(phase7, 19000);
  setTimeout(phase8, 22000);
  //setTimeout(phase9, 21000);
});
