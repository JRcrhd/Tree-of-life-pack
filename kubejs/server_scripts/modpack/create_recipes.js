ServerEvents.recipes(treeoflife => {
    treeoflife.recipes.create.sequenced_assembly(
        [
            Item.of("apotheosis:ancient_material")
        ],
        "apotheosis:mythic_material",
        [
            treeoflife.recipes.createDeploying("apotheosis:mythic_material", [
                "apotheosis:mythic_material",
                "kubejs:point_malkuth",
            ]),
            treeoflife.recipes.createDeploying("apotheosis:mythic_material", [
                "apotheosis:mythic_material",
                "kubejs:rune_path_22",
            ]),
            treeoflife.recipes.createDeploying("apotheosis:mythic_material", [
                "apotheosis:mythic_material",
                "kubejs:rune_path_15",
            ]),
            treeoflife.recipes.createDeploying("apotheosis:mythic_material", [
                "apotheosis:mythic_material",
                "kubejs:rune_path_3",
            ])
        ]
    )
    .transitionalItem("apotheosis:mythic_material")
    .loops(1);

    treeoflife.recipes.create.sequenced_assembly(
        [
            Item.of("pneumaticcraft:creative_compressed_iron_block")
        ],
        "pneumaticcraft:compressed_iron_block",
        [
            treeoflife.recipes.createDeploying("pneumaticcraft:compressed_iron_block", [
                "pneumaticcraft:compressed_iron_block",
                "kubejs:point_geburah",
            ]),
            treeoflife.recipes.createDeploying("pneumaticcraft:compressed_iron_block", [
                "pneumaticcraft:compressed_iron_block",
                "kubejs:rune_path_12",
            ]),
            treeoflife.recipes.createDeploying("pneumaticcraft:compressed_iron_block", [
                "pneumaticcraft:compressed_iron_block",
                "kubejs:rune_path_10",
            ])
        ]
    )
    .transitionalItem("pneumaticcraft:compressed_iron_block")
    .loops(1);
});
