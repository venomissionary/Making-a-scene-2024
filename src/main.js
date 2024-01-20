// Code Practice: Making a Scene
// Name: Steven Hernandez   
// Date: 1/17/2024

"use strict"

let config = { 
    type: Phaser.AUTO,
    render: {
        pixelArt: true
    },
    scene: [Mainmenu, Play]
}

let game = new Phaser.Game(config)