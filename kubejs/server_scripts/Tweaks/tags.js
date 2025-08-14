ServerEvents.tags('item', treeoflife => {
    treeoflife.add('minecraft:bookshelf_books', 'patchouli:guidebook')
    treeoflife.add('minecraft:bookshelf_books', 'ae2:guide')

});

ServerEvents.tags('block', treeoflife => {

    treeoflife.add('c:end_ore_replaceable', [
        '#true_ending:breaks_into/any',
        '#forge:ore_bearing_ground/end_stone',
        '#minecraft:stone_ore_replaceable'
    ]);
});

ServerEvents.tags('entity_type', treeoflife => {

    treeoflife.add('c:bosses', [
        "cataclysm:amethyst_crab",
        "cataclysm:ancient_remnant",
        "cataclysm:coralssus",
        "cataclysm:ender_golem",
        "cataclysm:ender_guardian",
        "cataclysm:ignis",
        "cataclysm:ignited_revenant",
        "cataclysm:kobolediator",
        "cataclysm:maledictus",
        "cataclysm:scylla",
        "cataclysm:modern_remnant",
        "cataclysm:netherite_monstrosity",
        "cataclysm:the_baby_leviathan",
        "cataclysm:the_harbinger",
        "cataclysm:the_leviathan",
        "cataclysm:the_prowler",
        "cataclysm:wadjet",
        "#forge:bosses",
        "goety:apostle",
        "goety:vizier",
        "goety:hostile_redstone_golem",
        "goety:crone",
        "goety:skull_lord",
        "aether:slider",
        "aether:valkyrie_queen",
        "aether:sun_spirit"
    ])

    treeoflife.add('treeoflife:jank_blacklist', [
        'create:package',
        'mekanism:robit',
        '#c:bosses',
        "@occultism",
        "forbidden_arcanus:corrupt_lost_soul",
        "forbidden_arcanus:lost_soul",
        "forbidden_arcanus:enchanted_lost_soul"
    ])

    treeoflife.add('apothic_spawners:blacklisted_from_spawners', '#treeoflife:jank_blacklist')
    treeoflife.add('enderio:soul_vial_blacklist', '#treeoflife:jank_blacklist')
    treeoflife.add('enderio:spawner_blacklist', '#treeoflife:jank_blacklist')
});