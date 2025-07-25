ServerEvents.recipes(treeoflife => {
	treeoflife.remove({ mod: 'tarotcards' });
});

LootJS.modifiers((event) => {
    event.removeGlobalModifier("@tarotcards");
});
