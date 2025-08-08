ServerEvents.recipes(treeoflife => {
    treeoflife.replaceInput({mod: 'computercraft'},
        "#forge:stone",
        "pneumaticcraft:ingot_iron_compressed"
    );

    treeoflife.replaceInput({mod: 'computercraft'},
        "#forge:ingots/iron",
        "create:andesite_alloy"
    );

    treeoflife.replaceInput({mod: 'computercraft'},
        "#forge:ingots/gold",
        "#c:plastics"
    );

    treeoflife.remove({id: 'computercraft:turtle_normal'});
    treeoflife.custom({
        "type": "computercraft:turtle",
        "category": "redstone",
        "key": {
            "#": {"item": "create:andesite_alloy"},
            "C": {"item": "computercraft:computer_normal"},
            "I": {"tag": "forge:chests/wooden"}
        },
        "pattern": ["###", "#C#", "#I#"],
        "result": {"item": "computercraft:turtle_normal"},
        "show_notification": true
    });

    treeoflife.remove({id: 'computercraft:turtle_advanced'});
    treeoflife.custom({
        "type": "computercraft:turtle",
        "category": "redstone",
        "key": {
            "#": {"tag": "c:plastics"},
            "C": {"item": "computercraft:computer_advanced"},
            "I": {"tag": "forge:chests/wooden"}
        },
        "pattern": ["###", "#C#", "#I#"],
        "result": {"item": "computercraft:turtle_advanced"},
        "show_notification": true
    });

    treeoflife.remove({id: 'computercraft:turtle_advanced_upgrade'});
    treeoflife.custom({
        "type": "computercraft:computer_upgrade",
        "category": "redstone",
        "key": {
            "#": {"tag": "c:plastics"},
            "B": {"tag": "forge:storage_blocks/gold"},
            "C": {"item": "computercraft:turtle_normal"}
        },
        "pattern": ["###", "#C#", " B "],
        "result": {"item": "computercraft:turtle_advanced"},
        "show_notification": true
    });

    treeoflife.remove({id: 'computercraft:computer_advanced_upgrade'});
    treeoflife.custom({
        "type": "computercraft:computer_upgrade",
        "category": "redstone",
        "key": {
            "#": {"tag": "c:plastics"},
            "C": {"item": "computercraft:computer_normal"}
        },
        "pattern": ["###", "#C#", "# #"],
        "result": {"item": "computercraft:computer_advanced"},
        "show_notification": true
    });

    treeoflife.remove({id: 'computercraft:pocket_computer_advanced_upgrade'});
    treeoflife.custom({
        "type": "computercraft:computer_upgrade",
        "category": "redstone",
        "key": {
            "#": {"tag": "c:plastics"},
            "C": {"item": "computercraft:pocket_computer_normal"}
        },
        "pattern": ["###", "#C#", "# #"],
        "result": {"item": "computercraft:pocket_computer_advanced"},
        "show_notification": true
    });

})