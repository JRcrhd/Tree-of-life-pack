const $BuiltInRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries")

StartupEvents.registry('item', treeoflife => {
    treeoflife.create('point_malkuth').displayName('王国——Malkuth').glow(true).texture('kubejs:item/point/malkuth').tag('treeoflife:point');
    treeoflife.create('point_yesod').displayName('基础——Yesod').glow(true).texture('kubejs:item/point/yesod').tag('treeoflife:point');
    treeoflife.create('point_netzach').displayName('永恒——Netzach').glow(true).texture('kubejs:item/point/netzach').tag('treeoflife:point');
    treeoflife.create('point_hod').displayName('荣耀——Hod').glow(true).texture('kubejs:item/point/hod').tag('treeoflife:point');
    treeoflife.create('point_tiphareth').displayName('美丽——Tiphareth').glow(true).texture('kubejs:item/point/tiphareth').tag('treeoflife:point');
    treeoflife.create('point_chesed').displayName('慈悲——Chesed').glow(true).texture('kubejs:item/point/chesed').tag('treeoflife:point');
    treeoflife.create('point_geburah').displayName('严厉——Geburah').glow(true).texture('kubejs:item/point/geburah').tag('treeoflife:point');
    treeoflife.create('point_chokmah').displayName('智慧——Chokmah').glow(true).texture('kubejs:item/point/chokmah').tag('treeoflife:point');
    treeoflife.create('point_binah').displayName('理解——Binah').glow(true).texture('kubejs:item/point/binah').tag('treeoflife:point');
    treeoflife.create('point_kether').displayName('王冠——Kether').glow(true).texture('kubejs:item/point/kether').tag('treeoflife:point');
	
	treeoflife.create('template_assiah').displayName('Assiah晋升模板').texture('kubejs:item/point/assiah_template').tag('treeoflife:template');
	treeoflife.create('template_yetzirah').displayName('Yetzirah晋升模板').texture('kubejs:item/point/yetzirah_template').tag('treeoflife:template');
	treeoflife.create('template_beriah').displayName('Beriah晋升模板').texture('kubejs:item/point/beriah_template').tag('treeoflife:template');
	treeoflife.create('template_atziluth').displayName('Atziluth晋升模板').texture('kubejs:item/point/atziluth_template').tag('treeoflife:template');
	
	treeoflife.create('dimension_alloy_overworld').displayName('主世界维度合金').texture('kubejs:item/point/dimension_alloy_overworld').tag('treeoflife:dimension_alloy').tag('forge:ingots');
	treeoflife.create('dimension_alloy_nether').displayName('下界维度合金').texture('kubejs:item/point/dimension_alloy_nether').tag('treeoflife:dimension_alloy').tag('forge:ingots');
	treeoflife.create('dimension_alloy_the_end').displayName('末地维度合金').texture('kubejs:item/point/dimension_alloy_the_end').tag('treeoflife:dimension_alloy').tag('forge:ingots');
	treeoflife.create('dimension_alloy_aether').displayName('以太维度合金').texture('kubejs:item/point/dimension_alloy_aether').tag('treeoflife:dimension_alloy').tag('forge:ingots');

	treeoflife.create('alchemy').displayName('炼金').texture('kubejs:item/alchemy/icon');
	treeoflife.create('clairvoyance').displayName('通灵').texture('kubejs:item/clairvoyance/icon');
	treeoflife.create('divination').displayName('占卜').texture('kubejs:item/divination/icon');

	treeoflife.create('emerald_tablet').displayName('§2§l《翠玉录》§r').glow(true).texture('kubejs:item/emerald_tablet');
    treeoflife.create('emerald_tablet_piece_1').displayName('§2石板碎片—1§r').texture('kubejs:item/emerald_tablet_piece_1');
    treeoflife.create('emerald_tablet_piece_2').displayName('§2石板碎片—2§r').texture('kubejs:item/emerald_tablet_piece_2');
    treeoflife.create('emerald_tablet_piece_3').displayName('§2石板碎片—3§r').texture('kubejs:item/emerald_tablet_piece_3');
    treeoflife.create('empty_tarot').displayName('空塔罗牌').texture('kubejs:item/divination/empty_tarot');

    treeoflife.create('alchemy_black').displayName('黑化').glow(true).texture('kubejs:item/alchemy/black');
    treeoflife.create('alchemy_white').displayName('白化').glow(true).texture('kubejs:item/alchemy/white');
    treeoflife.create('alchemy_yellow').displayName('黄化').glow(true).texture('kubejs:item/alchemy/yellow');
    treeoflife.create('alchemy_red').displayName('赤化').glow(true).texture('kubejs:item/alchemy/red');
    treeoflife.create('alchemy_in_phi').displayName('未完工的贤者之石').glow(true).texture('kubejs:item/alchemy/in_phi');

    treeoflife.create('earth_alloy_shard').displayName('大地合金残片').texture('kubejs:item/tech/earth_alloy');
    
});

StartupEvents.registry('fluid', treeoflife => {
    treeoflife.create('sky_fluid')
        .thinTexture(0x67E0D4)
        .bucketColor(0x67E0D4)
        .displayName('天空流体');

    treeoflife.create('witch_fluid')
        .thickTexture(0x090136)
        .bucketColor(0x090136)
        .displayName('巫术流体');

    treeoflife.create('dim_sky_fluid')
        .thinTexture(0x3087C2)
        .bucketColor(0x3087C2)
        .displayName('暗淡的天空流体');

    treeoflife.create('current_fluid')
        .thickTexture(0x072F4A)
        .bucketColor(0x072F4A)
        .displayName('微缩洋流');

    treeoflife.create('sunlight_fluid')
        .thinTexture(0xFFF838)
        .bucketColor(0xFFF838)
        .displayName('日光');
    
    treeoflife.create('molten_obsidian')
        .thickTexture(0x311140)
        .bucketColor(0x311140)
        .displayName('熔融黑曜石')
        .temperature(2000);

    treeoflife.create('molten_dark_steel')
        .thickTexture(0x000E2B)
        .bucketColor(0x000E2B)
        .displayName('熔融玄钢')
        .temperature(1200);
});