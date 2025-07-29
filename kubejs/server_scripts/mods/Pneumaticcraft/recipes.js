
ServerEvents.recipes(treeoflife => {
    treeoflife.remove({id: 'pneumaticcraft:explosion_crafting/compressed_iron_block'});
    treeoflife.remove({id: 'pneumaticcraft:explosion_crafting/compressed_iron_ingot'});

    treeoflife.remove({id: 'pneumaticcraft:pressure_chamber/compressed_iron_ingot'});
    treeoflife.remove({id: 'pneumaticcraft:pressure_chamber/compressed_iron_block'});

    treeoflife.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "type": "pneumaticcraft:stacked_item",
                "count": 3,
                "tag": "forge:ingots/iron",
            },
            {
                "item": "minecraft:charcoal"
            }
        ],
        "pressure": 2.0,
        "results": [
            {
                "item": "pneumaticcraft:ingot_iron_compressed"
            }
        ]
    });

    treeoflife.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "item": "minecraft:iron_block",
            },
            {
                "type": "pneumaticcraft:stacked_item",
                "count": 3,
                "item": "minecraft:iron_block",
            }
        ],
        "pressure": 2.0,
        "results": [
            {
                "item": "pneumaticcraft:compressed_iron_block"
            }
        ]
    });

    treeoflife.replaceInput(
        {mod: 'pneumaticcraft'},
        'minecraft:iron_bars',
        'create:sturdy_sheet'
    );

});

LootJS.modifiers((treeoflife) => {
    treeoflife.removeGlobalModifier("pneumaticcraft:dungeon_loot");
});
