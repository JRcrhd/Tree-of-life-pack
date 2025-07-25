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
    );

    treeoflife.remove({id: 'explorerscompass:explorers_compass'});
    treeoflife.remove({id: 'naturescompass:natures_compass'});
    treeoflife.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "type": "pneumaticcraft:stacked_item",
                "count": 2,
                "tag": "forge:ingots/compressed_iron"
            },
            {
                "type": "pneumaticcraft:stacked_item",
                "count": 2,
                "tag": "pneumaticcraft:wiring"
            },
            {
                "item": "create:cogwheel"
            },
            {
                "item": 'minecraft:compass'
            }
        ],
        "pressure": 2.5,
        "results": [
            {
                "count": 1,
                "item": "explorerscompass:explorerscompass"
            }
        ]
    });

    treeoflife.recipes.create.sequenced_assembly([
        Item.of('naturescompass:naturescompass').withChance(16.0),
        Item.of('minecraft:azalia').withChance(1.0)
    ],'minecraft:compass',[
        treeoflife.recipes.createDeploying('create:incomplete_precision_mechanism',['create:incomplete_precision_mechanism','minecraft:moss_block']),
        treeoflife.recipes.createFilling('create:incomplete_precision_mechanism',['create:incomplete_precision_mechanism',Fluid.water(1000)]),
        treeoflife.recipes.createPressing('create:incomplete_precision_mechanism','create:incomplete_precision_mechanism')
    ])
    .transitionalItem('create:incomplete_precision_mechanism')
    .loops(3);

});

