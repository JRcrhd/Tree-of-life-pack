const armorSets = [
    {
        items: [
            "minecraft:golden_helmet",
            "minecraft:golden_chestplate",
            "minecraft:golden_leggings",
            "minecraft:golden_boots"
        ],
        requiredCount: 4,
        effectCommand:"effect give @p minecraft:regeneration 2 1 true"
    },
    {
        items: [
            'projecte:dm_helmet',
            'projecte:dm_chestplate',
            'projecte:dm_leggings',
            'projecte:dm_boots',
            'projecte:rm_helmet',
            'projecte:rm_chestplate',
            'projecte:rm_leggings',
            'projecte:rm_boots',
            'projecte:gem_helmet',
            'projecte:gem_chestplate',
            'projecte:gem_leggings',
            'projecte:gem_boots'
        ],
        requiredCount: 1,
        effectCommand:"effect give @p minecraft:weakness 5 7 true"
    },
    {
        items: [
            'projecte:rm_helmet',
            'projecte:rm_chestplate',
            'projecte:rm_leggings',
            'projecte:rm_boots',
            'projecte:gem_helmet',
            'projecte:gem_chestplate',
            'projecte:gem_leggings',
            'projecte:gem_boots'
        ],
        requiredCount: 1,
        effectCommand:"effect give @p attributeslib:grievous 5 10 true"
    },
    {
        items: [
            'projecte:gem_helmet',
            'projecte:gem_chestplate',
            'projecte:gem_leggings',
            'projecte:gem_boots'
        ],
        requiredCount: 1,
        effectCommand:"effect give @p minecraft:unluck 10 60 true"
    },
    {
        items: [
            'projecte:dm_boots',
            'projecte:rm_boots',
            'projecte:gem_boots'
        ],
        requiredCount: 1,
        effectCommand:"effect give @p minecraft:slowness 5 1 true"
    },
    {
        items: [
            'projecte:dm_chestplate',
            'projecte:rm_chestplate',
            'projecte:gem_chestplate'
        ],
        requiredCount: 1,
        effectCommand:"effect give @p attributeslib:sundering 5 10 true"
    },
];

PlayerEvents.tick(event => {
    const { server, player, player: { username } } = event;

    if (player.age % 20 !== 0) return;

    let equippedItems = [
        player.headArmorItem.id,
        player.chestArmorItem.id,
        player.legsArmorItem.id,
        player.feetArmorItem.id
    ]

    armorSets.forEach(set => {
        let wornCount = set.items.filter(itemId => 
            equippedItems.includes(itemId)
        ).length;

        if (wornCount >= set.requiredCount) {
            server.runCommandSilent(set.effectCommand.replace('@p', username));
        }
    });
});