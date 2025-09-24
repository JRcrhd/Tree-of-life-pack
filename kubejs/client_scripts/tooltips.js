
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
    'projecte:gold_helmet',
    'projecte:gold_chestplate',
    'projecte:gold_leggings',
    'projecte:gold_boots'
]

ItemEvents.tooltip(treeoflife => {
    dm_equipment.forEach(item => {
        treeoflife.add(item, [Text.translatable('item.desc.projecte_suit.desc1'),Text.translatable('item.desc.projecte_suit.desc2')])
    });
    golden_equipment.forEach(item => {
        treeoflife.add(item, [Text.translatable('item.desc.golden_suit.desc1')])
    });
});