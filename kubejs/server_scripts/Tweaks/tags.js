ServerEvents.tags('item', treeoflife => {
    // More books
    treeoflife.add('minecraft:bookshelf_books', 'patchouli:guidebook')
    treeoflife.add('minecraft:bookshelf_books', 'ae2:guide')

    // Forbiden Arcanus Stellar Blacklist
    treeoflife.add('forbidden_arcanus:modifier/eternal_incompatible', 'ars_additions:undying_charm')
})

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
        "cataclysm:modern_remnant",
        "cataclysm:netherite_monstrosity",
        "cataclysm:the_baby_leviathan",
        "cataclysm:the_harbinger",
        "cataclysm:the_leviathan",
        "cataclysm:the_prowler",
        "cataclysm:wadjet",
        "#neoforge:bosses"
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