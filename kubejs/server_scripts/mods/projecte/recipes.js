ServerEvents.recipes(treeoflife => {
	treeoflife.remove({id: "projecte:philosophers_stone_alt"});
	treeoflife.remove({id: "projecte:philosophers_stone"});
	treeoflife.remove({id: "projecte:dark_matter"});
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

})