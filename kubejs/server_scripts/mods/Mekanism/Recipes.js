ServerEvents.recipes(treeoflife => {
    treeoflife.remove({id: 'mekanism:metallurgic_infusing/alloy/infused'});
    treeoflife.custom({
        "type":"mekanism:metallurgic_infusing",
        "chemicalInput":{
            "amount":10,
            "tag":"mekanism:redstone"
        },
        "itemInput":{
            "ingredient":{
                "item":"pneumaticcraft:ingot_iron_compressed"
            }
        },
        "output":{
            "item":"mekanism:alloy_infused"
        }
    });

    treeoflife.remove({ id: 'mekanism:atomic_disassembler' });

    treeoflife.custom({
        "type":"mekanism:mek_data",
        "category":"equipment",
        "key":{
            "#":{"item":"destroy:swiss_army_knife"},
            "A":{"tag":"mekanism:alloys/atomic"},
            "E":{"item":"mekanism:energy_tablet"},
            "I":{"tag":"forge:ingots/refined_obsidian"}
        },
        "pattern":["AEA","A#A"," I "],
        "result":{"item":"mekanism:atomic_disassembler"}
    });

});
