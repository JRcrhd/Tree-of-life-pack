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

    treeoflife.remove({id: 'mekanism:pressurized_reaction_chamber'});
    treeoflife.custom({
        "type":"mekanism:mek_data",
        "category":"equipment",
        "key":{"#":{"item":"mekanism:dynamic_tank"},"A":{"tag":"mekanism:alloys/infused"},"C":{"tag":"forge:circuits/advanced"},"P":{"item":"mekanism:enrichment_chamber"},"S":{"tag":"forge:ingots/steel"},"T":{"item":"mekanism:basic_chemical_tank"}},
        "pattern":["SAS","CPC","T#T"],
        "result":{"item":"mekanism:pressurized_reaction_chamber"}
    });

    treeoflife.remove({id: 'mekanism:formulaic_assemblicator'});
    treeoflife.custom({
        "type":"minecraft:crafting_shaped",
        "key":{"#":{"tag":"forge:chests/wooden"},"C":{"tag":"forge:circuits/basic"},"P":{"item":"quark:crafter"},"S":{"tag":"forge:ingots/steel"},"X":{"item":"mekanism:steel_casing"}},
        "pattern":["SPS","CXC","S#S"],
        "result":{"item":"mekanism:formulaic_assemblicator"}
    });

    treeoflife.custom({
        "type":"mekanism:combining",
        "extraInput":{
            "ingredient":{
                "tag":"forge:dusts/diamond",
                "count": 2
            }
        },
        "mainInput":{
            "ingredient":{
                "item":"destroy:nanodiamonds"
            }
        },
        "output":{
            "item":"destroy:nanodiamonds",
            "count": 2
        }
    });

    treeoflife.remove({id: 'mekanism:control_circuit/advanced'});
    treeoflife.custom({
        "type": "ae2:transform",
        "circumstance": {
            "type": "fluid",
            "tag": "minecraft:water"
        },
        "ingredients": [
            {
                "tag": "forge:circuits/basic"
            },
            {
                "tag": "mekanism:alloys/infused"
            },
            {
                "item": "destroy:nanodiamonds"
            }
        ],
        "result": {
            "item": "mekanism:advanced_control_circuit"
        }
    });
    
    treeoflife.remove({id: 'mekanism:control_circuit/elite'});

    
    treeoflife.remove({id: 'mekanism:control_circuit/ultimate'});



});
