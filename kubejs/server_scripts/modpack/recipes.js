ServerEvents.recipes(treeoflife => {
    treeoflife.smithing('kubejs:point_malkuth', 'kubejs:template_assiah', 'kubejs:alchemy_black', 'kubejs:dimension_alloy_overworld');
    treeoflife.smithing('3x kubejs:point_malkuth', 'kubejs:template_yetzirah', 'kubejs:alchemy_white', 'kubejs:dimension_alloy_nether');
    treeoflife.smithing('9x kubejs:point_malkuth', 'kubejs:template_beriah', 'kubejs:alchemy_yellow', 'kubejs:dimension_alloy_the_end');
    treeoflife.smithing('27x kubejs:point_malkuth', 'kubejs:template_atziluth', 'kubejs:alchemy_red', 'kubejs:dimension_alloy_aether');

    treeoflife.smithing('kubejs:point_yesod', 'kubejs:template_yetzirah', 'kubejs:point_malkuth', 'tarotcards:the_world');
    treeoflife.smithing('kubejs:point_hod', 'kubejs:template_yetzirah', 'kubejs:point_malkuth', 'tarotcards:judgement');
    treeoflife.smithing('kubejs:point_netzach', 'kubejs:template_yetzirah', 'kubejs:point_malkuth', 'tarotcards:the_moon');
    treeoflife.smithing('kubejs:point_hod', 'kubejs:template_yetzirah', 'kubejs:point_yesod', 'tarotcards:the_sun');
    treeoflife.smithing('kubejs:point_netzach', 'kubejs:template_yetzirah', 'kubejs:point_yesod', 'tarotcards:the_star');
    treeoflife.smithing('kubejs:point_netzach', 'kubejs:template_yetzirah', 'kubejs:point_hod', 'tarotcards:the_tower');
    treeoflife.smithing('kubejs:point_hod', 'kubejs:template_yetzirah', 'kubejs:point_netzach', 'tarotcards:the_tower');

    treeoflife.smithing('kubejs:point_tiphareth', 'kubejs:template_beriah', 'kubejs:point_yesod', 'tarotcards:temperance');
    treeoflife.smithing('kubejs:point_tiphareth', 'kubejs:template_beriah', 'kubejs:point_netzach', 'tarotcards:death');
    treeoflife.smithing('kubejs:point_tiphareth', 'kubejs:template_beriah', 'kubejs:point_hod', 'tarotcards:the_devil');
    treeoflife.smithing('kubejs:point_geburah', 'kubejs:template_beriah', 'kubejs:point_hod', 'tarotcards:the_hanged_man');
    treeoflife.smithing('kubejs:point_geburah', 'kubejs:template_beriah', 'kubejs:point_tiphareth', 'tarotcards:justice');
    treeoflife.smithing('kubejs:point_chesed', 'kubejs:template_beriah', 'kubejs:point_netzach', 'tarotcards:wheel_of_fortune');
    treeoflife.smithing('kubejs:point_chesed', 'kubejs:template_beriah', 'kubejs:point_tiphareth', 'tarotcards:the_hermit');
    treeoflife.smithing('kubejs:point_chesed', 'kubejs:template_beriah', 'kubejs:point_geburah', 'tarotcards:strength');
    treeoflife.smithing('kubejs:point_geburah', 'kubejs:template_beriah', 'kubejs:point_chesed', 'tarotcards:strength');

    treeoflife.smithing('kubejs:point_binah', 'kubejs:template_atziluth', 'kubejs:point_geburah', 'tarotcards:the_chariot');
    treeoflife.smithing('kubejs:point_binah', 'kubejs:template_atziluth', 'kubejs:point_tiphareth', 'tarotcards:the_lovers');
    treeoflife.smithing('kubejs:point_chokmah', 'kubejs:template_atziluth', 'kubejs:point_chesed', 'tarotcards:the_hierophant');
    treeoflife.smithing('kubejs:point_chokmah', 'kubejs:template_atziluth', 'kubejs:point_tiphareth', 'tarotcards:the_emperor');
    treeoflife.smithing('kubejs:point_kether', 'kubejs:template_atziluth', 'kubejs:point_tiphareth', 'tarotcards:the_high_priestess');
    treeoflife.smithing('kubejs:point_kether', 'kubejs:template_atziluth', 'kubejs:point_binah', 'tarotcards:the_magician');
    treeoflife.smithing('kubejs:point_kether', 'kubejs:template_atziluth', 'kubejs:point_chokmah', 'tarotcards:the_fool');

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

    treeoflife.recipes.create.mixing(
        [
            Fluid.of('kubejs:witch_fluid')
        ],
        [
            'goety:cursed_ingot',
            '4x create:experience_nugget',
            'minecraft:nautilus_shell',
            '4x #forge:nuggets/zinc'
        ]
    );

    treeoflife.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
            {
                "item": "create_aquatic_ambitions:prismarine_alloy",
                "count": 2
            },
            {
                "item": "createutilities:polished_amethyst"
            },
            {
                "tag": "forge:gems/lapis",
                "count": 3
            },
            {
                "item": "create:pulp"
            },
            {
                "fluid": "createdieselgenerators:crude_oil",
                "amount": 500
            }
        ],
        "processingTime": 400,
        "results": [
            {
                "fluid": "kubejs:current_fluid",
                "amount": 2000
            }
        ]
    });

    treeoflife.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
            {
                "item": "create_aquatic_ambitions:prismarine_alloy",
                "count": 2
            },
            {
                "item": "createutilities:polished_amethyst"
            },
            {
                "tag": "forge:gems/lapis",
                "count": 3
            },
            {
                "item": "create:pulp"
            },
            {
                "fluid": "pneumaticcraft:oil",
                "amount": 500
            }
        ],
        "processingTime": 400,
        "results": [
            {
                "fluid": "kubejs:current_fluid",
                "amount": 2000
            }
        ]
    });

    treeoflife.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
            {
                "item": "create_aquatic_ambitions:prismarine_alloy",
                "count": 2
            },
            {
                "item": "createutilities:polished_amethyst"
            },
            {
                "tag": "forge:gems/lapis",
                "count": 3
            },
            {
                "item": "create:pulp"
            },
            {
                "fluid": "destroy:crude_oil",
                "amount": 500
            }
        ],
        "processingTime": 400,
        "results": [
            {
                "fluid": "kubejs:current_fluid",
                "amount": 2000
            }
        ]
    });

    treeoflife.recipes.create.compacting(
        [
            'kubejs:earth_alloy_shard',
        ],
        [
            '2x minecraft:grass_block',
            'minecraft:obsidian',
            '#forge:ingots/nickel',
            '#forge:ingots/lead',
            '2x #forge:ingots/copper'
        ]
    )
        .heated();

    treeoflife.recipes.create.compacting(
        [
            'kubejs:ember_alloy_shard',
        ],
        [
            '2x create:cinder_flour',
            'rainbowcompound:blazeite_ingot',
            '#forge:nuggets/chromium',
            '#forge:ingots/sodium'
        ]
    )
        .superheated();

    treeoflife.custom({
        "type": "createdieselgenerators:distillation",
        "ingredients": [
            {
                "amount": 100,
                "fluid": "kubejs:current_fluid"
            }
        ],
        "heatRequirement": "heated",
        "processingTime": 100,
        "results": [
            {
                "amount": 80,
                "fluid": "kubejs:dim_sky_fluid"
            },
            {
                "amount": 10,
                "fluid": "kubejs:witch_fluid"
            },
            {
                "amount": 2,
                "fluid": "kubejs:sky_fluid"
            }
        ]
    });

    treeoflife.recipes.create.mixing(
        [
            Item.of('minecraft:nether_star'),
            Fluid.of('kubejs:dark_light_fluid').withAmount(50)
        ],
        [
            'minecraft:nether_star',
            'enderio:soularium_ingot'
        ]
    )
        .heated();

    treeoflife.custom({
        "type": "createdieselgenerators:distillation",
        "ingredients": [
            {
                "amount": 100,
                "fluid": "kubejs:dark_light_fluid"
            }
        ],
        "heatRequirement": "heated",
        "processingTime": 100,
        "results": [
            {
                "amount": 40,
                "fluid": "kubejs:dim_sky_fluid"
            },
            {
                "amount": 20,
                "fluid": "kubejs:current_fluid"
            },
            {
                "amount": 5,
                "fluid": "kubejs:sunlight_fluid"
            }
        ]
    });

    treeoflife.custom({
        "type": "createdieselgenerators:distillation",
        "ingredients": [
            {
                "amount": 100,
                "fluid": "kubejs:dim_sky_fluid"
            }
        ],
        "heatRequirement": "heated",
        "processingTime": 100,
        "results": [
            {
                "amount": 95,
                "fluid": "kubejs:dim_sky_fluid"
            },
            {
                "amount": 1,
                "fluid": "kubejs:sky_fluid"
            }
        ]
    });

    treeoflife.recipes.create.sequenced_assembly([
        Item.of('kubejs:dimension_alloy_overworld').withChance(1.0)
    ], 'kubejs:earth_alloy_shard', [
        treeoflife.recipes.createFilling('kubejs:earth_alloy_shard', ['kubejs:earth_alloy_shard', Fluid.of('kubejs:witch_fluid').withAmount(500)]),
        treeoflife.recipes.createFilling('kubejs:earth_alloy_shard', ['kubejs:earth_alloy_shard', Fluid.of('kubejs:current_fluid').withAmount(500)]),
        treeoflife.recipes.createPressing('kubejs:earth_alloy_shard', 'kubejs:earth_alloy_shard')
    ])
        .transitionalItem('kubejs:earth_alloy_shard')
        .loops(2);

    treeoflife.recipes.create.sequenced_assembly([
        Item.of('kubejs:dimension_alloy_nether').withChance(1.0)
    ], 'kubejs:ember_alloy_shard', [
        treeoflife.recipes.createFilling('kubejs:ember_alloy_shard', ['kubejs:ember_alloy_shard', Fluid.of('kubejs:sky_fluid').withAmount(200)]),
        treeoflife.recipes.createFilling('kubejs:ember_alloy_shard', ['kubejs:ember_alloy_shard', Fluid.of('kubejs:sunlight_fluid').withAmount(200)]),
        treeoflife.recipes.createPressing('kubejs:ember_alloy_shard', 'kubejs:ember_alloy_shard')
    ])
        .transitionalItem('kubejs:ember_alloy_shard')
        .loops(2);

    treeoflife.recipes.create.sequenced_assembly([
        Item.of('kubejs:dimension_alloy_the_end').withChance(1.0)
    ], 'kubejs:void_alloy_shard', [
        treeoflife.recipes.createFilling('kubejs:void_alloy_shard', ['kubejs:void_alloy_shard', Fluid.of('kubejs:void_fluid').withAmount(200)]),
        treeoflife.recipes.createFilling('kubejs:void_alloy_shard', ['kubejs:void_alloy_shard', Fluid.of('kubejs:chaos_fluid').withAmount(200)]),
        treeoflife.recipes.createPressing('kubejs:void_alloy_shard', 'kubejs:void_alloy_shard')
    ])
        .transitionalItem('kubejs:void_alloy_shard')
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
            Fluid.of('kubejs:sky_fluid').withAmount(10),
            'kubejs:ember_alloy_shard',
            'kubejs:alchemy_black'
        ]
    )
        .heated();

    treeoflife.recipes.create.mixing(
        [
            Item.of('kubejs:void_alloy_shard').withChance(0.6),
            Item.of('kubejs:alchemy_yellow').withChance(0.4)
        ],
        [
            Fluid.of('kubejs:void_fluid').withAmount(10),
            'kubejs:void_alloy_shard',
            'kubejs:alchemy_white'
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

    treeoflife.smithing('tarotcards:judgement', 'destroy:card_stock', 'destroy:dynamite', 'kubejs:empty_tarot');
    treeoflife.smithing('tarotcards:the_moon', 'enderio:enticing_crystal', 'enderio:weather_crystal', 'kubejs:empty_tarot');
    treeoflife.smithing('tarotcards:the_tower', 'minecraft:netherite_upgrade_smithing_template', 'minecraft:nether_star', 'kubejs:empty_tarot');

    treeoflife.recipes.create.sequenced_assembly([
        Item.of('tarotcards:the_world').withChance(1.0)
    ], 'kubejs:empty_tarot', [
        treeoflife.recipes.createFilling('kubejs:empty_tarot', ['kubejs:empty_tarot', Fluid.of('kubejs:sunlight_fluid').withAmount(100)]),
        treeoflife.custom({ "type": "createmetallurgy:grinding", "ingredients": [{ "item": "empty_tarot" }], "processingTime": 80, "results": [{ "item": "empty_tarot" }] }),
        treeoflife.recipes.createPressing('kubejs:empty_tarot', 'kubejs:empty_tarot'),
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

    treeoflife.smithing('tarotcards:strength', 'apotheosis:infused_breath', 'minecraft:dragon_egg', 'kubejs:empty_tarot');
    treeoflife.smithing('tarotcards:wheel_of_fortune', 'create:refined_radiance', 'enderio:prescient_crystal', 'kubejs:empty_tarot');
    treeoflife.smithing('tarotcards:the_hanged_man', 'create:shadow_steel', 'enderio:prescient_crystal', 'kubejs:empty_tarot');

    treeoflife.custom({
        type: "ae2:transform",
        circumstance: {
            type: "fluid",
            tag: "kubejs:stable_vibrant_fluix",
        },
        ingredients: [
            {
                item: "mekanism:teleportation_core",
            },
            {
                item: "ae2:singularity",
            },
            {
                item: "kubejs:empty_tarot",
            },
        ],
        result: {
            count: 1,
            item: "tarotcards:temperance",
        },
    });

    treeoflife.custom({
        "type": "ae2:charger",
        "ingredient": {
            "item": "kubejs:empty_tarot"
        },
        "result": {
            "item": "tarotcards:the_hermit"
        }
    });

    treeoflife.shaped('tarotcards:justice', [
        'AAA',
        'AXA',
        'AAA'
    ], {
        X: 'kubejs:empty_tarot',
        A: '#mekanism:crystals'
    });

    treeoflife.custom({
        type: "mekanism:compressing",
        chemicalInput: { amount: 10, gas: "mekanism:spent_nuclear_waste" },
        itemInput: { ingredient: { item: "kubejs:empty_tarot" } },
        output: { item: "tarotcards:the_devil" },
    });

    treeoflife.recipes.create.sequenced_assembly([
        Item.of('tarotcards:death').withChance(25),
        Item.of('goety:unholy_blood').withChance(5)
    ], 'kubejs:empty_tarot', [
        treeoflife.recipes.createDeploying('kubejs:empty_tarot', ['kubejs:empty_tarot', 'goety:unholy_blood']),
        treeoflife.recipes.createFilling('kubejs:empty_tarot', ['kubejs:empty_tarot', Fluid.of('kubejs:chaos_fluid').withAmount(50)]),
        treeoflife.recipes.createPressing('kubejs:empty_tarot', 'kubejs:empty_tarot'),
        treeoflife.recipes.createFilling('kubejs:empty_tarot', ['kubejs:empty_tarot', Fluid.of('kubejs:chaos_fluid').withAmount(50)]),
        treeoflife.recipes.createPressing('kubejs:empty_tarot', 'kubejs:empty_tarot'),
        treeoflife.recipes.createFilling('kubejs:empty_tarot', ['kubejs:empty_tarot', Fluid.of('kubejs:chaos_fluid').withAmount(50)]),
        treeoflife.recipes.createPressing('kubejs:empty_tarot', 'kubejs:empty_tarot')
    ])
        .transitionalItem('kubejs:empty_tarot')
        .loops(1);

    treeoflife.custom({
        "type": "createdieselgenerators:distillation",
        "ingredients": [
            {
                "amount": 100,
                "fluid": "minecraft:water"
            }
        ],
        "heatRequirement": "heated",
        "processingTime": 100,
        "results": [
            {
                "amount": 1,
                "fluid": "kubejs:current_fluid"
            },
            {
                "amount": 90,
                "fluid": "kubejs:clear_water_tier_1"
            }
        ]
    });

    treeoflife.custom({
        "type": "mekanism:reaction",
        "duration": 900,
        "fluidInput": {
            "amount": 1000,
            "fluid": "kubejs:clear_water_tier_1"
        },
        "gasInput": {
            "amount": 10,
            "gas": "mekanism:hydrogen"
        },
        "itemInput": {
            "ingredient": {
                "item": "mekanism:dust_charcoal",
                "count": 2
            }
        },
        "gasOutput": {
            "amount": 900,
            "gas": "kubejs:clear_water_tier_2_vapor"
        },
        "itemOutput": {
            "count": 1,
            "item": "mekanism:dust_coal"
        }
    });

    treeoflife.custom({
        "type": "mekanism:rotary",
        "fluidInput": { "amount": 1, "fluid": "kubejs:clear_water_tier_2" },
        "fluidOutput": { "amount": 1, "fluid": "kubejs:clear_water_tier_2" },
        "gasInput": { "amount": 1, "gas": "kubejs:clear_water_tier_2_vapor" },
        "gasOutput": { "amount": 1, "gas": "kubejs:clear_water_tier_2_vapor" }
    });

    treeoflife.recipes.createFilling('minecraft:dragon_egg', ['kubejs:empty_dragon_egg', Fluid.of('kubejs:dragon_egg_fluid').withAmount(1000)]);
    treeoflife.recipes.create.compacting(['kubejs:empty_dragon_egg', Fluid.of('kubejs:dragon_egg_fluid').withAmount(1000)], 'minecraft:dragon_egg');

    treeoflife.custom({
        "type": "mekanism:separating",
        "input": {
            "amount": 5,
            "fluid": "kubejs:dragon_egg_fluid"
        },
        "leftGasOutput": {
            "amount": 4,
            "gas": "kubejs:magicless_dragon_egg_gas"
        },
        "rightGasOutput": {
            "amount": 1,
            "gas": "kubejs:chaos_gas"
        }
    });

    treeoflife.custom({
        type: "mekanism:rotary",
        fluidInput: { amount: 1, fluid: "kubejs:magicless_dragon_egg_fluid" },
        fluidOutput: { amount: 1, fluid: "kubejs:magicless_dragon_egg_fluid" },
        gasInput: { amount: 1, gas: "kubejs:magicless_dragon_egg_gas" },
        gasOutput: { amount: 1, gas: "kubejs:magicless_dragon_egg_gas" }
    });

    treeoflife.custom({
        type: "mekanism:rotary",
        fluidInput: { amount: 1, fluid: "kubejs:chaos_fluid" },
        fluidOutput: { amount: 1, fluid: "kubejs:chaos_fluid" },
        gasInput: { amount: 1, gas: "kubejs:chaos_gas" },
        gasOutput: { amount: 1, gas: "kubejs:chaos_gas" }
    });

    treeoflife.recipes.create.filling('kubejs:dragon_breath_bucket', [Fluid.of('kubejs:dragon_breath').withAmount(1000), 'minecraft:bucket']);
    treeoflife.recipes.create.filling('minecraft:dragon_breath', [Fluid.of('kubejs:dragon_breath').withAmount(250), 'minecraft:glass_bottle']);

    treeoflife.custom({
        "type": "create:emptying",
        "ingredients": [
            {
                "item": "minecraft:dragon_breath"
            }
        ],
        "results": [
            {
                "fluid": "kubejs:dragon_breath",
                "amount": 250
            },
            {
                "item": "minecraft:glass_bottle"
            }
        ]
    });

    treeoflife.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "superheated",
        "ingredients": [
            {
                "amount": 80,
                "fluid": "kubejs:magicless_dragon_egg_fluid"
            },
            {
                "amount": 20,
                "fluid": "kubejs:dragon_breath"
            }
        ],
        "processingTime": 40,
        "results": [
            {
                "amount": 100,
                "fluid": "kubejs:dragon_egg_fluid"
            }
        ]
    });

    treeoflife.recipes.create.mixing(
        [
            Item.of('kubejs:void_alloy_shard').withChance(1.0)
        ],
        [
            Fluid.of('kubejs:dragon_breath').withAmount(100),
            '12x #forge:dusts/end_stone',
            '16x ae2:sky_dust',
            'mekanism:reprocessed_fissile_fragment'
        ]
    )
    .heated();

    treeoflife.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "superheated",
        "ingredients": [
            {
                "amount": 10,
                "fluid": "kubejs:sky_fluid"
            },
            {
                "amount": 40,
                "fluid": "kubejs:dragon_breath"
            }
        ],
        "processingTime": 40,
        "results": [
            {
                "amount": 20,
                "fluid": "kubejs:void_fluid"
            }
        ]
    });

})

LootJS.modifiers((treeoflife) => {
    const modifiers = treeoflife.getGlobalModifiers();
    modifiers.forEach((modifier) => {
        console.log(modifier)
    });
});