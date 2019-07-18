/* ES5 syntax */
/* I refuse to use semicolons~~~ and you can't make me nyanyanya~~~~ */

(function() {
    'use strict' //this, along with 'function()', are to help prevent conflicts? k

    paper.install(window) //installs Paper.js globally
    paper.setup(document.getElementById('mainCanvas')) //attaches Paper.js to canvas

    /* Fill canvas with circles laid out in a grid -- AUTOMATE the BORING REPETITIVE STUFF */
    var c
    for(var x=25; x<400; x+=50) { //initial condition; ending condition; increment value
        for(var y=25; y<400; y+=50) { //same as above, but for the y-axis
            c = Shape.Circle(x, y, 20)
            c.fillColor = 'green'
        }
    }

    paper.view.draw() //tells Paper.js to actually draw the thing

}())