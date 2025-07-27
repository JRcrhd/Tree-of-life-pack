ServerEvents.recipes(treeoflife => {
    treeoflife.remove({id: 'art_of_forging:life_fiber'});
    treeoflife.custom({
        "type": "forbidden_arcanus:clibano_combustion",
        "cooking_time": 100,
        "experience": 1.0,
        "ingredient": {
            "item": "tetra:dragon_sinew"
        },
        "residue": {
            "chance": 0.33,
            "name": "tetra:dragon_sinew"
        },
        "result": {
            "item": "art_of_forging:life_fiber",
            "count": 1
        }
    });
})

LootJS.modifiers((treeoflife) => {
    treeoflife.removeGlobalModifier("art_of_forging:wither_skeleton_additions");
    treeoflife
        .addEntityLootModifier("minecraft:enderman")
        .randomChance(0.6)
        .addLoot("art_of_forging:shards_of_malice");
});