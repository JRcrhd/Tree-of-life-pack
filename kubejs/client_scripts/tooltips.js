
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

ItemEvents.tooltip(treeoflife => {
    dm_equipment.forEach(item => {
        treeoflife.add(item, ['item.desc.dm_suit.desc1','item.desc.dm_suit.desc2'])
    })
});