ServerEvents.recipes(treeoflife => {
    treeoflife.remove({id: 'minecraft:enchanting_table'});
	treeoflife.shaped(
		Item.of('minecraft:enchanting_table', 1),
		[
			' A ',
			'BCB',
			'DDD'
		],
		{
			A: 'minecraft:book',
			B: 'create:brass_ingot',
			C: 'kubejs:alchemy_black',
			D: 'minecraft:obsidian'
		});
	
	treeoflife.remove({id: 'apotheosis:sigil_of_rebirth'});
	treeoflife.remove({id: 'apotheosis:sigil_of_withdraw'});
	treeoflife.remove({id: 'apotheosis:sigil_of_socketing'});
	treeoflife.remove({id: 'apotheosis:sigil_of_enhancement'});
})