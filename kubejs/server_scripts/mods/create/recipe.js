ServerEvents.recipes(treeoflife => {
    treeoflife.shaped('createdieselgenerators:burner',
        [
            'ABA',
            ' C ',
            'DED'
        ],
        {
            A: 'forbidden_arcanus:obsidian_ingot',
            B: 'forbidden_arcanus:rune',
            C: 'create:shaft',
            D: 'create:andesite_alloy',
            E: 'create:empty_blaze_burner'
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
                "count":2
            },
            {
                "item": "createutilities:polished_amethyst"
            },
            {
                "tag": "forge:gems/lapis",
                "count":3
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
                "count":2
            },
            {
                "item": "createutilities:polished_amethyst"
            },
            {
                "tag": "forge:gems/lapis",
                "count":3
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
                "count":2
            },
            {
                "item": "createutilities:polished_amethyst"
            },
            {
                "tag": "forge:gems/lapis",
                "count":3
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

    treeoflife.custom({
        "type": "createmetallurgy:melting",
        "heatRequirement": "superheated",
        "ingredients": [
            {
                "tag": "forge:obsidian"
            }
        ],
        "processingTime": 40,
        "results": [
            {
                "amount": 810,
                "fluid": "kubejs:molten_obsidian"
            }
        ]
    });

    treeoflife.custom({
        "type": "createmetallurgy:melting",
        "heatRequirement": "heated",
        "ingredients": [
            {
                "item": "enderio:dark_steel_ingot"
            }
        ],
        "processingTime": 40,
        "results": [
            {
                "amount": 90,
                "fluid": "kubejs:molten_dark_steel"
            }
        ]
    });

    treeoflife.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "heated",
        "ingredients": [
            {
                "amount": 90,
                "fluid": "kubejs:molten_obsidian"
            },
            {
                "amount": 10,
                "fluid": "createmetallurgy:molten_steel"
            }
        ],
        "processingTime": 40,
        "results": [
            {
                "amount": 10,
                "fluid": "kubejs:molten_dark_steel"
            }
        ]
    });

    treeoflife.custom({
        "type": "createmetallurgy:casting_in_table",
        "ingredients": [
            {
                "item": "createmetallurgy:graphite_ingot_mold"
            },
            {
                "amount": 90,
                "fluid": "kubejs:molten_dark_steel"
            }
        ],
        "processingTime": 60,
        "result": {
            "item": "enderio:dark_steel_ingot"
        }
    });

    treeoflife.custom({
        "type": "createmetallurgy:casting_in_basin",
        "ingredients": [
            {
                "amount": 810,
                "fluid": "kubejs:molten_dark_steel"
            }
        ],
        "processingTime": 320,
        "result": {
            "item": "enderio:dark_steel_block"
        }
    });

    treeoflife.custom({
        "type": "createmetallurgy:casting_in_basin",
        "ingredients": [
            {
                "amount": 810,
                "fluid": "kubejs:molten_obsidian"
            }
        ],
        "processingTime": 320,
        "result": {
            "item": "minecraft:obsidian"
        }
    });

    treeoflife.custom({
        "type": "destroy:arc_furnace",
        "ingredients": [
            {
                "item": "minecraft:charcoal"
            },
            {
                "tag": "forge:dusts/iron"
            },
            {
                "tag": "forge:dusts/iron"
            },
            {
                "tag": "forge:dusts/iron"
            }
        ],
        "results": [
            {
                "item": "pneumaticcraft:ingot_iron_compressed"
            }
        ],
        "recipeDuration": 25600
    });
    
    treeoflife.custom({
	    "type": "custommachinery:custom_machine",
	    "machine": "treeoflife:magic_vat",
	    "time": 3600,
	    "requirements": [
		    {
			    "type": "custommachinery:fluid_per_tick",
			    "fluid": "kubejs:witch_fluid",
			    "amount": 2,
			    "mode": "input"
		    },
		    {
			    "type": "custommachinery:energy_per_tick",
			    "amount": 2,
			    "mode": "input"
		    },
            {
			    "type": "custommachinery:item",
			    "item": "destroy:tear_bottle",
			    "amount": 4,
			    "mode": "input"
		    },
            {
			    "type": "custommachinery:item",
			    "item": "minecraft:redstone",
			    "amount": 64,
			    "mode": "input"
		    },
            {
			    "type": "custommachinery:item",
			    "item": "destroy:chromium_ingot",
			    "amount": 2,
			    "mode": "input"
		    },
            {
			    "type": "custommachinery:item",
			    "item": "destroy:sodium_ingot",
			    "amount": 6,
			    "mode": "input"
		    },
		    {
			    "type": "custommachinery:item",
			    "item": "destroy:polyacrylonitrile",
			    "amount": 1,
			    "mode": "output"
		    }
	    ]
    });

    treeoflife.shaped(Item.of("custommachinery:custom_machine_item").withNBT({"machine":"treeoflife:magic_vat"}),
        [
            "ABA",
            "CDC",
            "AEA"
        ],{
            A: "#forge:ingots/platinum",
            B: "destroy:dynamo",
            C: "destroy:touch_powder",
            D: "destroy:vat_controller",
            E: "destroy:blacklight"
        }
    );

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

    treeoflife.custom({
        "type": "createmetallurgy:melting",
        "heatRequirement": "superheated",
        "ingredients": [
            {
                "tag": "forge:ingots/end_steel"
            }
        ],
        "processingTime": 40,
        "results": [
            {
                "amount": 90,
                "fluid": "kubejs:molten_end_steel"
            }
        ]
    });

    treeoflife.custom({
        "type": "createmetallurgy:casting_in_table",
        "ingredients": [
            {
                "item": "createmetallurgy:graphite_ingot_mold"
            },
            {
                "amount": 90,
                "fluid": "kubejs:molten_end_steel"
            }
        ],
        "processingTime": 60,
        "result": {
            "item": "enderio:end_steel_ingot"
        }
    });



})

LootJS.modifiers((treeoflife) => {
    treeoflife.addLootTypeModifier(LootType.CHEST).replaceLoot("create:sturdy_sheet", "destroy:nickel_ingot");
    treeoflife.addLootTypeModifier(LootType.CHEST).replaceLoot("create:brass_hand", "destroy:lead_ingot");
    treeoflife.addLootTypeModifier(LootType.CHEST).replaceLoot("create:brass_ingot", "destroy:lead_ingot");
    treeoflife.addLootTypeModifier(LootType.CHEST).replaceLoot("create:brass_nugget", "destroy:nickel_nugget");
});