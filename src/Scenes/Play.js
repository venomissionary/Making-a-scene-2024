class Play extends Phaser.Scene {
    constructor() {
        super('PlayScene')
        console.log('Play: constructor')
    }

    init(stats){
        console.log('Play: init')
        this.HP = stats.HP
        this.EXP = stats.EXP
    }

    create() {
        console.log('Play: create');
        console.log(`HP: ${this.HP} EXP: ${this.EXP} `)

        this.scene.add('statsoverlayScene', StatsOverlay, false)
        this.scene.launch('statsoverlayScene')

        this.scene.launch('statsoverlayScene')
        this.tomato = this.add.image(0,0, 'tomato').setOrigin(-2).setScale(5);

    }

    update() {
        //console.log('Play: update')
       this.tomato.angle++;
    }


}