TweenMax.to(document.getElementsByClassName("curved"), 3, {
    bezier:{
        curviness:1.25,
        values:[
            {x:100, y:250},
            {x:200, y:0},
            {x:300, y:100}
        ], autoRotate: true
    }, ease:Power1.easeInOut, repeat: -1, yoyo: true
});


