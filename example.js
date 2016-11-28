/*
This is an animation based on the pioneering work of John Whitney.
You'll be creating three versions.  This first one will serve as
the template for the others.
*/


//define the game functions: preload, create, and update
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', {
    preload: preload,
    create: create,
    update: update
});

function preload() {
    //nothing to see here
}

function create() {
    
}

//the update function uses the tween on game.boldTriangle to reset the texture
//of the appropriate triangle to a bold lineweight; it also resets the lineweight
//on the previously bolded triangle
function update() {
    
}

// this function takes two arguments:
// sideLength represents the length of the triangle's side
// the thickness represents the line weight of the triangle (1 - thin, 5 - bold)
function TriangleTexture(sideLength, thickness) {
    
}
