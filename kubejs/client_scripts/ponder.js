Ponder.registry(treeoflife => {
    treeoflife.create(['forbidden_arcanus:hephaestus_forge'])
       .scene(
           "kubejs:hephaestus_forge",
           "Hephaestus Forge",
           "kubejs:hephaestus_forge",
           (scene, util) => {
            scene.idle(20)
            scene.world.showSection([0, 0, 0, 8, 8, 8], Direction.down)

            scene.showBasePlate()
            scene.idle(20)  
            scene.idle(20)

            scene.addKeyframe()
            scene.text(50, "This is roughly the base pattern of the Hephaestus Forge")
            scene.idle(60)
            scene.overlay.showOutline("red", {}, [8, 0, 8, 0, 0, 0], 70)
            scene.text(50, "The four corners of this multiblock structure must be empty").colored(PonderPalette.RED)
            scene.idle(60)
            scene.text(80, "You need 48 Polished Darkstone, 9 Mysterious Polished Darkstone, 4 Carved Mysterious Polished Darkstone, 1 Smithing Table, and 1 Mundabitur Dust").colored(PonderPalette.RED)
            scene.idle(90)
            
            scene.addKeyframe()
            scene.text(70, "Right-click the Smithing Table in the middle with Mundabitur Dust").colored(PonderPalette.RED)
            scene.showControls(40, [4, 2, 4], 'down')
            .rightClick().withItem('forbidden_arcanus:mundabitur_dust')
            scene.idle(80)
            scene.world.setBlock([4, 1, 4], "forbidden_arcanus:hephaestus_forge", true)

            scene.idle(2)
            scene.idle(20)

            scene.addKeyframe()
            scene.idle(10)
            let block1 = [
				[4, 1, 7],
				[7, 1, 4],
				[1, 1, 4],
				[4, 1, 1],
				[6, 1, 6],
				[6, 1, 2],
				[2, 1, 6],
				[2, 1, 2],
			]
			block1.forEach((pos) => {
				scene.world.setBlock(pos, "forbidden_arcanus:darkstone_pedestal", true)
				scene.idle(2)
			})
            scene.idle(2)
            scene.text(50, "Place pedestals to enable crafting")
            scene.idle(60)

            scene.addKeyframe()
            scene.world.setBlock([6, 1, 6], "forbidden_arcanus:arcane_polished_darkstone", true)
            scene.world.setBlock([6, 2, 6], "forbidden_arcanus:arcane_crystal_block", true)
            scene.world.setBlock([6, 3, 6], "forbidden_arcanus:arcane_crystal_block", true)
            scene.showControls(40, [6.5, 1.5, 6.5], 'left')
            .rightClick().withItem('forbidden_arcanus:mundabitur_dust')
            scene.text(60, "You can place some Arcane Crystal Obelisks to provide the Aureal needed for forging")
            scene.idle(70)
        });

treeoflife.create(['expatternprovider:assembler_matrix_wall', 'expatternprovider:assembler_matrix_frame', 'expatternprovider:assembler_matrix_glass', 'expatternprovider:assembler_matrix_pattern','expatternprovider:assembler_matrix_crafter','expatternprovider:assembler_matrix_speed'])
    .scene('assembler_matrix','Assembler Matrix', 'kubejs:crafting_matrix', (scene, util) => {
        scene.world.showSection([0, 0, 0, 9, 0, 9], Facing.down);
        scene.idle(10);
        scene.text(60, 'The Assembler Matrix can function as a Molecular Assembler', [0, 2.5, 4.5]).placeNearTarget().attachKeyFrame();
        scene.world.showSection([1, 1, 1, 8, 7, 8], Facing.down);
        scene.idle(80)
        scene.text(60, 'The walls can be made with Assembler Matrix Glass', [7.5, 2.5, 5.5]).placeNearTarget().attachKeyFrame();
        scene.idle(10);
        scene.world.hideSection([0, 2, 0, 6, 7, 6], Facing.up);
        scene.idle(60);
        scene.text(80, 'The number of components inside affects the performance of the Assembler Matrix', [2.5, 3, 4.5]).attachKeyFrame();
        scene.idle(90);
		scene.world.showSection([6, 2, 6, 6, 6, 6], Facing.down);
		scene.idle(10);
		scene.text(60, 'Up to 5 Speed Components can be used to increase crafting speed', [4, 4.5, 2.5]).placeNearTarget().attachKeyFrame();
		scene.idle(70);
		scene.world.showSection([2, 2, 6, 5, 6, 6], Facing.down);
		scene.idle(10);
		scene.text(60, 'Pattern Components increase pattern capacity, each providing 36 slots', [2, 4.5, 2.5]).placeNearTarget().attachKeyFrame();
		scene.idle(70);
		scene.world.showSection([2, 2, 5, 6, 6, 5], Facing.down);
		scene.idle(30);
		scene.world.showSection([2, 2, 2, 6, 6, 4], Facing.down);
		scene.idle(30);
		scene.text(60, 'Crafting Components increase concurrent recipe count, each providing 8 parallel operations', [3.5, 4.5, 3.5]).placeNearTarget().attachKeyFrame();
		scene.idle(70);
		scene.world.showSection([1, 1, 1, 8, 7, 8], Facing.down);
		scene.idle(30);
		scene.text(30, 'Maximum size is 7x7x7, and interior cannot contain air blocks', [3.5, 4.5, 0]).placeNearTarget().attachKeyFrame();
		scene.idle(40);
		scene.world.showSection([0, 0, 0, 8, 8, 8], Facing.down);
		scene.idle(10);
		scene.text(40, 'AE cables can connect to any part', [1.5, 4.5, 0]).placeNearTarget().attachKeyFrame();
		scene.idle(50);
    });

    treeoflife.create([
		'mekanism:induction_casing',
		'mekanism:induction_port'
		])
	    .scene('induction_mek','Mekanism: Induction Matrix', 'kubejs:induction_matrix',
	    (scene, util) => {
			scene.world.showSection([0, 0, 0, 4, 4, 4], Facing.down);
            scene.idle(10);
			scene.text(80, 'The Induction Matrix is used to store tons of Power.', [0, 4.5, 4.5]).placeNearTarget().attachKeyFrame();
			scene.idle(85);
			scene.world.hideSection([0, 0, 0, 4, 4, 4], Facing.up);
			scene.idle(10);
			scene.world.showSection([4, 0, 4], Facing.down);
            scene.idle(5);
			
			[1, 2, 3, 4].forEach(num => {
                scene.world.showSection([4, num, 4], Facing.down);
                scene.world.showSection([4, 0, 4 - num], Facing.down);
                scene.world.showSection([4 - num, 0, 4], Facing.down);
                scene.idle(5)
            });

            [1, 2, 3].forEach(num => {
                scene.world.showSection([4, 4, 4 - num], Facing.down);
                scene.world.showSection([4 - num, 4, 4], Facing.down);
                scene.world.showSection([0, 0, 4 - num], Facing.down);
                scene.world.showSection([4 - num, 0, 0], Facing.down);
                scene.world.showSection([0, num, 4], Facing.down);
                scene.world.showSection([4, num, 0], Facing.down);
                scene.idle(5);
			});
			
			scene.text(80, 'The Edges Must Be Casings', [0, 4.5, 4.5]).placeNearTarget().attachKeyFrame();
			scene.idle(5);
			
			scene.world.showSection([4, 4, 0], Facing.down);
            scene.world.showSection([0, 4, 4], Facing.down);
            scene.world.showSection([0, 0, 0], Facing.down);
            scene.idle(5);
			
			[1, 2, 3].forEach(num => {
                scene.world.showSection([0, num, 0], Facing.down);
                scene.world.showSection([0, 4, 4 - num], Facing.down);
                scene.world.showSection([4 - num, 4, 0], Facing.down);
                scene.idle(5)
			});

            scene.world.showSection([0, 4, 0], Facing.down);
            scene.idle(60);
			scene.text(80, 'The Faces Can Be Either Casings Or Structural Glass.', [0, 2.5, 2.5]).placeNearTarget().attachKeyFrame();

            scene.world.showSection([1, 4, 1, 3, 4, 3], Facing.down);
            scene.idle(5)
            scene.world.showSection([1, 0, 1, 3, 0, 3], Facing.up);
            scene.idle(5)
            scene.world.showSection([1, 1, 0, 3, 3, 0], Facing.south);
            scene.idle(5)
            scene.world.showSection([1, 1, 4, 3, 3, 4], Facing.north);
            scene.idle(5)
            scene.world.showSection([0, 1, 1, 0, 3, 3], Facing.east);
            scene.idle(5)
            scene.world.showSection([4, 1, 1, 4, 3, 3], Facing.west);
            scene.idle(80);

			scene.text(60, 'Ports Are Used To Transfer Power.', [1.5, 1.5, 0]).placeNearTarget().attachKeyFrame();
			scene.idle(80);
			
			scene.text(80, 'Ports Can Be Changed Using A Configurator.', [1.5, 1.5, 0]).placeNearTarget().attachKeyFrame();
			scene.showControls(80, [1.5, 2.5, 0], 'down').rightClick().withItem('mekanism:configurator').whileSneaking();
			scene.world.modifyBlock([1, 1, 0], (curState) => curState.with("active", "false"), true);
			scene.idle(20);
			scene.world.modifyBlock([1, 1, 0], (curState) => curState.with("active", "true"), true);
			scene.idle(60);
			
			// Inside Part
			
			scene.world.hideSection([0, 1, 0, 3, 4, 0], Facing.up)
			scene.world.hideSection([0, 1, 0, 0, 4, 3], Facing.up)
			scene.world.hideSection([1, 4, 1, 3, 4, 3], Facing.up)
			scene.idle(20);
			
			scene.text(60, 'Induction Cells Are Used To Increase Power Storage.', [2.5, 1.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.world.setBlock([2, 1, 2], 'mekanism:basic_induction_cell', false);
            scene.world.showSection([2, 1, 2], Facing.down)
            scene.idle(65);
			scene.text(60, 'Induction Providers Are Used To Increase Power Transfer Rate.', [2.5, 2.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.world.setBlock([2, 2, 2], 'mekanism:basic_induction_provider', false);
            scene.world.showSection([2, 2, 2], Facing.down)
            scene.idle(65)
			
			scene.text(60, 'The Matrix Must Have One Cell and One Provider.', [2, 2.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.idle(65)
			scene.world.showSection([0, 1, 0, 3, 4, 0], Facing.up)
			scene.world.showSection([0, 1, 0, 0, 4, 3], Facing.up)
			scene.world.showSection([1, 4, 1, 3, 4, 3], Facing.up)
			scene.idle(10);
    });

    treeoflife.create([
	    'mekanism:sps_casing',
	    'mekanism:sps_port',
	    'mekanism:supercharged_coil'])
	    .scene('sps','Mekanism: Supercritical Phase Shifter (SPS)', 'kubejs:sps',
	    (scene, util) => {
			scene.world.showSection([0, 0, 0, 6, 7, 6], Facing.down);
			scene.setSceneOffsetY(-1);
            scene.idle(20);
			scene.text(60, 'The SPS converts Polonium into Antimatter Gas using a large amount of power', [0, 3.5, 6.5]).placeNearTarget();
			scene.addKeyframe();
			scene.idle(80)
			
			scene.addKeyframe()
			scene.text(60, 'Ports Can Be Changed Using A Configurator', [2.5, 1.5, 0]).placeNearTarget();
			scene.showControls(60, [2.5, 2.5, 0], 'down').rightClick().withItem('mekanism:configurator').whileSneaking();
			scene.idle(10);
			scene.world.modifyBlock([2, 1, 0], (curState) => curState.with("active", "true"), false);
			scene.idle(20);
			scene.world.modifyBlock([2, 1, 0], (curState) => curState.with("active", "false"), false);
			scene.idle(40);
			scene.world.hideSection([0, 0, 0, 6, 6, 5], Facing.up);
			scene.idle(10);
			scene.text(60, 'The SPS is built using this pattern for each face.', [2.5, 4, 5]).placeNearTarget().attachKeyFrame();
			scene.idle(60);
			scene.world.showSection([6, 0, 0, 6, 7, 5], Facing.down);
			scene.idle(10);
			scene.text(60, 'On one side, you will need a Port in the middle to input power.', [5.5, 4, 3]).placeNearTarget().attachKeyFrame();
			scene.idle(70);
			scene.world.showSection([5, 3, 3], Facing.down);
			scene.text(60, 'On the inside, place a Supercharged Coil on the Port.', [5, 4, 3]).placeNearTarget().attachKeyFrame();
			scene.idle(80);
			scene.world.showSection([0, 0, 0, 0, 6, 5], Facing.down);
			scene.idle(30);
			scene.world.showSection([1, 3, 3], Facing.down);
			scene.text(60, 'You can also use two Supercharged Coils for max power usage.', [0, 4, 3]).placeNearTarget().attachKeyFrame();
			scene.idle(80);
			scene.world.showSection([1, 0, 0, 5, 0, 5], Facing.down);
			scene.idle(30);
			scene.world.showSection([1, 6, 0, 5, 6, 5], Facing.down);
			scene.idle(30);
			scene.world.showSection([1, 1, 0, 5, 5, 0], Facing.down);
			scene.idle(30);
			scene.text(60, 'You will need one Port for inputting Polonium.', [4.5, 1.5, 0]).placeNearTarget().attachKeyFrame();
			scene.idle(70);
			scene.world.modifyBlock([2, 1, 0], (curState) => curState.with("active", "true"), true);
			scene.text(60, 'And another for exporting Antimatter Gas.', [2.5, 1.5, 0]).placeNearTarget().attachKeyFrame();
			scene.idle(70);
    });

treeoflife.create('mekanismgenerators:fission_reactor_casing')
    .scene('fission_mek','Mekanism Fission Reactor', 'kubejs:fission_mek', (scene, util) => {
        scene.world.showSection([4, 0, 4], Facing.down);
        scene.idle(5);
        [1, 2, 3, 4].forEach(num => {
            scene.world.showSection([4, num, 4], Facing.down);
            scene.world.showSection([4, 0, 4 - num], Facing.down);
            scene.world.showSection([4 - num, 0, 4], Facing.down);
            scene.idle(5)
        });
        [1, 2, 3].forEach(num => {
            scene.world.showSection([4, 4, 4 - num], Facing.down);
            scene.world.showSection([4 - num, 4, 4], Facing.down);
            scene.world.showSection([0, 0, 4 - num], Facing.down);
            scene.world.showSection([4 - num, 0, 0], Facing.down);
            scene.world.showSection([0, num, 4], Facing.down);
            scene.world.showSection([4, num, 0], Facing.down);
            scene.idle(5)
        });
        scene.text(80, 'The Edges Must Be Casings', [0, 4.5, 4.5]).placeNearTarget();
        scene.world.showSection([4, 4, 0], Facing.down);
        scene.world.showSection([0, 4, 4], Facing.down);
        scene.world.showSection([0, 0, 0], Facing.down);
        scene.idle(5);
        [1, 2, 3].forEach(num => {
            scene.world.showSection([0, num, 0], Facing.down);
            scene.world.showSection([0, 4, 4 - num], Facing.down);
            scene.world.showSection([4 - num, 4, 0], Facing.down);
            scene.idle(5)
        });
        scene.world.showSection([0, 4, 0], Facing.down);
        scene.addKeyframe();
        scene.idle(80);
        scene.world.showSection([1, 4, 1, 3, 4, 3], Facing.down);
        scene.idle(5)
        scene.world.showSection([1, 0, 1, 3, 0, 3], Facing.up);
        scene.idle(5)
        scene.world.showSection([1, 1, 0, 3, 3, 0], Facing.south);
        scene.idle(5)
        scene.world.showSection([1, 1, 4, 3, 3, 4], Facing.north);
        scene.idle(5)
        scene.world.showSection([0, 1, 1, 0, 3, 3], Facing.east);
        scene.idle(5)
        scene.text(80, 'The Walls Can Be Either Casings Or Glass', [0, 2.5, 2.5]).placeNearTarget();
        scene.world.showSection([4, 1, 1, 4, 3, 3], Facing.west);
        scene.addKeyframe();
        scene.idle(80);
        scene.world.hideSection([0, 1, 0, 3, 4, 0], Facing.up)
        scene.world.hideSection([0, 1, 0, 0, 4, 3], Facing.up)
        scene.world.hideSection([1, 4, 1, 3, 4, 3], Facing.up)
        scene.idle(10);
        scene.text(60, 'Place Fuel Assembly Blocks Inside To Make The Fuel Rods', [2.5, 2.5, 2.5]).placeNearTarget();
        scene.world.setBlock([2, 1, 2], 'mekanismgenerators:fission_fuel_assembly', false);
        scene.world.showSection([2, 1, 2], Facing.down)
        scene.idle(10)
        scene.world.setBlock([2, 2, 2], 'mekanismgenerators:fission_fuel_assembly', false);
        scene.world.showSection([2, 2, 2], Facing.down)
        scene.idle(10)
        scene.addKeyframe();
        scene.idle(40);
        scene.world.setBlock([2, 3, 2], 'mekanismgenerators:control_rod_assembly', false);
        scene.world.showSection([2, 3, 2], Facing.down)
        scene.idle(10)
        scene.text(60, 'Place Control Rod Assembly At The Top Of Each Fuel Rod', [2.5, 3.5, 2.5]).placeNearTarget();
        scene.idle(20);
        scene.addKeyframe();
        scene.idle(60);
        scene.world.showSection([0, 1, 0, 3, 4, 0], Facing.up)
        scene.world.showSection([0, 1, 0, 0, 4, 3], Facing.up)
        scene.world.showSection([1, 4, 1, 3, 4, 3], Facing.up)
        scene.addKeyframe();
        scene.idle(40);
    });

treeoflife.create(['mekanismgenerators:fission_fuel_assembly', 'mekanismgenerators:control_rod_assembly'])
    .scene('fission_mek_fuelrod','Mekanism Fission Reactor: Fuel Assembly', 'kubejs:fission_mek', (scene, util) => {
        scene.world.showSection([0, 0, 0, 4, 4, 4], Facing.down);
        scene.idle(20);
        scene.world.hideSection([0, 1, 0, 3, 4, 3], Facing.up);
        scene.idle(20);
        scene.text(80, 'Place Fuel Assembly Blocks Inside To Make The Fuel Rods', [2.5, 2.5, 2.5]).placeNearTarget().attachKeyFrame();
        scene.world.setBlock([2, 1, 2], 'mekanismgenerators:fission_fuel_assembly', true);
        scene.world.showSection([2, 1, 2], Facing.down)
        scene.idle(10);
        scene.world.setBlock([2, 2, 2], 'mekanismgenerators:fission_fuel_assembly', true);
        scene.world.showSection([2, 2, 2], Facing.down)
        scene.idle(80);
			
			scene.text(120, 'Fuel Rods are created with several Fission Fuel Assembly blocks with a Control Rod Assembly on top.', [1.5, 2.5, 2.5]).placeNearTarget();
			scene.idle(40);
			scene.addKeyframe();
			scene.world.setBlock([2, 3, 2], 'mekanismgenerators:control_rod_assembly', true);
			scene.world.showSection([2, 3, 2], Facing.down)
			scene.idle(80);
			
			scene.text(80, 'Place Control Rod Assembly At The Top Of Each Fuel Rod', [1.5, 3.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.idle(90);
			
			scene.text(80, 'Control Rod Assembly blocks are placed 1 block from the ceiling.', [1.5, 3.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.idle(90);
			
			scene.text(60, 'Fuel Rods Cannot Touch', [1.5, 1.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.world.setBlock([1, 1, 2], 'mekanismgenerators:fission_fuel_assembly', true);
			scene.world.setBlock([3, 1, 2], 'mekanismgenerators:fission_fuel_assembly', true);
            scene.world.showSection([1, 1, 2], Facing.down)
			scene.world.showSection([3, 1, 2], Facing.down)
			scene.idle(60)
			scene.world.setBlock([1, 1, 2], 'air', true);
			scene.world.setBlock([3, 1, 2], 'air', true);
			scene.idle(40);
			
			scene.world.hideSection([1, 1, 1, 3, 3, 3], Facing.up);
			scene.idle(40);
			scene.world.setBlock([1, 1, 1], 'mekanismgenerators:fission_fuel_assembly', true);
			scene.world.setBlock([1, 2, 1], 'mekanismgenerators:fission_fuel_assembly', true);
			scene.world.setBlock([1, 3, 1], 'mekanismgenerators:control_rod_assembly', true);
			scene.world.setBlock([1, 1, 3], 'mekanismgenerators:fission_fuel_assembly', true);
			scene.world.setBlock([1, 2, 3], 'mekanismgenerators:fission_fuel_assembly', true);
			scene.world.setBlock([1, 3, 3], 'mekanismgenerators:control_rod_assembly', true);
			scene.world.setBlock([3, 1, 1], 'mekanismgenerators:fission_fuel_assembly', true);
			scene.world.setBlock([3, 2, 1], 'mekanismgenerators:fission_fuel_assembly', true);
			scene.world.setBlock([3, 3, 1], 'mekanismgenerators:control_rod_assembly', true);
			scene.world.setBlock([3, 1, 3], 'mekanismgenerators:fission_fuel_assembly', true);
			scene.world.setBlock([3, 2, 3], 'mekanismgenerators:fission_fuel_assembly', true);
			scene.world.setBlock([3, 3, 3], 'mekanismgenerators:control_rod_assembly', true);
			scene.world.showSection([1, 1, 1, 3, 3, 3], Facing.down);
			
			scene.text(80, 'Multiple Fuel Rods work best in a checkerboard pattern.', [1.5, 1.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.idle(100);
			
			scene.world.showSection([0, 1, 0, 3, 4, 0], Facing.down)
			scene.idle(5);
			scene.world.showSection([0, 1, 1, 0, 4, 3], Facing.down)
			scene.idle(5);
			scene.world.showSection([1, 4, 1, 3, 4, 3], Facing.down);
			scene.idle(20);
			
		
    });

treeoflife.create('mekanismgenerators:fission_reactor_logic_adapter')
    .scene('fission_mek_logic','Mekanism Fission Reactor: Logic Adapters', 'kubejs:fission_logic_example', (scene, util) => {
        scene.world.showSection([0, 0, 2, 4, 4, 6], Facing.down);
        scene.world.setBlock([2, 3, 2], 'mekanismgenerators:reactor_glass', false);
        scene.idle(20);
        scene.text(60, 'Logic Adapters allow Redstone Control for Reactors.', [2.5, 1.5, 2]).placeNearTarget().attachKeyFrame();
        scene.idle(80)
        scene.text(60, 'Right Click to Open Configuration Settings', [2.5, 1.5, 2]).placeNearTarget().attachKeyFrame();
        scene.showControls(60, [2.5, 2.5, 2], 'down').rightClick();
        scene.idle(70);
        scene.text(80, 'With two, you can set up a Fail Safe that can shut off the Reactor under certain conditions.', [2.5, 3.5, 2]).placeNearTarget().attachKeyFrame();
        scene.world.setBlock([2, 3, 2], 'mekanismgenerators:fission_reactor_logic_adapter', true);
        scene.idle(90);
        scene.text(60, 'Set this one to Activation', [2.5, 3.5, 2]).placeNearTarget().attachKeyFrame();
        scene.idle(60);
        scene.text(60, 'Set this one to Damage Critical.', [2.5, 1.5, 2]).placeNearTarget().attachKeyFrame();
        scene.idle(70);
			
			scene.world.showSection([2, 0, 0], Facing.down);
			scene.idle(5);
			scene.world.showSection([2, 0, 1], Facing.down);
			scene.idle(5);
			scene.world.showSection([2, 1, 1], Facing.down);
			scene.idle(5);
			
			scene.text(60, 'When the Reactor has Critical Damage, it will give off a redstone signal.', [2.5, 1.5, 2]).placeNearTarget().attachKeyFrame();
			scene.idle(10);
			scene.idle(60);
			
			scene.world.setBlock([2, 2, 0], 'minecraft:gravel', false);
			//scene.world.modifyBlock([2, 3, 1], () => Block.id("minecraft:observer").with("facing", "north"), false);
			scene.world.showSection([2, 1, 0, 2, 3, 0], Facing.down);
			scene.world.showSection([2, 3, 1], Facing.down);
			scene.idle(20);
			
			scene.text(80, 'We can use this to activate a piston with gravel or sand on it to activate an Observer.', [2.5, 1.5, 1]).placeNearTarget().attachKeyFrame();
			scene.idle(5);
			
			scene.world.modifyBlock([2, 1, 1], (curState) => curState.with("power", "15"), false);
			scene.world.modifyBlock([2, 1, 0], (curState) => curState.with("extended", "true"), false);
			scene.world.setBlock([2, 3, 0], 'minecraft:gravel', false);
			scene.world.setBlock([2, 2, 0], 'minecraft:piston_head', false);
			scene.world.modifyBlock([2, 2, 0], (curState) => curState.with("facing", "up"), false);
			scene.idle(90);
			
			scene.text(120, 'This is an Oberserver facing towards the Gravel. The Gravel will activate it and turn off the reactor.', [2.5, 3.5, 2]).placeNearTarget().attachKeyFrame();
			scene.idle(60);
			
    });

treeoflife.create('mekanismgenerators:fission_reactor_port')
    .scene('fission_mek_port','Mekanism Fission Reactor: Ports', 'kubejs:fission_mek', (scene, util) => {
        scene.showStructure();
        scene.idle(20);
        scene.world.setBlock([0, 1, 1], 'mekanismgenerators:fission_reactor_port', true);
        scene.world.setBlock([0, 1, 3], 'mekanismgenerators:fission_reactor_port', true);
        scene.world.modifyBlock([0, 1, 1], (curState) => curState.with("mode", "output_waste"), false);
        scene.world.modifyBlock([0, 1, 3], (curState) => curState.with("mode", "output_coolant"), false);
        scene.text(60, 'A Reactor Needs At Least 4 Ports', [0, 1.5, 3.5]).placeNearTarget();
        scene.addKeyframe();
        scene.idle(80)
        scene.addKeyframe()
        scene.text(60, 'Ports Can Be Changed Using A Configurator', [0, 1.5, 3.5]).placeNearTarget();
        scene.showControls(60, [0.5, 2, 3.5], 'down').rightClick().withItem('mekanism:configurator').whileSneaking();
        scene.idle(80);
			
			scene.addKeyframe();
			
			scene.text(160, 'Required Ports:', [-1, 4, 4]).placeNearTarget();
			
			scene.text(40, 'Input Coolant', [3.5, 1.5, 0]).placeNearTarget();
			scene.idle(40);
			scene.text(40, 'Input Fuel', [1.5, 1.5, 0]).placeNearTarget();
			scene.idle(40);
			scene.text(40, 'Output Waste', [0, 1.5, 1.5]).placeNearTarget();
			scene.idle(40);
			scene.text(40, 'Output Heated Coolant', [0, 1.5, 3.5]).placeNearTarget();
			scene.idle(40);
			scene.addKeyframe();
			scene.idle(10);
			
				
    });

treeoflife.create(['mekanismgenerators:hohlraum', 'mekanismgenerators:hohlraum[mekanism:chemicals={chemical_tanks:[{amount:10L,id:"mekanismgenerators:fusion_fuel"}]}]', 'mekanismgenerators:laser_focus_matrix'])
    .scene('fusion_activation','Mekanism Fusion Reactor: Activation', 'kubejs:fusion_activation', (scene, util) => {
        scene.world.showSection([2, 0, 0, 6, 4, 6], Facing.down);
        scene.idle(10);
        scene.text(60, 'To activate the Fusion Reactor, we will need a few things.', [2, 2.5, 4.5]).placeNearTarget().attachKeyFrame();
        scene.idle(80)
        scene.text(100, 'You will need to put a Hohlraum filled with D-T fuel in the Controller.', [4.5, 5, 3.5]).attachKeyFrame();
        scene.showControls(100, [4.5, 5.5, 3.5], 'down').withItem('mekanismgenerators:hohlraum');
        scene.idle(110);
        scene.world.showSection([0, 0, 0, 1, 4, 6], Facing.down);
        scene.idle(10);
        scene.text(100, 'You will need to shoot 400MRF using Lasers into the Laser Matrix.', [0, 2.5, 3.5]).placeNearTarget().attachKeyFrame();
        scene.idle(110);
			
			//show laser
			scene.world.hideSection([1, 0, 0, 6, 4, 6], Facing.down);
			scene.idle(10)
			scene.rotateCameraY(90);
			scene.idle(5)
			
			scene.text(100, 'The Laser Amplifier needs to have the Red face pointing towards the Matrix.', [1, 2.5, 3]).placeNearTarget().attachKeyFrame();
			scene.idle(110);
			
			scene.rotateCameraY(-90);
			scene.idle(5)
			
			//show everything
			scene.world.showSection([1, 0, 0, 6, 4, 6], Facing.down);
			scene.idle(10)
			
			
			//hide lasers
			scene.world.hideSection([0, 0, 0, 1, 4, 6], Facing.down);
			scene.idle(10);
			
			//fuel input
			
			scene.overlay.showText(100).text("You will also need to give the Reactor fuel.").independent(-50);
			scene.text(50, 'For Deuterium', [5.5, 2.5, 1]).placeNearTarget().attachKeyFrame();
			scene.idle(60);
			scene.text(50, 'For Tritium.', [3.5, 2.5, 1]).placeNearTarget().attachKeyFrame();
			scene.idle(60);
			
			scene.text(80, 'The Reactor mixes the D-T fuel at a set rate when they are pumped in separately.', [4.5, 2.5, 1]).placeNearTarget().attachKeyFrame();
			scene.idle(80);

    });

treeoflife.create(['mekanismgenerators:turbine_casing', 'mekanismgenerators:turbine_valve', 'mekanismgenerators:turbine_vent', 'mekanismgenerators:turbine_rotor', 'mekanismgenerators:turbine_blade', 'mekanismgenerators:rotational_complex', 'mekanismgenerators:saturating_condenser', 'mekanism:pressure_disperser', 'mekanismgenerators:electromagnetic_coil'])
    .scene('turbine_mek','Mekanism: Industrial Turbine', 'kubejs:turbine_mek', (scene, util) => {
        scene.showStructure();
        scene.idle(5);
        scene.text(60, 'The Industrial Turbine uses Heated Coolant to create Power.', [0, 4.5, 4.5]).placeNearTarget().attachKeyFrame();
        scene.idle(65);
        scene.text(60, 'The edges must be made of Turbine Casings.', [0, 4.5, 4.5]).placeNearTarget().attachKeyFrame();
        scene.idle(65);
        scene.text(60, 'The faces can be Turbine Casings, Structural Glass, Valves, or Vents.', [0, 2.5, 2.5]).placeNearTarget().attachKeyFrame();
        scene.idle(65);
        scene.text(60, 'Turbine Valves pump in Steam, or export Power.', [0, 1.5, 2.5]).placeNearTarget().attachKeyFrame();
        scene.idle(65);
        scene.world.hideSection([0, 4, 0, 4, 6, 4], Facing.up);
        scene.idle(5);
        scene.world.hideSection([0, 4, 0, 4, 6, 4], Facing.up);
        scene.world.hideSection([0, 1, 0, 3, 6, 0], Facing.up);
        scene.world.hideSection([0, 1, 0, 0, 6, 3], Facing.up);
        scene.idle(10);
        scene.text(80, 'Turbine Rotors must be placed in the middle. Each Rotor uses 2 Turbine Blades.', [2, 3.5, 2.5]).placeNearTarget().attachKeyFrame();
        scene.idle(85);
        scene.world.showSection([2, 4, 2], Facing.up);
        scene.idle(10);
        scene.text(80, 'A Rotational Complex must be placed on top of the Turbine Rotor.', [2, 4.5, 2.5]).placeNearTarget().attachKeyFrame();
        scene.idle(85);
        scene.world.showSection([1, 4, 1, 3, 4, 1], Facing.up);
        scene.world.showSection([3, 4, 2], Facing.up);
        scene.world.showSection([1, 4, 2], Facing.up);
        scene.world.showSection([1, 4, 3, 3, 4, 3], Facing.up);
        scene.idle(10);
        scene.text(80, 'Pressure Dispersers must fill the layer around the Rotational Complex.', [1, 4.5, 2.5]).placeNearTarget().attachKeyFrame();
        scene.idle(85);
        scene.world.showSection([0, 4, 0, 4, 4, 0], Facing.up);
        scene.world.showSection([0, 4, 4, 4, 4, 4], Facing.up);
        scene.world.showSection([0, 4, 1, 0, 4, 3], Facing.up);
        scene.world.showSection([4, 4, 0, 4, 4, 4], Facing.up);
        scene.world.showSection([0, 1, 0, 3, 3, 0], Facing.up);
        scene.world.showSection([0, 1, 1, 0, 3, 3], Facing.up);
        scene.text(120, 'Starting on this layer, Turbine Vents can be used for the outer faces. These also export Water from the Turbine.', [0, 4.5, 3.5]).placeNearTarget().attachKeyFrame();
        scene.idle(125);
			
			//Show Electromagnetic Coil
			
			scene.world.showSection([2, 5, 2], Facing.up);
			scene.idle(5);
			
			scene.text(60, 'Electromagnetic Coils are placed on top of the Rotational Complex.', [2, 5.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.idle(65);
			
			scene.world.setBlock([2, 5, 1], 'mekanismgenerators:electromagnetic_coil', true);
			scene.world.setBlock([1, 5, 2], 'mekanismgenerators:electromagnetic_coil', true);
			scene.world.setBlock([2, 5, 3], 'mekanismgenerators:electromagnetic_coil', true);
			scene.world.setBlock([3, 5, 2], 'mekanismgenerators:electromagnetic_coil', true);
			scene.world.showSection([2, 5, 1], Facing.up);
			scene.world.showSection([1, 5, 2], Facing.up);
			scene.world.showSection([2, 5, 3], Facing.up);
			scene.world.showSection([3, 5, 2], Facing.up);
			scene.idle(10);
						
			scene.text(100, 'A max of 5 can be placed. They either must connect to each other, or be touching the Rotational Complex.', [2, 5.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.idle(105);
			
			//Saturating Condensers
			
			scene.world.showSection([3, 5, 3], Facing.up);
			scene.world.showSection([1, 5, 1], Facing.up);
			scene.world.showSection([1, 5, 3], Facing.up);
			scene.world.showSection([3, 5, 1], Facing.up);
			
			scene.text(120, 'Saturating Condensers are used to convert Steam back into Water. These are not required, but must be placed on or above the Coil Layer.', [1, 5.5, 1.5]).placeNearTarget().attachKeyFrame();
			scene.idle(130);
			
			//Show other layers
			
			scene.world.showSection([0, 5, 0, 4, 5, 0], Facing.up);
			scene.world.showSection([0, 5, 4, 4, 5, 4], Facing.up);
			scene.world.showSection([0, 5, 1, 0, 5, 3], Facing.up);
			scene.world.showSection([4, 5, 0, 4, 5, 3], Facing.up);
			scene.idle(5);
			
			scene.world.showSection([0, 6, 0, 4, 6, 4], Facing.up);
			scene.idle(20);
			
			scene.world.hideSection([1, 6, 1, 3, 6, 3], Facing.up);
			scene.idle(15);
			scene.world.setBlock([1, 6, 1], 'mekanismgenerators:turbine_vent', false);
			scene.world.setBlock([2, 6, 1], 'mekanismgenerators:turbine_vent', false);
			scene.world.setBlock([3, 6, 1], 'mekanismgenerators:turbine_vent', false);
			scene.world.setBlock([1, 6, 2], 'mekanismgenerators:turbine_vent', false);
			scene.world.setBlock([2, 6, 2], 'mekanismgenerators:turbine_vent', false);
			scene.world.setBlock([3, 6, 2], 'mekanismgenerators:turbine_vent', false);
			scene.world.setBlock([1, 6, 3], 'mekanismgenerators:turbine_vent', false);
			scene.world.setBlock([2, 6, 3], 'mekanismgenerators:turbine_vent', false);
			scene.world.setBlock([3, 6, 3], 'mekanismgenerators:turbine_vent', false);
			scene.idle(10);
			
			scene.world.showSection([1, 6, 1, 3, 6, 3], Facing.down);
			scene.idle(10);
			
			scene.text(80, 'The Top Face can be replaced with Turbine Vents, if needed.', [2.5, 6.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.idle(85);
			
			
    });

treeoflife.create(['mekanismgenerators:fusion_reactor_frame', 'mekanismgenerators:fusion_reactor_port', 'mekanismgenerators:fusion_reactor_controller', 'mekanismgenerators:fusion_reactor_logic_adapter'])
    .scene('fusion_reactor','Mekanism Fusion Reactor', 'kubejs:fusion_mek', (scene, util) => {
        scene.world.showSection([0, 0, 0, 4, 4, 4], Facing.down);
        scene.idle(10);
        scene.text(60, 'The Fusion Reactor can be used to generate millions of RF per tick.', [0, 2.5, 4.5]).placeNearTarget().attachKeyFrame();
        scene.idle(80)
        scene.text(60, 'Ports Can Be Changed Using A Configurator', [1.5, 2.5, 0]).placeNearTarget().attachKeyFrame();
        scene.showControls(60, [1.5, 3.5, 0], 'down').rightClick().withItem('mekanism:configurator').whileSneaking();
        scene.idle(10);
        scene.world.modifyBlock([1, 2, 0], (curState) => curState.with("active", "true"), true);
        scene.idle(20);
        scene.world.modifyBlock([1, 2, 0], (curState) => curState.with("active", "false"), true);
        scene.idle(40);
        scene.world.hideSection([0, 0, 0, 4, 4, 3], Facing.up);
        scene.idle(10);
        scene.text(80, 'The Fusion Reactor is built using this pattern for each face.', [2.5, 2, 4.5]).attachKeyFrame();
        scene.idle(90);
		scene.world.showSection([4, 0, 0, 4, 4, 3], Facing.down);
		scene.idle(10);
		scene.text(60, 'You will need a port for exporting power.', [4, 2.5, 2.5]).placeNearTarget().attachKeyFrame();
		scene.idle(70);
		scene.world.showSection([0, 0, 0, 0, 4, 3], Facing.down);
		scene.idle(30);
		scene.text(60, 'The Laser Matrix is used to kickstart the reactor.', [0, 2.5, 2.5]).placeNearTarget().attachKeyFrame();
		scene.idle(70);
		scene.world.showSection([1, 0, 0, 3, 0, 3], Facing.down);
		scene.idle(30);
		scene.world.showSection([0, 4, 0, 3, 4, 3], Facing.down);
		scene.idle(30);
		scene.text(60, 'The Fusion Reactor Controller must be placed in the middle of the top face.', [2.5, 4.5, 3.5]).placeNearTarget().attachKeyFrame();
		scene.idle(70);
		scene.world.showSection([1, 1, 0, 3, 3, 0], Facing.down);
		scene.idle(30);
		scene.text(30, 'You will need two ports for inputting Deuterium', [3.5, 2.5, 0]).placeNearTarget().attachKeyFrame();
		scene.idle(40);
		scene.text(40, 'and Tritium.', [1.5, 2.5, 0]).placeNearTarget().attachKeyFrame();
		scene.idle(50);
    });
});
