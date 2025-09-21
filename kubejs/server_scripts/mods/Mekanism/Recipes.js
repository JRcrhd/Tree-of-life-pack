ServerEvents.recipes((treeoflife) => {
    treeoflife.custom({
        type: "mekanism:infusion_conversion",
        input: { ingredient: { tag: "forge:fuels/fluix" } },
        output: { amount: 10, infuse_type: "mekanism:fluix" },
    });

    treeoflife.remove({ id: "mekanism:metallurgic_infusing/alloy/infused" });
    treeoflife.custom({
        type: "mekanism:metallurgic_infusing",
        chemicalInput: {
            amount: 10,
            tag: "mekanism:redstone",
        },
        itemInput: {
            ingredient: {
                item: "pneumaticcraft:ingot_iron_compressed",
            },
        },
        output: {
            item: "mekanism:alloy_infused",
        },
    });

    treeoflife.remove({ id: "mekanism:atomic_disassembler" });
    treeoflife.custom({
        type: "mekanism:mek_data",
        category: "equipment",
        key: {
            "#": { item: "destroy:swiss_army_knife" },
            A: { tag: "mekanism:alloys/atomic" },
            E: { item: "mekanism:energy_tablet" },
            I: { tag: "forge:ingots/refined_obsidian" },
        },
        pattern: ["AEA", "A#A", " I "],
        result: { item: "mekanism:atomic_disassembler" },
    });

    treeoflife.remove({ id: "mekanism:pressurized_reaction_chamber" });
    treeoflife.custom({
        type: "mekanism:mek_data",
        category: "equipment",
        key: {
            "#": { item: "mekanism:dynamic_tank" },
            A: { tag: "mekanism:alloys/infused" },
            C: { tag: "forge:circuits/advanced" },
            P: { item: "mekanism:enrichment_chamber" },
            S: { tag: "forge:ingots/steel" },
            T: { item: "mekanism:basic_chemical_tank" },
        },
        pattern: ["SAS", "CPC", "T#T"],
        result: { item: "mekanism:pressurized_reaction_chamber" },
    });

    treeoflife.remove({ id: "mekanism:formulaic_assemblicator" });
    treeoflife.custom({
        type: "minecraft:crafting_shaped",
        key: {
            "#": { tag: "forge:chests/wooden" },
            C: { tag: "forge:circuits/basic" },
            P: { item: "quark:crafter" },
            S: { tag: "forge:ingots/steel" },
            X: { item: "mekanism:steel_casing" },
        },
        pattern: ["SPS", "CXC", "S#S"],
        result: { item: "mekanism:formulaic_assemblicator" },
    });

    treeoflife.custom({
        type: "mekanism:combining",
        extraInput: {
            ingredient: {
                tag: "forge:dusts/diamond",
                count: 2,
            },
        },
        mainInput: {
            ingredient: {
                item: "destroy:nanodiamonds",
            },
        },
        output: {
            item: "destroy:nanodiamonds",
            count: 2,
        },
    });

    treeoflife.remove({ id: "mekanism:control_circuit/advanced" });
    treeoflife.custom({
        type: "ae2:transform",
        circumstance: {
            type: "fluid",
            tag: "minecraft:water",
        },
        ingredients: [
            {
                tag: "forge:circuits/basic",
            },
            {
                tag: "mekanism:alloys/infused",
            },
            {
                item: "destroy:nanodiamonds",
            },
        ],
        result: {
            item: "mekanism:advanced_control_circuit",
        },
    });

    treeoflife.custom({
        type: "create:mixing",
        ingredients: [
            {
                tag: "forge:circuits/basic",
                count: 2,
            },
            {
                tag: "mekanism:alloys/infused",
                count: 2,
            },
            {
                item: "destroy:nanodiamonds",
            },
            {
                amount: 1000,
                fluidTag: "minecraft:water",
            },
        ],
        results: [
            {
                item: "mekanism:advanced_control_circuit",
                count: 2,
            },
        ],
    });

    treeoflife.custom({
        type: "mekanism:rotary",
        fluidInput: { amount: 1, fluid: "kubejs:vibrant_fluix" },
        fluidOutput: { amount: 1, fluid: "kubejs:vibrant_fluix" },
        gasInput: { amount: 1, gas: "kubejs:vibrant_fluix_gas" },
        gasOutput: { amount: 1, gas: "kubejs:vibrant_fluix_gas" },
    });

    treeoflife.custom({
        type: "mekanism:rotary",
        fluidInput: { amount: 1, fluid: "kubejs:stable_vibrant_fluix" },
        fluidOutput: { amount: 1, fluid: "kubejs:stable_vibrant_fluix" },
        gasInput: { amount: 1, gas: "kubejs:stable_vibrant_fluix_gas" },
        gasOutput: { amount: 1, gas: "kubejs:stable_vibrant_fluix_gas" },
    });

    treeoflife.remove({ id: "mekanism:control_circuit/elite" });
    treeoflife.custom({
        type: "mekanism:compressing",
        chemicalInput: { amount: 9, gas: "kubejs:vibrant_fluix_gas" },
        itemInput: { ingredient: { tag: "forge:circuits/advanced" } },
        output: { item: "mekanism:elite_control_circuit" },
    });

    treeoflife.custom({
        type: "mekanism:activating",
        input: { amount: 10, gas: "kubejs:vibrant_fluix_gas" },
        output: { amount: 1, gas: "kubejs:stable_vibrant_fluix_gas" },
    });

    treeoflife.remove({ id: "mekanism:control_circuit/ultimate" });
    treeoflife.custom({
        type: "ae2:transform",
        circumstance: {
            type: "fluid",
            tag: "kubejs:stable_vibrant_fluix",
        },
        ingredients: [
            {
                tag: "forge:circuits/elite",
            },
            {
                tag: "mekanism:alloys/atomic",
            },
            {
                item: "destroy:nanodiamonds",
            },
        ],
        result: {
            count: 1,
            item: "mekanism:ultimate_control_circuit",
        },
    });

    treeoflife.custom({
        type: "create:mixing",
        ingredients: [
            {
                tag: "forge:circuits/elite",
            },
            {
                tag: "mekanism:alloys/atomic",
            },
            {
                item: "destroy:nanodiamonds",
            },
            {
                amount: 90,
                fluid: "kubejs:stable_vibrant_fluix",
            },
        ],
        results: [
            {
                count: 2,
                item: "mekanism:ultimate_control_circuit",
            },
        ],
    });

    treeoflife.recipes.create
        .sequenced_assembly(
            [
                Item.of("mekanism:ultimate_control_circuit")
                    .withChance(5)
                    .withCount(2),
                Item.of("mekanism:ultimate_control_circuit")
                    .withChance(3)
                    .withCount(3),
            ],
            "destroy:nanodiamonds",
            [
                treeoflife.recipes.createPressing(
                    "mekanism:elite_control_circuit",
                    "mekanism:elite_control_circuit"
                ),
                treeoflife.recipes.createDeploying("mekanism:elite_control_circuit", [
                    "mekanism:elite_control_circuit",
                    "mekanism:elite_control_circuit",
                ]),
                treeoflife.recipes.createDeploying("mekanism:elite_control_circuit", [
                    "mekanism:elite_control_circuit",
                    "mekanism:elite_control_circuit",
                ]),
                treeoflife.recipes.createPressing(
                    "mekanism:elite_control_circuit",
                    "mekanism:elite_control_circuit"
                ),
                treeoflife.recipes.createDeploying("mekanism:elite_control_circuit", [
                    "mekanism:elite_control_circuit",
                    "#mekanism:alloys/atomic",
                ]),
                treeoflife.recipes.createFilling("mekanism:elite_control_circuit", [
                    "mekanism:elite_control_circuit",
                    Fluid.of("kubejs:stable_vibrant_fluix").withAmount(270),
                ]),
            ]
        )
        .transitionalItem("mekanism:elite_control_circuit")
        .loops(1);

    treeoflife.stonecutting("48x mekanism:hdpe_pellet", "destroy:polyethene");

    treeoflife.remove({ id: "mekanismgenerators:fission_reactor/port" });
    treeoflife.custom({
        type: "minecraft:crafting_shaped",
        key: {
            C: { tag: "forge:circuits/ultimate" },
            F: { item: "mekanismgenerators:fission_reactor_casing" },
        },
        pattern: [" F ", "FCF", " F "],
        result: {
            count: 2,
            item: "mekanismgenerators:fission_reactor_port",
        },
    });

    treeoflife.remove({
        id: "mekanismgenerators:fission_reactor/control_rod_assembly",
    });
    treeoflife.custom({
        type: "minecraft:crafting_shaped",
        key: {
            C: { tag: "forge:circuits/ultimate" },
            I: { tag: "forge:ingots/lead" },
            S: { tag: "forge:ingots/steel" },
        },
        pattern: ["ICI", "SIS", "SIS"],
        result: {
            item: "mekanismgenerators:control_rod_assembly",
        },
    });

    treeoflife.replaceInput(
        { id: "mekanismgenerators:reactor/port" },
        "#forge:circuits/ultimate",
        "#forge:circuits/absolute"
    );

    treeoflife.replaceInput(
        { id: "mekanismgenerators:reactor/controller" },
        "#forge:circuits/ultimate",
        "#forge:circuits/absolute"
    );

    treeoflife.replaceInput(
        { id: "mekanismgenerators:reactor/frame" },
        "#mekanism:alloys/atomic",
        "#mekanism_extras:alloys/radiance"
    );

    treeoflife.recipes.create.pressing('kubejs:polonium_plate', '#forge:pellets/polonium')

    treeoflife.remove({ id: "mekanism_extras:control_circuit/absolute" });
    treeoflife.recipes.create
        .sequenced_assembly(
            [
                Item.of("mekanism_extras:absolute_control_circuit")
                    .withCount(2)
            ],
            "kubejs:polonium_plate",
            [
                treeoflife.recipes.createPressing(
                    "kubejs:polonium_plate",
                    "kubejs:polonium_plate"
                ),
                treeoflife.recipes.createDeploying("kubejs:polonium_plate", [
                    "kubejs:polonium_plate",
                    "#forge:circuits/ultimate",
                ]),
                treeoflife.recipes.createFilling("kubejs:polonium_plate", [
                    "kubejs:polonium_plate",
                    Fluid.of("kubejs:molten_ambrosium").withAmount(90)
                ]),
                treeoflife.recipes.createDeploying("kubejs:polonium_plate", [
                    "kubejs:polonium_plate",
                    "#mekanism_extras:alloys/radiance",
                ]),
            ]
        )
        .transitionalItem("kubejs:polonium_plate")
        .loops(2);

    treeoflife.replaceInput({ id: "mekanism:sps_port" }
        , "#forge:circuits/ultimate"
        , "#forge:circuits/absolute"
    );

    treeoflife.remove({ id: "mekanism_extras:control_circuit/supreme" });
    treeoflife.recipes.create
        .sequenced_assembly(
            [
                Item.of("mekanism_extras:supreme_control_circuit")
                    .withCount(2)
            ],
            "kubejs:polonium_plate",
            [
                treeoflife.recipes.createPressing(
                    "kubejs:polonium_plate",
                    "kubejs:polonium_plate"
                ),
                treeoflife.recipes.createDeploying("kubejs:polonium_plate", [
                    "kubejs:polonium_plate",
                    "#forge:circuits/absolute",
                ]),
                treeoflife.recipes.createDeploying("kubejs:polonium_plate", [
                    "kubejs:polonium_plate",
                    "#forge:circuits/absolute",
                ]),
                treeoflife.recipes.createDeploying("kubejs:polonium_plate", [
                    "kubejs:polonium_plate",
                    "#mekanism_extras:alloys/thermonuclear",
                ]),
                treeoflife.recipes.createDeploying("kubejs:polonium_plate", [
                    "kubejs:polonium_plate",
                    "goety:soul_ruby",
                ]),
            ]
        )
        .transitionalItem("kubejs:polonium_plate")
        .loops(1);

    treeoflife.replaceInput({ id: "mekanism:antiprotonic_nucleosynthesizer" }
        , "#forge:circuits/ultimate"
        , "#forge:circuits/supreme"
    );

    treeoflife.replaceInput({ id: "mekanism:antiprotonic_nucleosynthesizer" }
        , "#mekanism:alloys/atomic"
        , "#mekanism_extras:alloys/thermonuclear"
    );

    treeoflife.remove({ id: "mekanism_extras:control_circuit/cosmic" });
    treeoflife.recipes.create
        .sequenced_assembly(
            [
                Item.of("mekanism_extras:cosmic_control_circuit")
                    .withCount(1)
                    .withChance(9),
                Item.of("mekanism_extras:supreme_control_circuit")
                    .withCount(1)
                    .withChance(1),
            ],
            "mekanism_extras:supreme_control_circuit",
            [
                treeoflife.recipes.createDeploying("mekanism_extras:supreme_control_circuit", [
                    "mekanism_extras:supreme_control_circuit",
                    "#mekanism_extras:alloys/shining",
                ]),
                treeoflife.recipes.createDeploying("mekanism_extras:supreme_control_circuit", [
                    "mekanism_extras:supreme_control_circuit",
                    "#mekanism_extras:alloys/shining",
                ]),
                treeoflife.recipes.createDeploying("mekanism_extras:supreme_control_circuit", [
                    "mekanism_extras:supreme_control_circuit",
                    "#mekanism_extras:alloys/shining",
                ]),
                treeoflife.recipes.createDeploying("mekanism_extras:supreme_control_circuit", [
                    "mekanism_extras:supreme_control_circuit",
                    "#mekanism_extras:alloys/shining",
                ]),
                treeoflife.recipes.createDeploying("mekanism_extras:supreme_control_circuit", [
                    "mekanism_extras:supreme_control_circuit",
                    "#mekanism_extras:alloys/shining",
                ]),
                treeoflife.recipes.createDeploying("mekanism_extras:supreme_control_circuit", [
                    "mekanism_extras:supreme_control_circuit",
                    "#mekanism_extras:alloys/shining",
                ])
            ]
        )
        .transitionalItem("mekanism_extras:supreme_control_circuit")
        .loops(1);

    treeoflife.remove({ id: "mekanism_extras:control_circuit/infinite" });
    treeoflife.smithing('mekanism_extras:infinite_control_circuit', '#mekanism_extras:alloys/spectrum', 'projecte:red_matter', '#forge:circuits/cosmic');
    

    treeoflife.replaceInput({ id: "mekanism:mekasuit_helmet" }
        , "#forge:circuits/ultimate"
        , "#forge:circuits/infinite"
    );

    treeoflife.replaceInput({ id: "mekanism:mekasuit_helmet" }
        , "minecraft:netherite_helmet"
        , "projecte:rm_helmet"
    );

    treeoflife.replaceInput({ id: "mekanism:mekasuit_helmet" }
        , "#forge:pellets/polonium"
        , "apotheosis:ancient_material"
    );

    treeoflife.replaceInput({ id: "mekanism:mekasuit_helmet" }
        , "mekanism:basic_induction_cell"
        , "mekanism_extras:absolute_induction_cell"
    );

    treeoflife.replaceInput({ id: "mekanism:mekasuit_helmet" }
        , "mekanism:hdpe_sheet"
        , "kubejs:polonium_plate"
    );
    
    // 胸甲配方修改
    treeoflife.replaceInput({ id: "mekanism:mekasuit_bodyarmor" }
        , "#forge:circuits/ultimate"
        , "#forge:circuits/infinite"
    );

    treeoflife.replaceInput({ id: "mekanism:mekasuit_bodyarmor" }
        , "minecraft:netherite_chestplate"
        , "projecte:rm_chestplate"
    );

    treeoflife.replaceInput({ id: "mekanism:mekasuit_bodyarmor" }
        , "#forge:pellets/polonium"
        , "apotheosis:ancient_material"
    );

    treeoflife.replaceInput({ id: "mekanism:mekasuit_bodyarmor" }
        , "mekanism:basic_induction_cell"
        , "mekanism_extras:absolute_induction_cell"
    );

    treeoflife.replaceInput({ id: "mekanism:mekasuit_bodyarmor" }
        , "mekanism:hdpe_sheet"
        , "kubejs:polonium_plate"
    );
    
    // 护腿配方修改
    treeoflife.replaceInput({ id: "mekanism:mekasuit_pants" }
        , "#forge:circuits/ultimate"
        , "#forge:circuits/infinite"
    );

    treeoflife.replaceInput({ id: "mekanism:mekasuit_pants" }
        , "minecraft:netherite_leggings"
        , "projecte:rm_leggings"
    );

    treeoflife.replaceInput({ id: "mekanism:mekasuit_pants" }
        , "#forge:pellets/polonium"
        , "apotheosis:ancient_material"
    );

    treeoflife.replaceInput({ id: "mekanism:mekasuit_pants" }
        , "mekanism:basic_induction_cell"
        , "mekanism_extras:absolute_induction_cell"
    );
    
    treeoflife.replaceInput({ id: "mekanism:mekasuit_pants" }
        , "mekanism:hdpe_sheet"
        , "kubejs:polonium_plate"
    );
    
    // 靴子配方修改
    treeoflife.replaceInput({ id: "mekanism:mekasuit_boots" }
        , "#forge:circuits/ultimate"
        , "#forge:circuits/infinite"
    );

    treeoflife.replaceInput({ id: "mekanism:mekasuit_boots" }
        , "minecraft:netherite_boots"
        , "projecte:rm_boots"
    );

    treeoflife.replaceInput({ id: "mekanism:mekasuit_boots" }
        , "#forge:pellets/polonium"
        , "apotheosis:ancient_material"
    );

    treeoflife.replaceInput({ id: "mekanism:mekasuit_boots" }
        , "mekanism:basic_induction_cell"
        , "mekanism_extras:absolute_induction_cell"
    );

    treeoflife.replaceInput({ id: "mekanism:mekasuit_boots" }
        , "mekanism:hdpe_sheet"
        , "kubejs:polonium_plate"
    );

});
