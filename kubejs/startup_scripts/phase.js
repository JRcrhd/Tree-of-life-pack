StartupEvents.postInit(e => {
    GamePhase.addItemRestriction("disables", "projecte:transmutation_tablet");
    GamePhase.addItemRestriction("disables", "projecte:transmutation_table");
    GamePhase.addItemRestriction("disables", "projecte:condenser_mk1");
    GamePhase.addItemRestriction("disables", "projecte:condenser_mk2");
    GamePhase.addItemRestriction("disables", "projecte:watch_of_flowing_time");
	
    GamePhase.addItemModRestriction("assiah", "electrodynamics");
    GamePhase.addItemModRestriction("assiah", "enderio");
    GamePhase.addItemModRestriction("assiah", "pneumaticcraft");
    GamePhase.addItemModRestriction("assiah", "cccbridge");
    GamePhase.addItemModRestriction("assiah", "computercraft");
	
	GamePhase.addItemModRestriction("yetzirah", "ae2");
    GamePhase.addItemModRestriction("yetzirah", "appliede");
    GamePhase.addItemModRestriction("yetzirah", "ae2wtlib");
    GamePhase.addItemModRestriction("yetzirah", "appmek");
    GamePhase.addItemModRestriction("yetzirah", "mae2");
    GamePhase.addItemModRestriction("yetzirah", "merequester");
    GamePhase.addItemModRestriction("yetzirah", "mekanism");
    GamePhase.addItemModRestriction("yetzirah", "mekanism_extras");
	GamePhase.addDimensionRestriction("yetzirah", "minecraft:nether");
	
	GamePhase.addItemModRestriction("beriah", "projecte");
	GamePhase.addDimensionRestriction("beriah", "minecraft:the_end");
});
