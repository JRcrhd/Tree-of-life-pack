ServerEvents.recipes(treeoflife => {
    treeoflife.replaceInput(
        {id: 'enderio:void_chassis'},
        'enderio:grains_of_infinity',
        'create:railway_casing'
    );

    treeoflife.replaceInput(
        {mod: 'enderio'},
        'minecraft:iron_bars',
        'create:sturdy_sheet'
    );

    treeoflife.remove({id: 'enderio:basic_capacitor'});
    treeoflife.shaped('enderio:basic_capacitor',
        [
            ' AB',
            'ACA',
            'BA '
        ],{
            A: 'create:sturdy_sheet',
            B: 'enderio:grains_of_infinity',
            C: 'create:electron_tube'
    });

    treeoflife.remove({id: 'enderio:primitive_alloy_smelter'});

    treeoflife.replaceInput(
        {id: 'enderio:energetic_photovoltaic_module'},
        '#forge:ingots/gold',
        '#forge:ingots/platinum'
    );

    treeoflife.replaceInput(
        {id: 'enderio:stirling_generator'},
        'minecraft:stone_bricks',
        '#forge:ingots/palladium'
    );

    treeoflife.replaceInput(
        {id: 'enderio:conduit_binder_composite'},
        '#forge:sand',
        '#forge:dusts/end_stone'
    );

    treeoflife.remove({id: 'enderio:alloy_smelting/vibrant_alloy_ingot'});
    treeoflife.custom({
        "type": "enderio:alloy_smelting",
        "energy": 4800,
        "experience": 0.3,
        "inputs": [
            {
                "count": 1,
                "ingredient": {
                    "item": "enderio:energetic_alloy_ingot"
                }
            },
            {
                "count": 1,
                "ingredient": {
                    "tag": "forge:ender_pearls"
                }
            },
            {
                "count": 1,
                "ingredient": {
                    "tag": "forge:ingots/tungsten"
                }
            }
        ],
        "result": {
            "item": "enderio:vibrant_alloy_ingot"
        }
    });

    treeoflife.remove({id: 'enderio:alloy_smelting/dark_steel_ingot'});
    treeoflife.remove({id: 'enderio:alloy_smelting/soularium_ingot'});
    treeoflife.custom({
        "type": "enderio:alloy_smelting",
        "energy": 5600,
        "experience": 0.3,
        "inputs": [
            {
                "count": 1,
                "ingredient": {
                    "tag": "forge:ingots/gold"
                }
            },
            {
                "count": 1,
                "ingredient": {
                    "tag": "forge:nuggets/chromium"
                }
            },
            {
                "count": 1,
                "ingredient": {
                    "item": "minecraft:soul_sand"
                }
            }
        ],
        "result": {
            "item": "enderio:soularium_ingot"
        }
    });

})

LootJS.modifiers((treeoflife) => {
    treeoflife.addLootTypeModifier(LootType.CHEST).replaceLoot("enderio:dark_steel_ingot", "create:stone_gear");
    treeoflife.removeGlobalModifier("enderio:alloy_loot");
});