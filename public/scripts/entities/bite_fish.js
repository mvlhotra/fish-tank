class BiteFish extends Fish {

  constructor(options) {
    super(options);
    this.surgeSecondsLeft = 0;
    this.maxSurge = 3.0;
    this.surgMult = 2.0;
    this.imageUri = '/images/bite_fish.gif';
  }

  updateOneTick() {
    var delta = this.swimVelocity.scale(5 * PHYSICS_TICK_SIZE_S * (1 + this.surgeSecondsLeft * this.surgMult));
    this.position.addMut(delta);
    this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S;
    if (this.timeUntilSpeedChange < 0) {
      this.makeNewVelocity();
    }
    this.surgeSecondsLeft = Math.max(0, this.surgeSecondsLeft - PHYSICS_TICK_SIZE_S);
  }


  onClick(event) {
    this.surgeSecondsLeft = this.maxSurge;
  }
}
