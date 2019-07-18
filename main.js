/* ES5 syntax */
/* I refuse to use semicolons~~~ and you can't make me nyanyanya~~~~ */

(function() {
    'use strict' //this, along with 'function()', are to help prevent conflicts? k

    paper.install(window) //installs Paper.js globally
    paper.setup(document.getElementById('mainCanvas')) //attaches Paper.js to canvas

    /* Allow user input */
    var tool = new Tool() //create tool object (object used by Paper.js for user input)

    var c = Shape.Circle(200, 200, 80)
    c.fillColor = 'black'
    var text = new PointText(200, 200)
    text.justification = 'center'
    text.fillColor = 'white'
    text.fontSize = 20
    text.content = 'hello world'

    tool.onMouseDown = function(event) { //onMouseDown is an EVENT HANDLER
        // var c = Shape.Circle(event.point.x, event.point.y, 20)
        var c = Shape.Circle(event.point, 20) //shorter way of achieving the above
        c.fillColor = 'green'
    }

    paper.view.draw() //tells Paper.js to actually draw the thing

}())