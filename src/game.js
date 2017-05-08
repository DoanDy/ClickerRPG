var game = new Phaser.Game(800, 600, Phaser.AUTO, '');

game.state.add('play', {
    preload: function() {
        this.game.load.image('forest-back', 'assets/parallax_forest_pack/layers/p-FB-trees.png');
        this.game.load.image('forest-front', 'assets/parallax_forest_pack/layers/p-FF-trees.png');
        this.game.load.image('forest-lights', 'assets/parallax_forest_pack/layers/p-FL.png');
        this.game.load.image('forest-middle', 'assets/parallax_forest_pack/layers/p-FM-trees.png');

        game.load.image('skeleton', 'assets/allacrost_enemy_sprites/skeleton.png');
    },
    create: function() {
        var state = this;
        this.background = this.game.add.group();
        //setup each background layers.
        ['forest-back', 'forest-lights', 'forest-middle', 'forest-front']
        .foreEach(function(image) {
          var bg = state.game.add.tileSprite(0, 0, state.game.world.width, state.game.world.height,
          image, '', state.background);
          bg.tileScale.setTo(4,4);
        })

        var skeletonSprite = game.add.sprite(450, 290, 'skeleton');
        skeletonSprite.anchor.setTo(0.5, 0.5);
    },
    render: function() {
        game.debug.text('Adventure Awaits!', 250, 290);
    }
});

game.state.start('play')
