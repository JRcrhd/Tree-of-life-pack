ServerEvents.recipes(treeoflife => {
    // Concrete from Concrete Powder using Water Buckets
    const colors = [
        'white', 'yellow', 'orange', 'red', 'pink', 'magenta', 'purple', 'light_blue', 'cyan', 'blue', 'lime', 'green', 'brown', 'light_gray', 'gray', 'black'
    ];

    colors.forEach(color => {
        treeoflife.shaped(
            Item.of(`minecraft:${color}_concrete`, 8),
            ['CCC','CBC','CCC'],
            {
                C: `minecraft:${color}_concrete_powder`,
                B: 'minecraft:water_bucket'
            }
        )
    });

    treeoflife.remove({id: 'regions_unexplored:raw_redstone_block'});

    treeoflife.shaped("minecraft:crafting_table", ['XX','XX'], {X: "#minecraft:planks"}).id("minecraft:crafting_table")

    treeoflife.shapeless(
        Item.of('minecraft:crafting_table'),
        [
            '#c:player_workstations/crafting_tables'
        ]
    )

})