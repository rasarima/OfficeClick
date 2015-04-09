/**
 * Created by Rafael on 29/01/15.
 */
var game = new Phaser.Game(1200, 656, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });
function preload() {
    game.load.image('Queesse!', '../img/queesso.jpg');
    game.load.image('bg-principal', '../img/bg.png');
    game.load.image('mesa', '../img/mesa.png');
    game.load.image('pc', '../img/pc.png');
    game.load.image('tel', '../img/tel.png');
}
var pc;
var mesa;
var tel;

function create() {

    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen
    game.add.sprite(0, 0, 'bg-principal');
    game.add.sprite(160, 388, 'mesa');

    tel = game.add.sprite(185, 449, 'tel');
    tel.inputEnabled = true;
    tel.events.onInputDown.add(ltnTel,this);

    pc = game.add.sprite(381, 327, 'pc');
    pc.inputEnabled = true;
    pc.anchor.set(0,0);
    pc.events.onInputDown.add(ltnPc,this);
}

function ltnTel(){
    menu-telefone-policias
}
function ltnPc(){
    console.log('é')
}