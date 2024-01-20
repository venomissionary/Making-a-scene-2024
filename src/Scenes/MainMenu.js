class Mainmenu extends Phaser.Scene {
    constructor() {
        super('mainmenuScene')
        console.log('MainMenu: constructor')
    }

    init() {
        console.log('MainMenu: init')
        this.HP = 100
        this.EXP = 0
        console.log(`HP: ${this.HP} EXP: ${this.EXP} `)
    }

    preload() {
        console.log('MainMenu: preload')
        this.load.path = './Assets/img/'
        this.load.image('tomato', 'tomato.png')
        
    }

    create() {
        console.log('MainMenu: create');

        let playerStats = {
            HP: this.HP,
            EXP: this.EXP
        }
        this.scene.start('PlayScene', playerStats);
    }
}