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
})