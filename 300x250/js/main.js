$(document).ready(function(){

  //$('#container').click(function(){ window.location = 'http://example.com'; });

  //set the stage
  var s = Snap('#doj');
  //layout elements
  //img
  var bg = s.image('images/overdose.jpg', -200,-100,1920/3.2,1285/3.2);

  //white background mask
  var rectangle = s.rect( 300, 0, 300, 250);
  rectangle.attr({fill: '#fff'});

  //pill bottle
  var bottle = s.image('images/pillBottle.png', 300, -20, 147, 277);

  //dots
  var dot1 = s.image('images/dot.png', 130, -150, 15, 15);
  var dot2 = s.image('images/dot.png', 149, -150, 15, 15);
  var dot3 = s.image('images/dot.png', 168, -150, 15, 15);
  var dot4 = s.image('images/dot.png', 187, -150, 15, 15);

  //pain text
  var pain = s.image('images/pain.png', 5, 45, 130, 55);
  pain.attr({opacity: 0});

  //killers text
  var killers = s.image('images/killers.png', 5, 350, 200, 55);

  //prescription text
  var prescription = s.image('images/prescription.png', 103, -200, 193, 89);

  //prescription text
  var deaths = s.image('images/deaths.png', 103, -200, 191, 124);

  var pledge = s.image('images/pledge.png', 15, 165, 74, 65);
  pledge.attr({opacity: 0});

  var reality = s.image('images/reality.png', 165, -250, 134, 111);

  var prevent = s.image('images/prevent.png', 400, 35, 190, 59);

  //beginning animation
  var phase1 = function(){
    pain.animate({
      opacity: 1
    },2500);
  };

  var phase2 = function(){
    dot1.animate({ y: 80 }, 500, mina.bounce );
    dot2.animate({ y: 80 }, 750, mina.bounce );
    dot3.animate({ y: 80 }, 1000, mina.bounce );
    dot4.animate({ y: 80 }, 1250, mina.bounce );
  };

  var phase3 = function(){
    killers.animate({ y: 100 },550, mina.easeout);
  };

  var phase4 = function(){
    bottle.animate({ x: 170 },1000, mina.easein);
    rectangle.animate({x: 220}, 1500, mina.easein );
  };

  var phase5 = function(){

    var bottleMatrix = new Snap.Matrix();
    bottleMatrix.scale( 0.45 );
    bottleMatrix.translate( 330, 272);

    bottle.animate({
      transform: bottleMatrix
    },1500, mina.easeout);

    //set animation of the background image
    var bgMatrix = new Snap.Matrix();
    bgMatrix.translate(-10,80);
    bg.animate({
      transform: bgMatrix
    }, 1500, mina.easeout);

    pain.animate({x: -3000},3000, mina.easeout);
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
  var phase6 = function(){
    rectangle.animate({x: 100}, 500, mina.easein );
    bg.animate({ x: -300 }, 500, mina.easeout);
  };
  var phase7 = function(){
    prescription.animate({y:35}, 600, mina.easein);
  };
  var phase8 = function(){
    prescription.animate({y:-250}, 500, mina.easeout);
    deaths.animate({y:35}, 400, mina.easein);
  };
  var phase9 = function(){
    deaths.animate({y:-250}, 350, mina.easeout);
    bottle.animate({x: -109}, 1250);
  };

  var phase10 = function(){
    reality.animate({y:128}, 400, mina.easeout);
  };

  var phase11 = function(){
    prevent.animate({x:102}, 550, mina.easeout);
    pledge.animate({opacity: 1}, 4000, mina.easeout);
  };

  phase1();
  setTimeout(phase2, 3000);
  setTimeout(phase3, 4500);
  setTimeout(phase4, 6000);
  setTimeout(phase5, 8000);
  setTimeout(phase6, 10000);
  setTimeout(phase7, 12000);
  setTimeout(phase8, 15550);
  setTimeout(phase9, 17100);
  setTimeout(phase10, 18100);
  setTimeout(phase11, 19600);
});
