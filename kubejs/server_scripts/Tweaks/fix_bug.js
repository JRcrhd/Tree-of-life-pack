PlayerEvents.loggedIn(event => {
  if (event.player.getHealth().toString() == "NaN") event.player.setHealth(event.player.getMaxHealth())
  if (event.player.getAbsorptionAmount().toString() == "NaN") event.player.setAbsorptionAmount(0)
});

BlockEvents.rightClicked('createmetallurgy:foundry_basin', event => {
    if(event.item === 'create:wrench' && !event.player.isShiftKeyDown()) {
    let face = event.facing
    let blockState = event.block.blockState
    let pos = event.block.pos

    if(face.axis.isVertical()) return

    if(face === blockState.getValue(BlockProperties.FACING_HOPPER)) face = Direction.DOWN

    let state = blockState.setValue(BlockProperties.FACING_HOPPER, face)
    event.level.setBlockAndUpdate(pos, state)
    event.cancel()
    }
});
