
const dm_equipment = [
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
]

const golden_equipment = [
    'minecraft:gold_helmet',
    'minecraft:gold_chestplate',
    'minecraft:gold_leggings',
    'minecraft:gold_boots',
    'aether:gold_gloves',
]

const iron_equipment = [
    'pneumaticcraft:compressed_iron_helmet',
    'pneumaticcraft:compressed_iron_chestplate',
    'pneumaticcraft:compressed_iron_leggings',
    'pneumaticcraft:compressed_iron_boots',
    'minecraft:iron_helmet',
    'minecraft:iron_chestplate',
    'minecraft:iron_leggings',
    'minecraft:iron_boots',
    'aether:iron_gloves',
]

const light_equipment = [
    'minecraft:chainmail_helmet',
    'minecraft:chainmail_chestplate',
    'minecraft:chainmail_leggings',
    'minecraft:chainmail_boots',
    'minecraft:leather_helmet',
    'minecraft:leather_chestplate',
    'minecraft:leather_leggings',
    'minecraft:leather_boots',
    'aether:chainmail_gloves',
    'aether:leather_gloves'
]

ItemEvents.tooltip(treeoflife => {
    dm_equipment.forEach(item => {
        treeoflife.add(item, [Text.translatable('item.desc.projecte_suit.desc1'),Text.translatable('item.desc.projecte_suit.desc2')])
    });
    golden_equipment.forEach(item => {
        treeoflife.add(item, [Text.translatable('item.desc.golden_suit.desc1')])
    });
    iron_equipment.forEach(item => {
        treeoflife.add(item, [Text.translatable('item.desc.iron_suit.desc1')])
    });
    light_equipment.forEach(item => {
        treeoflife.add(item, [Text.translatable('item.desc.light_suit.desc1')])
    });
});