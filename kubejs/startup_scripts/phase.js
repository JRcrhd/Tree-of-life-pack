StartupEvents.postInit(e => {
    GamePhase.addItemRestriction("disables", "projecte:transmutation_tablet");
    GamePhase.addItemRestriction("disables", "projecte:transmutation_table");
    GamePhase.addItemRestriction("disables", "projecte:condenser_mk1");
    GamePhase.addItemRestriction("disables", "projecte:condenser_mk2");
    GamePhase.addItemRestriction("disables", "projecte:rm_katar");
    GamePhase.addItemRestriction("disables", "forbidden_arcanus:quantum_catcher");
    GamePhase.addItemRestriction("disables", "createdieselgenerators:huge_diesel_engine");
    GamePhase.addItemRestriction("disables", "expatternprovider:circuit_cutter");
    GamePhase.addItemRestriction("disables", "expatternprovider:ex_inscriber");
    GamePhase.addItemRestriction("disables", "alexsmobs:transmutation_table");
    GamePhase.addItemRestriction("disables", "ae2:inscriber");

	GamePhase.addDimensionRestriction("assiah", "minecraft:nether");	

	GamePhase.addDimensionRestriction("yetzirah", "minecraft:the_end");
	
	GamePhase.addDimensionRestriction("beriah", "aether:the_aether");
    GamePhase.addItemRestriction("beriah", "kubejs:emerald_tablet");
});
