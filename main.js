/* ES5 syntax */
/* I refuse to use semicolons~~~ and you can't make me nyanyanya~~~~ */

(function() {
    'use strict' //this, along with 'function()', are to help prevent conflicts? k

    paper.install(window) //installs Paper.js globally
    paper.setup(document.getElementById('mainCanvas')) //attaches Paper.js to canvas

    /* Creates a circle object with 3 args: x, y, and radius */
    var c = Shape.Circle(200, 200, 50) //var?? not const??? omg omg omg why no omg
    c.fillColor = 'green'

    paper.view.draw() //tells Paper.js to actually draw the thing

}())