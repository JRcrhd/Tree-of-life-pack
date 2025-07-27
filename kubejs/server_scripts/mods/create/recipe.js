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
            '#forge:ingots/platinum',
            '#forge:ingots/palladium',
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

    treeoflife.recipes.create.sequenced_assembly([
        Item.of('kubejs:dimension_alloy_overworld').withChance(1.0)
    ],'kubejs:earth_alloy_shard',[
        treeoflife.recipes.createFilling('kubejs:earth_alloy_shard',['kubejs:earth_alloy_shard',Fluid.of('kubejs:witch_fluid')]),
        treeoflife.recipes.createFilling('kubejs:earth_alloy_shard',['kubejs:earth_alloy_shard',Fluid.of('kubejs:current_fluid')]),
        treeoflife.recipes.createPressing('kubejs:earth_alloy_shard','kubejs:earth_alloy_shard')
    ])
    .transitionalItem('kubejs:earth_alloy_shard')
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

})

LootJS.modifiers((treeoflife) => {
    treeoflife.addLootTypeModifier(LootType.CHEST).replaceLoot("create:sturdy_sheet", "destroy:nickel_ingot");
    treeoflife.addLootTypeModifier(LootType.CHEST).replaceLoot("create:brass_hand", "destroy:lead_ingot");
    treeoflife.addLootTypeModifier(LootType.CHEST).replaceLoot("create:brass_ingot", "destroy:lead_ingot");
    treeoflife.addLootTypeModifier(LootType.CHEST).replaceLoot("create:brass_nugget", "destroy:nickel_nugget");
});