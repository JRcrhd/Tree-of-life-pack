global.mekStackAdditions = [
    {material: 'iesnium', color: '#66A3FE', makeDust: true},
    {material: 'zinc', color: '#BAC8C9', makeDust: true},
    {material: 'silver', color: '#D8D7D2', makeDust: true},
    {material: 'nickel', color: '#B6B454', makeDust: true}
]

const $Slurry = Java.loadClass('mekanism.api.chemical.slurry.Slurry')
const $SlurryBuilder = Java.loadClass('mekanism.api.chemical.slurry.SlurryBuilder')
const $Gas = Java.loadClass('mekanism.api.chemical.gas.Gas')
const $GasBuilder = Java.loadClass('mekanism.api.chemical.gas.GasBuilder')

StartupEvents.registry('item', treeoflife => {
    const mekItems = ['clump', 'crystal', 'dirty_dust', 'shard']
    function mekStack(name, color) {
        mekItems.forEach(type => {
            treeoflife.create(`${type}_${name}`)
                .texture('layer0', 'mekanism:item/empty')
                .texture('layer1', `mekanism:item/${type}`)
                .texture('layer2', `mekanism:item/${type}_overlay`)
                .color(1, color)
                .tag(`mekanism:${type}s`)
                .tag(`mekanism:${type}s/${name}`)
        });
    }
    global.mekStackAdditions.forEach(entry => {
        mekStack(entry.material, entry.color)
        if (entry.makeDust) {
            treeoflife.create(`dust_${entry.material}`)
                .texture('layer0', 'mekanism:item/empty')
                .texture('layer1', `mekanism:item/dust`)
                .color(1, entry.color)
                .tag(`forge:dusts`)
                .tag(`forge:dusts/${entry.material}`)
        }
    });
});

StartupEvents.registry('mekanism:slurry', treeoflife => {
    global.mekStackAdditions.forEach(entry => {
        treeoflife.createCustom(`clean_${entry.material}`, () => 
            $Slurry($SlurryBuilder.clean()
                .ore(`forge:ores/${entry.material}`)
                .tint(Color.of(entry.color).getRgbJS())
            )
        )
        treeoflife.createCustom(`dirty_${entry.material}`, () => 
            $Slurry($SlurryBuilder.dirty()
                .ore(`forge:ores/${entry.material}`)
                .tint(Color.of(entry.color).getRgbJS())
            )
        )
    });
});

StartupEvents.registry('mekanism:gas', treeoflife => {
    treeoflife.createCustom(`clear_water_tier_2_vapor`, () => $Gas($GasBuilder.builder()));
    treeoflife.createCustom(`vibrant_fluix_gas`, () => $Gas($GasBuilder.builder()));
    treeoflife.createCustom(`stable_vibrant_fluix_gas`, () => $Gas($GasBuilder.builder()));
    treeoflife.createCustom(`chaos_gas`, () => $Gas($GasBuilder.builder()));
    treeoflife.createCustom(`magicless_dragon_egg_gas`, () => $Gas($GasBuilder.builder()));
    treeoflife.createCustom(`god_essence`, () => $Gas($GasBuilder.builder()));
    treeoflife.createCustom(`aeternalis`, () => $Gas($GasBuilder.builder()));
});