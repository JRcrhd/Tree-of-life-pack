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
	treeoflife.remove({id: 'apotheosis:sigil_of_withdrawal'});
	treeoflife.remove({id: 'apotheosis:sigil_of_socketing'});
	treeoflife.remove({id: 'apotheosis:sigil_of_enhancement'});

	treeoflife.custom({
		"type": "apotheosis:enchanting",
		"conditions": [{
			"type": "apotheosis:module",
			"module": "enchantment"
		}],
		"input": {
			"item": "minecraft:smithing_table"
		},
		"requirements": {
			"eterna": 20,
			"quanta": 20,
			"arcana": 20
		},
		"max_requirements": {
			"eterna": 40,
			"quanta": -1,
			"arcana": -1
		},
		"result": {
			"item": "forbidden_arcanus:elementarium",
			"count": 1
		}
	});
})