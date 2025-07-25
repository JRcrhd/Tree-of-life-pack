StartupEvents.postInit(e => {
    GamePhase.addItemRestriction("disables", "projecte:transmutation_tablet");
    GamePhase.addItemRestriction("disables", "projecte:transmutation_table");
    GamePhase.addItemRestriction("disables", "projecte:condenser_mk1");
    GamePhase.addItemRestriction("disables", "projecte:condenser_mk2");
    GamePhase.addItemRestriction("disables", "projecte:watch_of_flowing_time");
    GamePhase.addItemRestriction("disables", "forbidden_arcanus:quantum_catcher");

    GamePhase.addItemModRestriction("assiah", "electrodynamics");
    GamePhase.addItemModRestriction("assiah", "enderio");
    GamePhase.addItemModRestriction("assiah", "pneumaticcraft");
    GamePhase.addItemModRestriction("assiah", "cccbridge");
    GamePhase.addItemModRestriction("assiah", "computercraft");
	GamePhase.addDimensionRestriction("assiah", "minecraft:nether");	
	
	GamePhase.addItemModRestriction("yetzirah", "ae2");
    GamePhase.addItemModRestriction("yetzirah", "appliede");
    GamePhase.addItemModRestriction("yetzirah", "ae2wtlib");
    GamePhase.addItemModRestriction("yetzirah", "appmek");
    GamePhase.addItemModRestriction("yetzirah", "mae2");
    GamePhase.addItemModRestriction("yetzirah", "merequester");
    GamePhase.addItemModRestriction("yetzirah", "mekanism");
    GamePhase.addItemModRestriction("yetzirah", "mekanism_extras");
	GamePhase.addDimensionRestriction("yetzirah", "minecraft:the_end");
	
	GamePhase.addItemModRestriction("beriah", "projecte");
	GamePhase.addDimensionRestriction("beriah", "aether:the_aether");
    GamePhase.addItemRestriction("beriah", "kubejs:emerald_tablet");
});
