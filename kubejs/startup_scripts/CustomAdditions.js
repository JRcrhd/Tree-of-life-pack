const $BuiltInRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries")

StartupEvents.registry('block', treeoflife => { 
    treeoflife.create('empty_dragon_egg').requiresTool(true).stoneSoundType().model('kubejs:block/empty_dragon_egg');
});

StartupEvents.registry('item', treeoflife => {
    treeoflife.create('point_malkuth').glow(true).texture('kubejs:item/point/malkuth').tag('treeoflife:point');
    treeoflife.create('point_yesod').glow(true).texture('kubejs:item/point/yesod').tag('treeoflife:point');
    treeoflife.create('point_netzach').glow(true).texture('kubejs:item/point/netzach').tag('treeoflife:point');
    treeoflife.create('point_hod').glow(true).texture('kubejs:item/point/hod').tag('treeoflife:point');
    treeoflife.create('point_tiphareth').glow(true).texture('kubejs:item/point/tiphareth').tag('treeoflife:point');
    treeoflife.create('point_chesed').glow(true).texture('kubejs:item/point/chesed').tag('treeoflife:point');
    treeoflife.create('point_geburah').glow(true).texture('kubejs:item/point/geburah').tag('treeoflife:point');
    treeoflife.create('point_chokmah').glow(true).texture('kubejs:item/point/chokmah').tag('treeoflife:point');
    treeoflife.create('point_binah').glow(true).texture('kubejs:item/point/binah').tag('treeoflife:point');
    treeoflife.create('point_kether').glow(true).texture('kubejs:item/point/kether').tag('treeoflife:point');
	
	treeoflife.create('template_assiah').texture('kubejs:item/point/assiah_template').tag('treeoflife:template');
	treeoflife.create('template_yetzirah').texture('kubejs:item/point/yetzirah_template').tag('treeoflife:template');
	treeoflife.create('template_beriah').texture('kubejs:item/point/beriah_template').tag('treeoflife:template');
	treeoflife.create('template_atziluth').texture('kubejs:item/point/atziluth_template').tag('treeoflife:template');
	
	treeoflife.create('dimension_alloy_overworld').texture('kubejs:item/point/dimension_alloy_overworld').tag('treeoflife:dimension_alloy').tag('forge:ingots');
	treeoflife.create('dimension_alloy_nether').texture('kubejs:item/point/dimension_alloy_nether').tag('treeoflife:dimension_alloy').tag('forge:ingots');
	treeoflife.create('dimension_alloy_the_end').texture('kubejs:item/point/dimension_alloy_the_end').tag('treeoflife:dimension_alloy').tag('forge:ingots');
	treeoflife.create('dimension_alloy_aether').texture('kubejs:item/point/dimension_alloy_aether').tag('treeoflife:dimension_alloy').tag('forge:ingots');

	treeoflife.create('alchemy').texture('kubejs:item/alchemy/icon');
	treeoflife.create('clairvoyance').texture('kubejs:item/clairvoyance/icon');
	treeoflife.create('divination').texture('kubejs:item/divination/icon');

	treeoflife.create('emerald_tablet').glow(true).texture('kubejs:item/emerald_tablet');
    treeoflife.create('emerald_tablet_piece_1').texture('kubejs:item/emerald_tablet_piece_1');
    treeoflife.create('emerald_tablet_piece_2').texture('kubejs:item/emerald_tablet_piece_2');
    treeoflife.create('emerald_tablet_piece_3').texture('kubejs:item/emerald_tablet_piece_3');
    treeoflife.create('empty_tarot').texture('kubejs:item/divination/empty_tarot');

    treeoflife.create('alchemy_black').glow(true).texture('kubejs:item/alchemy/black');
    treeoflife.create('alchemy_white').glow(true).texture('kubejs:item/alchemy/white');
    treeoflife.create('alchemy_yellow').glow(true).texture('kubejs:item/alchemy/yellow');
    treeoflife.create('alchemy_red').glow(true).texture('kubejs:item/alchemy/red');
    treeoflife.create('alchemy_in_phi').glow(true).texture('kubejs:item/alchemy/in_phi');

    treeoflife.create('earth_alloy_shard').texture('kubejs:item/tech/earth_alloy');
    treeoflife.create('ember_alloy_shard').texture('kubejs:item/tech/ember_alloy');
    treeoflife.create('void_alloy_shard').texture('kubejs:item/tech/void_alloy');
    treeoflife.create('sun_alloy_shard').texture('kubejs:item/tech/sun_alloy');

    treeoflife.create('magical_polonium').glow(true).texture('mekanism:item/pellet_polonium');

    treeoflife.create('holy_potion').texture('kubejs:item/holy_potion').maxStackSize(1)
        .rarity('epic')
        .useAnimation('drink')
        .use((level, player, hand) => {
            return true;
        })
        .useDuration(itemStack => 20)
        .finishUsing((itemstack, level, entity) => {
            if (level.isClientSide()) return itemstack
            entity.server.runCommandSilent(`/lichdom revoke ${entity.name.getString()}`)
            return;
        })

});

