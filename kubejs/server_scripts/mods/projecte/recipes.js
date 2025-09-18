ServerEvents.recipes(treeoflife => {
	treeoflife.remove({id: "projecte:philosophers_stone_alt"});
	treeoflife.remove({id: "projecte:philosophers_stone"});
	treeoflife.remove({id: "projecte:dark_matter"});
	treeoflife.remove({id: "projecte:red_matter"});
	treeoflife.remove({id: "projecte:red_matter_alt"});
	treeoflife.remove({id: "projecte:klein_star_ein"});
	treeoflife.remove({id: "projecte:low_covalence_dust"});
	treeoflife.remove({id: "projecte:medium_covalence_dust"});
	treeoflife.remove({id: "projecte:high_covalence_dust"});
	treeoflife.remove({id: "projecte:collector_mk1"});
	treeoflife.remove({id: "projecte:collector_mk2"});
	treeoflife.remove({id: "projecte:collector_mk3"});
	treeoflife.remove({id: "projecte:relay_mk1"});
	treeoflife.remove({id: "projecte:relay_mk2"});
	treeoflife.remove({id: "projecte:relay_mk3"});

	treeoflife.shaped("projecte:low_covalence_dust", [" A ", "CBC", " A "], {
		A: "cataclysm:void_stone",
		B: "cataclysm:essence_of_the_storm",
		C: "#forge:gems/zanite"
	});

	treeoflife.shaped("projecte:medium_covalence_dust", [" A ", "CBC", " A "], {
		A: "art_of_forging:eerie_shard",
		B: "projecte:low_covalence_dust",
		C: "cataclysm:crystallized_coral_fragments"
	});

	treeoflife.shaped("projecte:high_covalence_dust", ["DAD", "CBC", "DAD"], {
		A: "goety_cataclysm:abyss_essence",
		B: "projecte:medium_covalence_dust",
		C: "destroy:fluorite",
		D: "aether:swet_ball"
	});

    treeoflife.smithing('projecte:alchemical_coal', 'projecte:low_covalence_dust', 'minecraft:coal', 'destroy:dynamite');
    treeoflife.smithing('projecte:mobius_fuel', 'projecte:medium_covalence_dust', 'projecte:alchemical_coal', 'create_enchantment_industry:hyper_experience_bottle');
    treeoflife.smithing('projecte:aeternalis_fuel', 'projecte:high_covalence_dust', 'projecte:mobius_fuel', 'rainbowcompound:netherstar_ingot');

	treeoflife.custom({
        type: "custommachinery:custom_machine",
        machine: "treeoflife:magic_vat",
        time: 3600,
        requirements: [
            {
                type: "custommachinery:fluid_per_tick",
                fluid: "kubejs:root_fluid",
                amount: 1,
                mode: "input",
            },
            {
                type: "custommachinery:energy_per_tick",
                amount: 10,
                mode: "input",
            },
            {
                type: "custommachinery:item",
                item: "mekanism:pellet_antimatter",
                amount: 1,
                mode: "input",
            },
            {
                type: "custommachinery:item",
                item: "projecte:high_covalence_dust",
                amount: 4,
                mode: "input",
            },
            {
                type: "custommachinery:item",
                item: "forbidden_arcanus:dark_matter",
                amount: 1,
                mode: "input",
            },
            {
                type: "custommachinery:item",
                item: "projecte:dark_matter",
                amount: 1,
                mode: "output",
            },
        ],
    });

    treeoflife.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: "projecte:dark_matter",
                amount: 16
            },
            {
                fluid: "mekanism_extras:polonium-208",
                amount: 1
            }
        ],
        results: [
            {
                item: "projecte:red_matter"
            }
        ]
    });
})