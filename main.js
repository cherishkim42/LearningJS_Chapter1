/* ES5 syntax */

(function() {
    'use strict' //this, along with 'function()', are to help prevent conflicts? k

    paper.install(window) //installs Paper.js globally
    paper.setup(document.getElementById('mainCanvas')); //attaches Paper.js to canvas

    //TODO

    paper.view.draw() //tells Paper.js to actually draw the thing

}())