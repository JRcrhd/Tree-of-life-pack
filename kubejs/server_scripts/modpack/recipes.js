ServerEvents.recipes(treeoflife => {
    treeoflife.smithing('kubejs:point_malkuth','kubejs:template_assiah','kubejs:alchemy_black','kubejs:dimension_alloy_overworld');
    treeoflife.smithing('3x kubejs:point_malkuth','kubejs:template_yetzirah','kubejs:alchemy_white','kubejs:dimension_alloy_nether');
    treeoflife.smithing('9x kubejs:point_malkuth','kubejs:template_beriah','kubejs:alchemy_yellow','kubejs:dimension_alloy_the_end');
    treeoflife.smithing('27x kubejs:point_malkuth','kubejs:template_atziluth','kubejs:alchemy_red','kubejs:dimension_alloy_aether');

    treeoflife.smithing('kubejs:point_yesod','kubejs:template_yetzirah','kubejs:point_malkuth','tarotcards:the_world');
    treeoflife.smithing('kubejs:point_hod','kubejs:template_yetzirah','kubejs:point_malkuth','tarotcards:judgement');
    treeoflife.smithing('kubejs:point_netzach','kubejs:template_yetzirah','kubejs:point_malkuth','tarotcards:the_moon');
    treeoflife.smithing('kubejs:point_hod','kubejs:template_yetzirah','kubejs:point_yesod','tarotcards:the_sun');
    treeoflife.smithing('kubejs:point_netzach','kubejs:template_yetzirah','kubejs:point_yesod','tarotcards:the_star');
    treeoflife.smithing('kubejs:point_netzach','kubejs:template_yetzirah','kubejs:point_hod','tarotcards:the_tower');
    treeoflife.smithing('kubejs:point_hod','kubejs:template_yetzirah','kubejs:point_netzach','tarotcards:the_tower');
	
	treeoflife.smithing('kubejs:point_tiphareth','kubejs:template_beriah','kubejs:point_yesod','tarotcards:temperance');
	treeoflife.smithing('kubejs:point_tiphareth','kubejs:template_beriah','kubejs:point_netzach','tarotcards:death');
	treeoflife.smithing('kubejs:point_tiphareth','kubejs:template_beriah','kubejs:point_hod','tarotcards:the_devil');
	treeoflife.smithing('kubejs:point_geburah','kubejs:template_beriah','kubejs:point_hod','tarotcards:the_hanged_man');
	treeoflife.smithing('kubejs:point_geburah','kubejs:template_beriah','kubejs:point_tiphareth','tarotcards:justice');
	treeoflife.smithing('kubejs:point_chesed','kubejs:template_beriah','kubejs:point_netzach','tarotcards:wheel_of_fortune');
	treeoflife.smithing('kubejs:point_chesed','kubejs:template_beriah','kubejs:point_tiphareth','tarotcards:the_hermit');
	treeoflife.smithing('kubejs:point_chesed','kubejs:template_beriah','kubejs:point_geburah','tarotcards:strength');
	treeoflife.smithing('kubejs:point_geburah','kubejs:template_beriah','kubejs:point_chesed','tarotcards:strength');
	
	treeoflife.smithing('kubejs:point_binah','kubejs:template_atziluth','kubejs:point_geburah','tarotcards:the_chariot');
	treeoflife.smithing('kubejs:point_binah','kubejs:template_atziluth','kubejs:point_tiphareth','tarotcards:the_lovers');
	treeoflife.smithing('kubejs:point_chokmah','kubejs:template_atziluth','kubejs:point_chesed','tarotcards:the_hierophant');
	treeoflife.smithing('kubejs:point_chokmah','kubejs:template_atziluth','kubejs:point_tiphareth','tarotcards:the_emperor');
	treeoflife.smithing('kubejs:point_kether','kubejs:template_atziluth','kubejs:point_tiphareth','tarotcards:the_high_priestess');
	treeoflife.smithing('kubejs:point_kether','kubejs:template_atziluth','kubejs:point_binah','tarotcards:the_magician');
	treeoflife.smithing('kubejs:point_kether','kubejs:template_atziluth','kubejs:point_chokmah','tarotcards:the_fool');

	treeoflife.shaped('kubejs:template_assiah',
		[
			' A ',
			'ABA',
			' A '
		],
		{
			A: 'apotheosis:uncommon_material',
			B: '#minecraft:trim_templates'
		}
	);

	treeoflife.shaped('kubejs:template_yetzirah',
		[
			' A ',
			'ABA',
			' A '
		],
		{
			A: 'apotheosis:rare_material',
			B: '#minecraft:trim_templates'
		}
	);

	treeoflife.shaped('kubejs:template_beriah',
		[
			' A ',
			'ABA',
			' A '
		],
		{
			A: 'apotheosis:apic_material',
			B: '#minecraft:trim_templates'
		}
	);

	treeoflife.shaped('kubejs:template_atziluth',
		[
			' A ',
			'ABA',
			' A '
		],
		{
			A: 'apotheosis:mythic_material',
			B: '#minecraft:trim_templates'
		}
	);

    treeoflife.recipes.create.sequenced_assembly([
        Item.of('kubejs:dimension_alloy_overworld').withChance(1.0)
    ],'kubejs:earth_alloy_shard',[
        treeoflife.recipes.createFilling('kubejs:earth_alloy_shard',['kubejs:earth_alloy_shard',Fluid.of('kubejs:witch_fluid').withAmount(500)]),
        treeoflife.recipes.createFilling('kubejs:earth_alloy_shard',['kubejs:earth_alloy_shard',Fluid.of('kubejs:current_fluid').withAmount(500)]),
        treeoflife.recipes.createPressing('kubejs:earth_alloy_shard','kubejs:earth_alloy_shard')
    ])
    .transitionalItem('kubejs:earth_alloy_shard')
    .loops(2);

    treeoflife.recipes.create.sequenced_assembly([
        Item.of('kubejs:dimension_alloy_nether').withChance(1.0)
    ],'kubejs:ember_alloy_shard',[
        treeoflife.recipes.createFilling('kubejs:ember_alloy_shard',['kubejs:ember_alloy_shard',Fluid.of('kubejs:sky_fluid').withAmount(200)]),
        treeoflife.recipes.createFilling('kubejs:ember_alloy_shard',['kubejs:ember_alloy_shard',Fluid.of('kubejs:sunlight_fluid').withAmount(200)]),
        treeoflife.recipes.createPressing('kubejs:ember_alloy_shard','kubejs:ember_alloy_shard')
    ])
    .transitionalItem('kubejs:ember_alloy_shard')
    .loops(2);

    treeoflife.recipes.create.mixing(
        [
            Item.of('kubejs:earth_alloy_shard').withChance(0.95),
            Item.of('kubejs:alchemy_black').withChance(0.05)
        ],
        [
            Fluid.of('kubejs:current_fluid').withAmount(10),
            'kubejs:earth_alloy_shard'
        ]
    )
    .heated();

    treeoflife.recipes.create.mixing(
        [
            Item.of('kubejs:ember_alloy_shard').withChance(0.8),
            Item.of('kubejs:alchemy_white').withChance(0.2)
        ],
        [
            Fluid.of('kubejs:current_fluid').withAmount(10),
            'kubejs:ember_alloy_shard',
			'kubejs:alchemy_black'
        ]
    )
    .heated();

	treeoflife.custom({
		"type": "apotheosis:enchanting",
		"conditions": [{
			"type": "apotheosis:module",
			"module": "enchantment"
		}],
		"input": {
			"tag": "forge:plates/electrum",
		},
		"requirements": {
			"eterna": 25,
			"quanta": 40,
			"arcana": 40
		},
		"max_requirements": {
			"eterna": 50,
			"quanta": 80,
			"arcana": -1
		},
		"result": {
			"item": "kubejs:empty_tarot",
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
			"tag": "forge:plates/electrum",
		},
		"requirements": {
			"eterna": 45,
			"quanta": 90,
			"arcana": 90
		},
		"max_requirements": {
			"eterna": -1,
			"quanta": -1,
			"arcana": -1
		},
		"result": {
			"item": "kubejs:empty_tarot",
			"count": 5
		}
	});

	treeoflife.smithing('tarotcards:judgement','destroy:card_stock','destroy:dynamite','kubejs:empty_tarot');
	treeoflife.smithing('tarotcards:the_moon','enderio:enticing_crystal','enderio:weather_crystal','kubejs:empty_tarot');
	treeoflife.smithing('tarotcards:the_tower','minecraft:netherite_upgrade_smithing_template','minecraft:nether_star','kubejs:empty_tarot');

    treeoflife.recipes.create.sequenced_assembly([
        Item.of('tarotcards:the_world').withChance(1.0)
    ],'kubejs:empty_tarot',[
        treeoflife.recipes.createFilling('kubejs:empty_tarot',['kubejs:empty_tarot',Fluid.of('kubejs:sunlight_fluid').withAmount(100)]),
        treeoflife.custom({"type": "createmetallurgy:grinding","ingredients": [{"item": "empty_tarot"}],"processingTime": 80,"results": [{"item": "empty_tarot"}]}),
        treeoflife.recipes.createPressing('kubejs:empty_tarot','kubejs:empty_tarot'),
		treeoflife.recipes.createDeploying('kubejs:empty_tarot', ['kubejs:empty_tarot', 'create:brass_nugget'])
    ])
    .transitionalItem('kubejs:empty_tarot')
    .loops(1);

	treeoflife.custom({
  		"type": "enderio:slicing",
  		"energy": 20000,
  		"inputs": [
			{
				"tag": "forge:ingots/soularium"
			},
			{
				"item": "kubejs:empty_tarot"
			},
			{
				"tag": "forge:ingots/soularium"
			},
			{
				"item": "enderio:frank_n_zombie"
			},
			{
				"item": "enderio:vibrant_alloy_ingot"
			},
			{
				"item": "enderio:skeletal_contractor"
			}
  		],
  		"output": {
    		"item": "tarotcards:the_star"
  		}
	});

	treeoflife.custom({
  		"type": "goety:cursed_infuser_recipes",
  		"ingredient": {
    		"item": "destroy:nanodiamonds"
  		},
  		"result": "tarotcards:the_sun",
  		"cookingTime": 60
	});

})

LootJS.modifiers((treeoflife) => {
    const modifiers = treeoflife.getGlobalModifiers();
    modifiers.forEach((modifier) => {
        console.log(modifier)
    });
});