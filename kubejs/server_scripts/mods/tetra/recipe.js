ServerEvents.recipes(treeoflife => {
    treeoflife.remove({id: 'tetra:hammer_base'});
    treeoflife.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "key": {
            "A": {
                "item": "tetra:metal_scrap"
            },
            "P": {
                "item": "art_of_forging:forged_steel_ingot"
            },
            "S": {
                "item": "enderio:vibrant_alloy_block"
            }
        },
        "pattern": [
            "AAA",
            "APA",
            "PSP",
            "APA",
            "AAA"
        ],
        "result": {
            "count": 1,
            "item": "tetra:hammer_base"
        }
    });
});

LootJS.modifiers((event) => {
	event.addBlockLootModifier("tetra:hammer_base").replaceLoot("tetra:hammer_base", "tetra:thermal_cell");
    event.addBlockLootModifier("tetra:hammer_head").replaceLoot("tetra:hammer_base", "tetra:thermal_cell");
});