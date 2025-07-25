ServerEvents.recipes(treeoflife => {
	treeoflife.remove({output: 'lightmanscurrency:wallet_nether_star'});
});

LootJS.modifiers((event) => {
    event.removeGlobalModifier("@lightmanscurrency");
});
