ServerEvents.recipes(treeoflife => {
	treeoflife.remove({id: "forbidden_arcanus:quantum_catcher"})
	
	treeoflife.shaped(
		Item.of('forbidden_arcanus:aureal_bottle', 1),
		[
			'BAB',
			'BCB',
			'BAB'
		],
		{
			A: 'minecraft:glowstone',
			B: 'minecraft:glow_ink_sac',
			C: 'minecraft:honey_bottle'
		});

	treeoflife.custom({
		"type": "apotheosis:enchanting",
		"conditions": [{
			"type": "apotheosis:module",
			"module": "enchantment"
		}],
		"input": {
			"item": "cataclysm:cursium_ingot",
		},
		"requirements": {
			"eterna": 45,
			"quanta": 20,
			"arcana": 55
		},
		"max_requirements": {
			"eterna": -1,
			"quanta": 45,
			"arcana": -1
		},
		"result": {
			"item": "forbidden_arcanus:maledictus_pact",
			"count": 1
		}
	});

	treeoflife.custom({
		"type": "apotheosis:enchanting",
		"conditions": [{
			"type": "apotheosis:module",
			"module": "enchantment"
		}],
		"input": {
			"item": "forbidden_arcanus:arcane_dragon_egg",
		},
		"requirements": {
			"eterna": 45,
			"quanta": 50,
			"arcana": 20
		},
		"max_requirements": {
			"eterna": -1,
			"quanta": -1,
			"arcana": 55
		},
		"result": {
			"item": "forbidden_arcanus:divine_pact",
			"count": 1
		}
	});

	treeoflife.remove({id: "forbidden_arcanus:clibano_core"})
	treeoflife.custom({
		"type": "apotheosis:enchanting",
		"conditions": [{
			"type": "apotheosis:module",
			"module": "enchantment"
		}],
		"input": {
			"item": "minecraft:blast_furnace",
		},
		"requirements": {
			"eterna": 45,
			"quanta": 0,
			"arcana": 0
		},
		"max_requirements": {
			"eterna": -1,
			"quanta": 60,
			"arcana": 60
		},
		"result": {
			"item": "forbidden_arcanus:clibano_core",
			"count": 1
		}
	});
	
})