const $BuiltInRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries")

StartupEvents.registry('block', treeoflife => {
    //treeoflife.create('magical_soil').displayName('§bMagical Soil').grassSoundType().mapColor('grass').hardness(0.6);
})

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

	treeoflife.create('alchemy').displayName('炼金').texture('kubejs:item/alchemy/icon');
	treeoflife.create('clairvoyance').displayName('通灵').texture('kubejs:item/clairvoyance/icon');
	treeoflife.create('divination').displayName('占卜').texture('kubejs:item/divination/icon');

    treeoflife.create('alchemy_black').displayName('黑化').glow(true).texture('kubejs:item/alchemy/black');
    treeoflife.create('alchemy_white').displayName('白化').glow(true).texture('kubejs:item/alchemy/white');
    treeoflife.create('alchemy_yellow').displayName('黄化').glow(true).texture('kubejs:item/alchemy/yellow');
    treeoflife.create('alchemy_red').displayName('赤化').glow(true).texture('kubejs:item/alchemy/red');
    treeoflife.create('alchemy_in_phi').displayName('未完工的贤者之石').glow(true).texture('kubejs:item/alchemy/in_phi');
})