ServerEvents.recipes(treeoflife => {
    treeoflife.smithing('kubejs:point_malkuth','kubejs:template_assiah','kubejs:alchemy_black','kubejs:dimension_alloy_overworld');
    treeoflife.smithing('3x kubejs:point_malkuth','kubejs:template_yetzirah','kubejs:alchemy_white','kubejs:dimension_alloy_nether');
    treeoflife.smithing('9x kubejs:point_malkuth','kubejs:template_beriah','kubejs:alchemy_yellow','kubejs:dimension_alloy_the_end');
    treeoflife.smithing('27x kubejs:point_malkuth','kubejs:template_atziluth','kubejs:alchemy_red','kubejs:dimension_alloy_aether');

    treeoflife.smithing('kubejs:point_yesod','kubejs:template_yetzirah','kubejs:point_malkuth','tarotcards:the_world');
    treeoflife.smithing('kubejs:point_hod','kubejs:template_yetzirah','kubejs:point_malkuth','tarotcards:judgement');
    treeoflife.smithing('kubejs:point_netzach','kubejs:template_yetzirah','kubejs:point_malkuth','tarotcards:the_moon');
    treeoflife.smithing('kubejs:point_hod','kubejs:template_yetzirah','kubejs:point_yesod','tarotcards:the_sun');
    treeoflife.smithing('kubejs:point_netzach','kubejs:template_yetzirah','kubejs:point_yesod','tarotcards:the_star');
    treeoflife.smithing('kubejs:point_netzach','kubejs:template_yetzirah','kubejs:point_hod','tarotcards:the_tower');
    treeoflife.smithing('kubejs:point_hod','kubejs:template_yetzirah','kubejs:point_netzach','tarotcards:the_tower');
	
	treeoflife.smithing('kubejs:point_tiphareth','kubejs:template_beriah','kubejs:point_yesod','tarotcards:temperance');
	treeoflife.smithing('kubejs:point_tiphareth','kubejs:template_beriah','kubejs:point_netzach','tarotcards:death');
	treeoflife.smithing('kubejs:point_tiphareth','kubejs:template_beriah','kubejs:point_hod','tarotcards:the_devil');
	treeoflife.smithing('kubejs:point_geburah','kubejs:template_beriah','kubejs:point_hod','tarotcards:the_hanged_man');
	treeoflife.smithing('kubejs:point_geburah','kubejs:template_beriah','kubejs:point_tiphareth','tarotcards:justice');
	treeoflife.smithing('kubejs:point_chesed','kubejs:template_beriah','kubejs:point_netzach','tarotcards:wheel_of_fortune');
	treeoflife.smithing('kubejs:point_chesed','kubejs:template_beriah','kubejs:point_tiphareth','tarotcards:the_hermit');
	treeoflife.smithing('kubejs:point_chesed','kubejs:template_beriah','kubejs:point_geburah','tarotcards:strength');
	treeoflife.smithing('kubejs:point_geburah','kubejs:template_beriah','kubejs:point_chesed','tarotcards:strength');
	
	treeoflife.smithing('kubejs:point_binah','kubejs:template_atziluth','kubejs:point_geburah','tarotcards:the_chariot');
	treeoflife.smithing('kubejs:point_binah','kubejs:template_atziluth','kubejs:point_tiphareth','tarotcards:the_lovers');
	treeoflife.smithing('kubejs:point_chokmah','kubejs:template_atziluth','kubejs:point_chesed','tarotcards:the_hierophant');
	treeoflife.smithing('kubejs:point_chokmah','kubejs:template_atziluth','kubejs:point_tiphareth','tarotcards:the_emperor');
	treeoflife.smithing('kubejs:point_kether','kubejs:template_atziluth','kubejs:point_tiphareth','tarotcards:the_high_priestess');
	treeoflife.smithing('kubejs:point_kether','kubejs:template_atziluth','kubejs:point_binah','tarotcards:the_magician');
	treeoflife.smithing('kubejs:point_kether','kubejs:template_atziluth','kubejs:point_chokmah','tarotcards:the_fool');
})