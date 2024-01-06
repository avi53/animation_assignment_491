class Venom {
    constructor(game) {
    this.game = game;
    this.animator = new Animator(ASSET_MANAGER.getAsset("./venom.png"), -18, 0, 174, 1209, 3, 0.3);
    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 400, 200);
    };
}