StartupEvents.registry('fluid', treeoflife => {
    treeoflife.create('sky_fluid')
        .thinTexture(0x67E0D4)
        .bucketColor(0x67E0D4)

        .temperature(280);

    treeoflife.create('witch_fluid')
        .thickTexture(0x090136)
        .bucketColor(0x090136)

        .temperature(330);

    treeoflife.create('dim_sky_fluid')
        .thinTexture(0x3087C2)
        .bucketColor(0x3087C2)

        .temperature(290);

    treeoflife.create('current_fluid')
        .thickTexture(0x072F4A)
        .bucketColor(0x072F4A)

        .temperature(300);

    treeoflife.create('sunlight_fluid')
        .thinTexture(0xFFF838)
        .bucketColor(0xFFF838)

        .temperature(320);
    
    treeoflife.create('molten_obsidian')
        .thickTexture(0x311140)
        .bucketColor(0x311140)

        .temperature(2000);

    treeoflife.create('molten_dark_steel')
        .thickTexture(0x000E2B)
        .bucketColor(0x000E2B)

        .temperature(1200);

    treeoflife.create('dark_light_fluid')
        .thinTexture(0x981232)
        .bucketColor(0x981232)

        .temperature(200);

    treeoflife.create('void_fluid')
        .thinTexture(0x561232)
        .bucketColor(0x561232)

        .temperature(1);

    treeoflife.create('chaos_fluid')
        .thickTexture(0x941012)
        .bucketColor(0x941012)

        .temperature(1500);

    treeoflife.create('molten_end_steel')
        .thickTexture(0xF0E68C)
        .bucketColor(0xF0E68C)

        .temperature(3000);

    treeoflife.create('aether_fluid')
        .thinTexture(0xAAAAAA)
        .bucketColor(0xAAAAAA)

        .temperature(0.1);

    treeoflife.create('root_fluid')
        .thinTexture(0xFFFFFF)
        .bucketColor(0xFFFFFF)

        .temperature(10000);

    treeoflife.create('clear_water_tier_1')
        .thinTexture(0x4C46FF)
        .bucketColor(0x4C46FF)


    treeoflife.create('clear_water_tier_2')
        .thinTexture(0x928EFF)
        .bucketColor(0x928EFF)


    treeoflife.create('clear_water_tier_3')
        .thinTexture(0xA29EEF)
        .bucketColor(0xA29EEF)


    treeoflife.create('vibrant_fluix')
        .thickTexture(0x8A2BE2)
        .bucketColor(0x8A2BE2)

        .temperature(400);

    treeoflife.create('stable_vibrant_fluix')
        .thickTexture(0x4B0082)
        .bucketColor(0x4B0082)

        .temperature(250);

    treeoflife.create('dragon_egg_fluid')
        .thickTexture(0x542054)
        .bucketColor(0x542054)

        .temperature(300);

    treeoflife.create('magicless_dragon_egg_fluid')
        .thickTexture(0x340034)
        .bucketColor(0x340034)

        .temperature(290);

    treeoflife.create('dragon_breath')
        .thickTexture(0xA470A4)
        .bucketColor(0xA470A4)

        .temperature(300);
});